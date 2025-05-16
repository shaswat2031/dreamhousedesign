import { MongoClient } from "mongodb";

// MongoDB Connection
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://Dinesh:Dinesh@cluster0.grdlpph.mongodb.net/";
const dbName = process.env.MONGODB_DB || "dreamhouse";

export async function GET() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(dbName);
    const projectsCollection = db.collection("projects");

    // Get count of all projects
    const count = await projectsCollection.countDocuments();

    return new Response(JSON.stringify({ count }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error getting projects count:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get projects count" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  } finally {
    await client.close();
  }
}
