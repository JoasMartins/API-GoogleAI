import conectarAoBanco from "../config/dbConfig.js";
const database = await conectarAoBanco(process.env.STRING_CONECTION);

export default async function getTodosOsPosts() {
    const db = database.db("api-googleai");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}
