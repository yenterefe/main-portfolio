require("dotenv").config();

const cors = require("cors");

const mongoose = require("mongoose");

const express = require("express");

const PORT = process.env.PORT || 500;

const API_KEY = process.env.OPENAI_API_KEY;

const app = express();

app.use(express.json());

app.use(cors());

const data = require("./data.json");

const OpenAI = require("openai");

const client = new OpenAI({ apiKey: API_KEY });

mongoose.connect(process.env.MONGO_URI);

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    name: String,
    comment: String,
    likes: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

app.get("/api/comment/:id", async (request, response) => {
  try {
    const comment = await Comment.findById(request.params.id);
    response.json(comment);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/comment", async (request, response) => {
  try {
    const newComment = await Comment.create({
      name: request.body.name,
      comment: request.body.comment,
    });
    response.json(newComment);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/comment/:id", async (request, response) => {
  try {
    await Comment.findByIdAndDelete(request.params.id);
    response.send("Deleted");
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/comment/:id", async (request, response) => {
  try {
    const updated = await Comment.findByIdAndUpdate(
      request.params.id,
      {
        name: request.body.name,
        comment: request.body.comment,
      },
      { new: true } // return the updated document
    );
    response.json(updated);
  } catch (error) {
    console.log(error);
  }
});

app.patch("/api/comment/:id/like", async (request, response) => {
  try {
    const updated = await Comment.findByIdAndUpdate(
      request.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    response.json(updated);
  } catch (error) {
    console.log(error);
  }
});

app.patch("/api/comment/:id/dislike", async (request, response) => {
  try {
    const updated = await Comment.findByIdAndUpdate(
      request.params.id,
      { $inc: { dislike: 1 } },
      { new: true }
    );
    response.json(updated);
  } catch (error) {
    console.log(error);
  }
});

// OPEN AI ENDPOINT

app.post("/api/chat", async (request, response) => {
  const userMessage = request.body.message;

  try {
    const answer = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are Yen's AI assistant. If you don't know the answer, do not guess or mention missing information. Instead, politely refer the user to Yen Terefe at yenterefe@gmail.com.",
        },
        {
          role: "system",
          content: JSON.stringify(data),
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      model: "gpt-4o-mini",
      store: true,
    });
    const reply = answer.choices[0].message.content.trim();
    response.json({ reply });
  } catch (error) {
    console.error(
      "Error with OpenAI API:",
      error.response?.data || error.message
    );
    response.status(500).json({ reply: "Sorry, something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
