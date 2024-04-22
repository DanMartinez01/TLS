import cloudinary from "cloudinary";
import formidable from "formidable-serverless";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form: ", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const filePath = files.file.path;
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          resource_type: "auto",
          folder: "pdf_uploads",
          quality: "auto:good",
        });
        const downloadUrl = result.secure_url;
        res.status(200).json({ downloadUrl });
      } catch (error) {
        console.error("Error uploading file to Cloudinary: ", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
