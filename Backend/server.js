require('dotenv').config();

const cors = require("cors");

const PORT = process.env.PORT;

const API_KEY = process.env.OPENAI_API_KEY;

const express = require('express');

const app = express();

app.use(express.json());

app.use(cors());


const OpenAI = require("openai");

const client = new OpenAI({ apiKey: API_KEY });

const YEN_TEREFE = [
    {
        "question": "Who are you?",
        "answer": "Graduate with a B.S. in International Marketing, an M.A. in Cultural Heritage Management (Anthropology), and an M.H.P in Historic Preservation with a focus on digital technology (VR and 3D laser scanning). Holder of a Certificate in Building Information Modeling (BIM) and Unity Certified User: Programmer credential. Developer experienced in web engineering, XR/VR, game development, open source contributions, and structured algorithm practice."
    },
    {
        "question": "What programming languages do you use?",
        "answer": "JavaScript, TypeScript, Python, and C#. In total started programming since 2020"
    },
    {
        "question": "What frontend technologies do you know?",
        "answer": "React, Tailwind CSS, component-based design, and Jest for unit testing."
    },
    {
        "question": "What backend technologies do you know?",
        "answer": "Node.js, REST APIs, Git/GitHub workflows, and Firebase integration."
    },
    {
        "question": "What experience do you have in XR and game development?",
        "answer": "Unity (C#), Vuforia, AR/VR prototyping, Smithsonian XR fellowship projects, and game development including publishing an indie Unity game on Itch.io and Google Play."
    },
    {
        "question": "Tell me about your open-source work.",
        "answer": "Contributor to Columbus Code & Coffee open-source project, building reusable React components aligned with Figma designs, styled with Tailwind CSS, and tested with Jest."
    },
    {
        "question": "Tell me about your portfolio website.",
        "answer": "Built with React and Tailwind CSS, featuring animations, modular sections, and an integrated chatbot entry point."
    },
    {
        "question": "Tell me about your Smithsonian XR fellowship project.",
        "answer": "Prototyped AR/VR applications in Unity for cultural heritage, including note-taking features and Vuforia scanning workflows."
    },
    {
        "question": "Tell me about your game projects.",
        "answer": "Developed 'Salary Man,' an indie top-down Unity game published on Itch.io and Google Play, demonstrating end-to-end development and release."
    },
    {
        "question": "What problem-solving approaches do you use?",
        "answer": "Structured practice organized into sets by algorithmic pattern (two-pointers, stacks, trees, prefix sums, sliding window, etc.). Emphasis on templates, readability, testable units, and well-documented solutions."
    },
    {
        "question": "What are your core values as a developer?",
        "answer": "Open source collaboration, use of AR/VR for cultural heritage, accessibility and inclusivity in design, and continuous improvement through reflection and iteration."
    },
    {
        "question": "What are your career highlights?",
        "answer": "Revitalized an open-source site with reusable tested components, built and shipped an indie game, developed XR prototypes for the Smithsonian, and designed and published a portfolio website, and developed a full-stack food finder app to support residents in communities with limited access to fresh and affordable food"
    }
]

app.post("/api/chat", async (request, response) => {
    const userMessage = request.body.message;

    const match = YEN_TEREFE.find(item =>
        userMessage.includes(item.question)
    );

    if (!match) {
        // If no match, reply with fallback
        return response.json({
            reply: "I don't have that information. Please contact Yen Terefe at yenterefegmail.com"
        });
    }

    try {
        const answer = await client.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "system",
                    content: JSON.stringify(YEN_TEREFE),
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