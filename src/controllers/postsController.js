import getTodosOsPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const result = await getTodosOsPosts()
    res.status(200).json(result);
}