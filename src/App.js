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
   <Cabecalho facebook="facebook.png"></Cabecalho>
   <Cabecalho facebook="twitter.png"></Cabecalho>
   <Cabecalho facebook="instagram.png"></Cabecalho>
   <Conteudo/>
   <Rodape/>
   </>
  );
}

export default App;
