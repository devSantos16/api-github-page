import React, { Component } from "react";
import Container from "./assets/components/container"
import "./assets/css/style.css"
import ShowData from "./assets/js/script"
import imageGitHub from "./assets/img/logotipo-do-github.png"

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <img className="img-container" src={imageGitHub} alt="Imagem do GitHub" />
                <div>
                    <input className="input-container" id="input-event" type="text" placeholder="Digite o nickname do github"></input>
                    <button id="button-event" onClick={ShowData} className="button-container btn btn-success">Procurar</button>
                </div>
            </Container>
        )
    }
}

export default App;