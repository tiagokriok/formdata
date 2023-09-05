const BASE_URL = "https://api.mailchannels.net/tx/v1/send";

function generateEmailBody(data: any) {
  let emailBody = "Form submission:\n\n";

  for (const [key, value] of Object.entries(data)) {
    if (
      key !== "toEmail" &&
      key !== "fromEmail" &&
      key !== "fromName" &&
      key !== "subject"
    ) {
      emailBody += `${key}: ${value}\n`;
    }
  }

  return emailBody;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const sendEmail = {
    personalizations: [
      {
        to: [
          {
            email: body.toEmail,
            name: "Test Recipient",
          },
        ],
      },
    ],
    from: {
      email: body.fromEmail,
      name: body.fromName,
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
