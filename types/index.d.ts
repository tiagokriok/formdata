interface FormPayload {
  fromName: string;
  fromEmail: string;
  subject: string;
  toEmail: string;
  redirectTo: string;
  [key: string]: string;
}
