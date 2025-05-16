import { MongoClient } from "mongodb";

// MongoDB Connection
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://Dinesh:Dinesh@cluster0.grdlpph.mongodb.net/";
const dbName = process.env.MONGODB_DB || "dreamhouse";

export async function DELETE(request, { params }) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const { id } = params;

    if (!id) {
      return new Response(JSON.stringify({ error: "Project ID is required" }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }

    await client.connect();
    const db = client.db(dbName);
    const projectsCollection = db.collection("projects");

    // Delete the project
    const result = await projectsCollection.deleteOne({ id });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return new Response(JSON.stringify({ error: "Failed to delete project" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  } finally {
    await client.close();
  }
}
