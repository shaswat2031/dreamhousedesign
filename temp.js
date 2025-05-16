require("dotenv").config();
const { MongoClient } = require("mongodb");
const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
const path = require("path");

// Hardcoded credentials (only for development use)
const credentials = {
  MONGODB_URI:
    "mongodb+srv://Dinesh:Dinesh@cluster0.grdlpph.mongodb.net/dreamhouse?retryWrites=true&w=majority&appName=Cluster0",
  MONGODB_DB: "dreamhouse",
  CLOUDINARY_CLOUD_NAME: "dxzbyilnv",
  CLOUDINARY_API_KEY: "455189841331171",
  CLOUDINARY_API_SECRET: "ol7Hto8E3TRYYkWHYayhunMd_s8",
};

// Use hardcoded credentials if environment variables are not available
const MONGODB_URI = process.env.MONGODB_URI || credentials.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || credentials.MONGODB_DB;
const CLOUDINARY_CLOUD_NAME =
  process.env.CLOUDINARY_CLOUD_NAME || credentials.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY =
  process.env.CLOUDINARY_API_KEY || credentials.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET =
  process.env.CLOUDINARY_API_SECRET || credentials.CLOUDINARY_API_SECRET;

console.log("Using MongoDB:", MONGODB_URI.substring(0, 25) + "...");
console.log("Using MongoDB Database:", MONGODB_DB);
console.log("Using Cloudinary Cloud:", CLOUDINARY_CLOUD_NAME);

// Configure MongoDB
const uri = MONGODB_URI;
const dbName = MONGODB_DB;

// Configure Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// Project data
const projectsData = [
  {
    id: 1,
    title: "Tiny House",
    category: "residential",
    location: "Amroli",
    year: "2022",
    image: "./public/Tiny House.jpg",
    description:
      'This is the smallest house we have designed, built precisely to meet the client\'s compact requirements. The house includes 3 bedrooms with attached bathrooms, a standing balcony, a living room, and a compact kitchen smartly placed beneath the staircase. It is our first small-scale project, hence the name "Tiny House".',
    tags: ["Compact", "Space-Efficient", "Modern"],
    gallery: ["./public/Tiny House.jpg"],
    challenge:
      "Creating a fully functional 3-bedroom home with all amenities in a limited space without compromising on comfort or aesthetics.",
    solution:
      "We implemented innovative space optimization techniques such as placing the kitchen beneath the staircase, designing multi-functional areas, and using smart storage solutions throughout the home.",
    testimonial: {
      quote:
        "We never thought our small plot could accommodate so much functionality. DreamHouse Design understood our needs perfectly and created a home that feels spacious despite its compact size.",
      author: "Tiny House Client",
    },
    timeToComplete: "3 Months",
    scope:
      "Design and execution of a fully functional, compact residential home with space optimization and personalized architecture.",
    role: "We worked closely with the client to understand their minimal yet practical requirements and turned their dream into reality.",
    achievements:
      "The client and their family were extremely satisfied. Neighbors and the community also appreciated our innovative small-space design.",
  },
  {
    id: 2,
    title: "DESAI HOUSE",
    category: "residential",
    location: "Mota Varachha, Surat",
    year: "2021",
    image: "./public/Desai House.jpg",
    description:
      "A luxurious multi-floor residence designed with modern architectural aesthetics, featuring spacious bedrooms, designer interiors, and advanced construction techniques.",
    tags: ["Luxury", "Multi-floor", "Modern"],
    gallery: ["./public/Desai House.jpg"],
    challenge:
      "Creating a premium residential property that balances luxury with functionality while incorporating modern design elements and construction techniques.",
    solution:
      "We developed a comprehensive architectural plan that maximized space utilization, incorporated high-end materials, and implemented advanced construction methods to ensure durability and aesthetic appeal.",
    testimonial: {
      quote:
        "The DreamHouse team delivered beyond our expectations. Our home is not just beautiful but also perfectly functional for our lifestyle. The attention to detail is impressive.",
      author: "Desai Family",
    },
    timeToComplete: "2 Years",
    scope:
      "Complete architectural planning, structural development, and project execution from foundation to finishing.",
    role: "Led the entire project — from blueprint designing, team coordination, to material sourcing and execution oversight.",
    achievements:
      "Delivered a premium-quality home that exceeded client expectations; featured in a local architectural showcase.",
  },
  {
    id: 3,
    title: "MAALI HOUSE",
    category: "residential",
    location: "Mota Varachha, Surat",
    year: "2020",
    image: "./public/MAALI  HOUSE.jpg",
    description:
      "A custom-designed residence reflecting both elegance and functionality, crafted to suit the client's family lifestyle and preferences.",
    tags: ["Custom", "Elegant", "Family-oriented"],
    gallery: ["./public/MAALI  HOUSE.jpg"],
    challenge:
      "Designing a home that perfectly balances the family's needs for both shared spaces and private areas, with special attention to ventilation and durability.",
    solution:
      "We created a design that incorporated ample natural light, strategic room placement for optimal ventilation, and durable materials that would stand the test of time while maintaining aesthetic appeal.",
    testimonial: {
      quote:
        "DreamHouse understood exactly what our family needed. The home they designed fits our lifestyle perfectly, and the quality of construction is excellent. We've already recommended them to several friends.",
      author: "Maali Family",
    },
    timeToComplete: "1.5 Years",
    scope:
      "Full-scale design, civil construction, and interior coordination. Emphasis on ventilation, space, and durability.",
    role: "Directly handled the design-to-delivery process, collaborating with subcontractors and managing quality control.",
    achievements:
      "Earned repeated business and referrals from the satisfied client. Commended for timely delivery and outstanding craftsmanship.",
  },
  {
    id: 5,
    title: "Sun Temple Renovation",
    category: "heritage",
    location: "Gujarat",
    year: "2021",
    image: "./public/Sun temple.jpg",
    description:
      "Careful restoration of historic elements while incorporating modern structural reinforcements to preserve this cultural landmark for future generations.",
    tags: ["Heritage", "Restoration", "Cultural"],
    gallery: ["./public/Sun temple.jpg"],
    challenge:
      "Balancing authentic historical preservation with necessary structural improvements and modern safety requirements.",
    solution:
      "Employed traditional craftsmen alongside modern engineering techniques to ensure both authenticity and structural integrity.",
    testimonial: {
      quote:
        "The restoration maintained the temple's spiritual essence while ensuring its longevity. A perfect blend of respect for heritage and modern expertise.",
      author: "Heritage Conservation Committee",
    },
    timeToComplete: "18 Months",
    scope:
      "Historical research, restoration planning, material sourcing, and implementation oversight.",
    role: "Consultation and partial implementation of specific restoration elements.",
    achievements:
      "Recognized for excellence in heritage conservation, maintaining historical authenticity while improving structural stability.",
  },
];

