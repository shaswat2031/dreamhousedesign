import { MongoClient } from "mongodb";
// Import from server version if Cloudinary is needed
// import cloudinary from '@/lib/cloudinary-server';

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

    // Get all projects
    const projects = await projectsCollection.find({}).toArray();

    return new Response(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  } finally {
    await client.close();
  }
}

export async function POST(request) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const projectData = await request.json();

    // Validate required fields
    if (
      !projectData.title ||
      !projectData.category ||
      !projectData.location ||
      !projectData.description ||
      !projectData.image
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Generate a unique ID (could use MongoDB's ObjectId instead)
    const timestamp = new Date().getTime();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const newId = `p-${timestamp}-${randomStr}`;

    // Create the project object with ID
    const newProject = {
      ...projectData,
      id: newId,
      createdAt: new Date(),
    };

    await client.connect();
    const db = client.db(dbName);
    const projectsCollection = db.collection("projects");

    // Insert the new project
    await projectsCollection.insertOne(newProject);

    return new Response(
      JSON.stringify({ success: true, project: newProject }),
      {
        headers: { "Content-Type": "application/json" },
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return new Response(JSON.stringify({ error: "Failed to create project" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  } finally {
    await client.close();
  }
}
