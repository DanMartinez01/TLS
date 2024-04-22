import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { pdfUrl, name, email, phone, moreDetails, language } = req.body;
  const mail = process.env.EMAIL;

  try {
    const { data, error } = await resend.emails.send({
      from: "info@translingualsolutions.com",
      to: { mail },
      subject: "TLS-New Request",
      html: `<div style="font-family: Arial, sans-serif; color: #333;">
      <p><strong>From:</strong> ${name}</p>
      <p><strong>PDF attachment link:</strong> ${pdfUrl}</p>
      <p><strong>Translate to:</strong> <span style="font-weight: bold;">${language}</span></p>
      <p><strong>Contact:</strong> ${phone}</p>
      <p><strong>More details:</strong> ${moreDetails}</p>
      <img src="/favicon.png" alt="TLS" style="width: 100px; height: auto; margin-top: 20px;">
    </div>`,
      replyTo: email,
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
};
