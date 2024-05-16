import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Upload = () => {
  const { t } = useTranslation();

  const [pdfSrc, setPdfSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [fileName, setFileName] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [areaCode, setAreaCode] = useState("");

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setPdfSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    // setFileName(changeEvent.target.files[0].name);
    // reader.readAsDataURL(changeEvent.target.files[0]);
    setFileName(file.name);
    if (fileType === "application/pdf" || fileType.startsWith("image/")) {
      reader.readAsDataURL(file);
    } else {
      setUploadData({
        error: "Unsupported file type. Please upload a PDF or an image.",
      });
    }
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    // Collect form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = `${areaCode}-${formData.get("phone")}`; // Combine area code with phone number
    const moreDetails = formData.get("more_details");
    const language = formData.get("language");

    // Upload PDF
    const fileInput = form.elements["file"];
    const file = fileInput.files[0];

    try {
      // Check file size
      const maxFileSize = 10 * 1024 * 1024; // 10 MB in bytes
      if (file.size > maxFileSize) {
        throw new Error(
          "File size exceeds the limit: 10MB. / El archivo es mayor a 10MB. Contact us at: info@translingualsolutions.com"
        );
      }

      const pdfUrl = await uploadPDF(file);

      // Send email with PDF URL and form data
      await sendEmail({ pdfUrl, name, email, phone, moreDetails, language });

      // Set "sent!" message state
      setIsSent(true);

      // Reset the form
      form.reset();
      setPdfSrc(null);
      setUploadData(null);
      setFileName("");
      setAreaCode(""); // Reset area code state
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
      setUploadData({ error: error.message }); // Set error message in state
    }
  }

  async function uploadPDF(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my-uploads");

    const data = await fetch(
      `https://api.cloudinary.com/v1_1/tlscloud/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    return data.secure_url;
  }

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
        className="w-full p-4  mb-24 lg:w-2/4 md:w-2/4 rounded-md lg:shadow-xl xl:shadow-2xl shadow-slate-700 text-center"
      >
        <div className="my-4 text-black-500 text-sm flex flex-col items-start">
          <input
            type="file"
            name="file"
            accept=".pdf .png, .jpg, .jpeg, .txt, .doc, .docx"
            className="hidden"
            id="file-upload"
            required
          />
          <label htmlFor="name" className="mb-1">
            Full name<span className="text-red-500"></span>/Nombre completo*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jane Doe"
            className="w-full block border border-gray-400  py-2 px-2 rounded-md mb-2 text-black-500"
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
            className="w-full block border border-gray-400 focus:border-1 focus:border-gray-100 py-2 px-2 rounded-md mb-2 text-black-500"
            required
          />
          <label htmlFor="phone" className="mb-1">
            Phone<span className="text-red-500"></span>/Telefono*
          </label>
          <div className="flex mb-2">
            <input
              type="tel"
              name="areaCode"
              id="areaCode"
              placeholder="Area Code"
              className="w-1/4 block border border-gray-400 focus:border-2 focus:border-green-500 py-2 px-2 mr-2 rounded-md text-black-500"
              value={areaCode}
              onChange={(e) => setAreaCode(e.target.value)}
              required
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="w-3/4 block border border-gray-400 focus:border-2 focus:border-green-500 py-2 px-2 rounded-md text-black-500"
              required
            />
          </div>
          <label
            htmlFor="more_details"
            className="mb-1 text-left flex flex-col"
          >
            <span className="text-black">More details(optional)</span>
            <span className="text-black">Más información (opcional)</span>
          </label>
          <textarea
            name="more_details"
            id="more_details"
            placeholder={t("formMsg")}
            className="w-full text-xs block border border-gray-400 focus:border-2 focus:border-green-500 py-3 px-2 rounded-md mb-2 text-black-500"
          ></textarea>
          <label htmlFor="language" className="mb-1">
            Translate to<span className="text-red-500"></span>/Traducir a*
          </label>
          <select
            name="language"
            id="language"
            className="w-full block border border-gray-400  py-2 px-2 rounded-md mb-2 text-black-500"
            required
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <label
            htmlFor="file-upload"
            className="w-full md:w-auto border border-gray-400 text-gray-700 py-2 px-8 md:px-4 rounded-lg cursor-pointer inline-block mt-10 md:mt-0"
          >
            Choose File
          </label>
          {fileName && (
            <span className="text-green font-bold-400 text-center mx-auto mt-2 ">
              {" "}
              {fileName}
            </span>
          )}
        </div>
        {pdfSrc && !uploadData && !isSent && (
          <button
            type="submit"
            className="w-2/4 bg-green hover:bg-yellow-200 text-white-300 py-2 px-8 rounded-lg cursor-pointer inline-block my-10"
          >
            Upload PDF
          </button>
        )}
        {isSent && (
          <span className="mt-4 flex flex-col items-center justify-center">
            <span className="flex flex-col mb-2">
              <p className="text-2xl text-black-500 font-semibold mx-1">
                Your message was sent successfully!
              </p>
              <p className="text-2xl text-black-500 font-semibold mx-1">
                Consulta enviada con éxito!
              </p>
            </span>
            <FaCheckCircle color="green" size={30} />
          </span>
        )}
        {uploadData && uploadData.error && (
          <p className="text-black-500">{uploadData.error}</p>
        )}
      </form>
    </>
  );
};

export default Upload;
