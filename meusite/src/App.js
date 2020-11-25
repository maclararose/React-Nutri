import React, {Component} from 'react';
import './style.css';
//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            nutri: []
        };
    }

    componentDidMount(){
        const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)
        .then((r) => r.json()
        .then((json) => {
            let state = this.state;

            state.nutri = json;
            this.setState(state);
        }));
    }

    render(){
        return(
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>
                {this.state.nutri.map((item) =>{
                    return(
                        <article className="post" key={item.id}>
                            <strong className="titulo">{item.titulo}</strong>
                            <img className="img" src={item.capa}/>
                            <p className="paragrafo">{item.subtitulo}</p>
                            <a className="botao" href="">Acessar</a>
                        </article>
                    );
                })}
            </div>
        );
    }
}
export default App;