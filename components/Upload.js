import React, { useState } from "react";

const Upload = () => {
  const [pdfSrc, setPdfSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setPdfSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }
  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    // Collect form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const moreDetails = formData.get("more_details");
    const language = formData.get("language");

    // Upload PDF
    const fileInput = form.elements["file"];
    const file = fileInput.files[0];
    const pdfUrl = await uploadPDF(file);

    // Send email with PDF URL and form data
    await sendEmail({ pdfUrl, name, email, phone, moreDetails, language });
  }

  // Function to upload PDF
  async function uploadPDF(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my-uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dov1ivlbc/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    return data.secure_url;
  }

  // Function to send email
  async function sendEmail({
    pdfUrl,
    name,
    email,
    phone,
    moreDetails,
    language,
  }) {
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdfUrl,
          name,
          email,
          phone,
          moreDetails,
          language,
        }),
      });
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <>
      <form
        method="post"
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        className="w-full p-4 lg:w-2/4 md:w-2/4 bg-yellow rounded-md shadow-lg text-center mx-auto"
      >
        <div className="my-6 text-black-600 flex flex-col items-start">
          <input
            type="file"
            name="file"
            accept=".pdf"
            className="hidden"
            id="file-upload"
            required
          />
          <label htmlFor="name" className="mb-1">
            Full name<span className="text-red-500">*</span>/Nombre completo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jane Doe"
            className="w-full block border border-gray-200  py-3 px-2 rounded-md mb-2 text-black-500"
            required
          />
          <label htmlFor="email" className="mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@example.com"
            className="w-full block border border-gray-300 focus:border-1 focus:border-gray-100 py-3 px-2 rounded-md mb-2 text-black-500"
            required
          />
          <label htmlFor="phone" className="mb-1">
            Phone<span className="text-red-500">*</span>/Telefono
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="1122334455"
            className="w-full block border border-gray-300 focus:border-2 focus:border-green-500 py-3 px-2 rounded-md mb-2 text-black-500"
            required
          />
          <label htmlFor="more_details" className="mb-1">
            More details (optional)
            <span className="text-black">/Mas informacion (opcional)</span>
          </label>
          <textarea
            name="more_details"
            id="more_details"
            placeholder="More Details..."
            className="w-full block border border-gray-300 focus:border-2 focus:border-green-500 py-3 px-2 rounded-md mb-2 text-black-500"
          ></textarea>
          <label htmlFor="language" className="mb-1">
            Translate to<span className="text-red-500">*</span>/Traducir a
          </label>
          <select
            name="language"
            id="language"
            className="w-full block border border-gray-300  py-3 px-2 rounded-md mb-2 text-black-500"
            required
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
          <label
            htmlFor="file-upload"
            className="w-full md:w-auto border border-gray-400 text-gray-700 py-2 px-8 md:px-4 rounded-lg cursor-pointer inline-block mt-10 md:mt-0"
          >
            Choose File
          </label>
        </div>

        {pdfSrc && !uploadData && (
          <button
            type="submit"
            className="w-2/4 bg-green hover:bg-yellow-200 text-white-300 py-2 px-8 rounded-lg cursor-pointer inline-block mt-10"
          >
            Upload PDF
          </button>
        )}

        {uploadData && (
          <div className="mt-4">
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          </div>
        )}
      </form>
    </>
  );
};

export default Upload;
