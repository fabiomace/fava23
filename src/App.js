import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape';
import Conteudo, { OlaMundo } from './componentes/Conteudo'


function App() {
  OlaMundo();
  return (
    <>
   <Cabecalho logo="logo192.png" titulo='Favoritos' subtitulo="O melhor gerenciador já criado na internet!!"/>
   <Rodape imagem="facebook.png"></Rodape>
   <Rodape imagem="twitter.png"></Rodape>
   <Rodape imagem="instagram.png"></Rodape>
   <Conteudo/>
   <Rodape/>
   </>
  );
}

export default App;
