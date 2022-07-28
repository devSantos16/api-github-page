import "./models/token";
import { token } from "./models/token";



async function ShowData(){
    const input = document.getElementById("input-event").value;
    const data = await ResponseUser(input);

    if(!data.login){
        window.alert(data.message);
    }
    else{
        window.alert(data.login)
    }
}

async function ResponseUser(input) {
    let Pessoa = new token(input);
    try {
        const response = await fetch(Pessoa.URL());
        const data = await response.json();
        return data;
    }
    catch (error) {
        window.alert(error)
    }
}

export default ShowData
