import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import style from ".index.module.css";

export default function App(){

//Área declarativa, da pra declarar variaveis, funções, constantes, etc

  return (
    //Área de execução, área de ação, não declarar nada aqui.
    <> 
      <div className={style.conteiner}>
        {/* Este é um comentário do Jsx */}
        
        <h1>TESTE</h1>
        
        {/* Criar um cabeçalho com um header, um h1 e uma lista ul com 3 itens com links */}
        <Cabecalho/>

        {/* Criar um Seção de conteúdo com uma div e 2 parágrafos com 3 linhas de lorem.*/}
        <Conteudo/>
        
        {/* Criar um rodapé com uma div uma lista ul e 3 itens com links para redes sociais, um parágrafo com texto : Todos os meus direitos reservadas. 2023, não se esqueça do código do símbolo do copyright.*/}
        <Rodape/>
      </div>
    </>
  )
}