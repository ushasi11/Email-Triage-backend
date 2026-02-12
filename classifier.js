import axios from "axios";

export async function classifyEmail(emailText) {
  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "mistral",
    prompt: `
Classify this email into one category:
Important, Promotion, Spam, or Personal.
Only return the category name.

Email:
${emailText}
`,
    stream: false
  });

  return response.data.response.trim();
}