// Upload image to Cloudinary
async function uploadToCloudinary(imagePath) {
  try {
    console.log(`Uploading ${imagePath} to Cloudinary...`);

    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      console.error(`File not found: ${imagePath}`);
      return null;
    }

    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "dreamhouse",
    });
    console.log(`Successfully uploaded to ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${imagePath} to Cloudinary:`, error);
    return null;
  }
}

// Main function to upload data
async function uploadData() {
  console.log(`Connecting to MongoDB...`);
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB successfully");

    const db = client.db(dbName);
    const projectsCollection = db.collection("projects");

    // Clear existing data
    const deleteResult = await projectsCollection.deleteMany({});
    console.log(`Cleared ${deleteResult.deletedCount} existing projects`);

    // Process each project
    for (const project of projectsData) {
      console.log(`\nProcessing project: ${project.title}`);

      try {
        // Upload main image
        const imageUrl = await uploadToCloudinary(project.image);

        if (!imageUrl) {
          console.warn(
            `Could not upload main image for ${project.title}, using original path`
          );
        }

        // Upload gallery images
        const galleryUrls = [];
        for (const galleryImage of project.gallery) {
          const galleryUrl = await uploadToCloudinary(galleryImage);
          if (galleryUrl) {
            galleryUrls.push(galleryUrl);
          } else {
            console.warn(
              `Could not upload gallery image ${galleryImage}, skipping`
            );
          }
        }

        // If gallery is empty but we have a main image, use that
        if (galleryUrls.length === 0 && imageUrl) {
          galleryUrls.push(imageUrl);
        }

        // Create project object with Cloudinary URLs
        const projectToInsert = {
          ...project,
          image: imageUrl || project.image,
          gallery: galleryUrls.length > 0 ? galleryUrls : project.gallery,
          updatedAt: new Date(),
        };

        // Insert to MongoDB
        const insertResult = await projectsCollection.insertOne(
          projectToInsert
        );
        console.log(
          `Inserted project: ${project.title} with ID: ${insertResult.insertedId}`
        );
      } catch (projectError) {
        console.error(
          `Error processing project ${project.title}:`,
          projectError
        );
      }
    }

    console.log("\n✅ All projects processed");

    // Verify insertion
    const count = await projectsCollection.countDocuments();
    console.log(`Total projects in database: ${count}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    console.log("Saving to local JSON as fallback...");
    await saveToLocalJson();
  } finally {
    try {
      await client.close();
      console.log("MongoDB connection closed");
    } catch (err) {
      console.error("Error closing MongoDB connection:", err);
    }
  }
}

// Fallback function to save to local JSON
async function saveToLocalJson() {
  try {
    console.log("Processing projects for local JSON storage...");

    const processedProjects = [];

    // Process each project
    for (const project of projectsData) {
      console.log(`Processing project for JSON: ${project.title}`);

      // Keep original image paths when saving to JSON
      const projectToSave = {
        ...project,
      };

      processedProjects.push(projectToSave);
    }

    // Write to file
    const outputPath = path.join(__dirname, "projects-data.json");
    fs.writeFileSync(outputPath, JSON.stringify(processedProjects, null, 2));
    console.log(`Saved projects data to ${outputPath}`);
  } catch (error) {
    console.error("Error saving to local JSON:", error);
  }
}

// Run the upload function
uploadData().catch((err) => {
  console.error("Unhandled error in upload process:", err);
  process.exit(1);
});
