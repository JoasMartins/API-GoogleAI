import express from "express"
import { listarPosts, pubPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);
    app.post("/posts", pubPosts)
}

export default routes;