const BASE_URL = "https://api.mailchannels.net/tx/v1/send";
const FROM_EMAIL = "hi@formdata.cc";
const FROM_NAME = "FormData Submission";

interface FormPayload {
  fromName: string;
  subject: string;
  toEmail: string;
  [key: string]: string;
}

function generateEmailBody(data: any) {
  let emailBody = "Form submission:\n\n";

  for (const [key, value] of Object.entries(data)) {
    if (key !== "toEmail" && key !== "fromName" && key !== "subject") {
      emailBody += `${key}: ${value}\n`;
    }
  }

  return emailBody;
}

function isFormPayload(obj: any): obj is FormPayload {
  return (
    typeof obj === "object" &&
    typeof obj.fromName === "string" &&
    typeof obj.subject === "string" &&
    typeof obj.toEmail === "string"
  );
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!isFormPayload(body)) {
    const missingFields = [];
    if (typeof body.fromName !== "string") missingFields.push("fromName");
    if (typeof body.subject !== "string") missingFields.push("subject");
    if (typeof body.toEmail !== "string") missingFields.push("toEmail");

    return new Response(
      `Missing or invalid fields: ${missingFields.join(", ")}`,
      {
        status: 400,
      }
    );
  }

  const sendEmail = {
    personalizations: [
      {
        to: [
          {
            email: body.toEmail,
            name: "Form Data User",
          },
        ],
      },
    ],
    from: {
      email: FROM_EMAIL,
      name: FROM_NAME,
    },
    subject: body.subject,
    content: [
      {
        type: "text/plain",
        value: generateEmailBody(body),
      },
    ],
  };

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendEmail),
  });

  return response;
});
