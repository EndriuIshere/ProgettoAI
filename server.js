const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from the frontend

const ai = new GoogleGenAI({ apiKey: "AIzaSyAQIHJGsmlylFZ7HT7YaosrHgzjQnISGCM" });

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    res.json({ text: response.text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
