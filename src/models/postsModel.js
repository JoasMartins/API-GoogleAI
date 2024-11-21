import conectarAoBanco from "../config/dbConfig.js";
const database = await conectarAoBanco(process.env.STRING_CONECTION);

export async function getTodosOsPosts() {
    const db = database.db("api-googleai");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = database.db("api-googleai");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}