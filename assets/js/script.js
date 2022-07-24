import { token } from "./models/token.js";

var pessoa = new token("devSantos16");

async function getJson() {

    try {
        const response = await fetch(pessoa.url());
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error.message);
    }

}