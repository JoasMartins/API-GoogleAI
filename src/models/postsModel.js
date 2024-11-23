import "dotenv/config"
import { ObjectId } from "mongodb";
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

export async function updatePost(id, post) {
    const db = database.db("api-googleai");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:post});
}