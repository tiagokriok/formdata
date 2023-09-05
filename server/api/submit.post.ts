const BASE_URL = "https://api.mailchannels.net/tx/v1/send";

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
    return new Response("Invalid payload", { status: 400 });
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
      email: "hi@formdata.cc",
      name: "Form Data",
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
