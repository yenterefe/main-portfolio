require('dotenv').config();

const cors = require("cors");

const PORT = process.env.PORT;

const API_KEY = process.env.OPENAI_API_KEY;

const express = require('express');

const app = express();

app.use(express.json());

app.use(cors());

const data = require('./data.json');


const OpenAI = require("openai");

const client = new OpenAI({ apiKey: API_KEY });

app.post("/api/chat", async (request, response) => {
    const userMessage = request.body.message;

    try {
        const answer = await client.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are Yen's AI assistant. If you don't know the answer, do not guess or mention missing information. Instead, politely refer the user to Yen Terefe at yenterefe@gmail.com."
                },
                {
                    role: "system",
                    content: JSON.stringify(data),
                },
                {
                    role: "user",
                    content: userMessage
                },
            ],
            model: "gpt-4o-mini",
            store: true,

        });
        const reply = answer.choices[0].message.content.trim();
        response.json({ reply });

    } catch (error) {
        console.error("Error with OpenAI API:", error.response?.data || error.message);
        response.status(500).json({ reply: "Sorry, something went wrong." });
    }
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});