import {getTodosOsPosts} from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const result = await getTodosOsPosts()
    res.status(200).json(result);
};

export async function pubPosts(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message)
        res.status(500).json({ "Erro:": "Falha na requisição!" })
    }
}