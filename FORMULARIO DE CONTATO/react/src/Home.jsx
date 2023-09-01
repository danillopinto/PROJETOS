import { useDeferredValue } from "react";

function Home() {

  return (
    <div>
      <div id="form">
 
            <div id="barraP1">
                <div class="barraP1"></div>
                <div class="barraP1"></div>
                <div class="barraP1"></div>
            </div>
 
               <h1>Contato</h1>
    
            <div id="barraP2">
                <div class="barraP2"></div>
                <div class="barraP2"></div>
                <div class="barraP2"></div>
            </div>

            <input type="text" placeholder="Digite seu nome e sobrenome" class="input123" id="input1"/>
            <input type="text" placeholder="Digite seu e-mail" class="input123" id="input2"/>
            <input type="text" placeholder="Digite o assunto" class="input123" id="input3"/>
            <input type="text" placeholder="Sua mensagem" id="input4" />
            
            <div>
                <input type="submit" value={"Enviar"} id="bnt" />
            </div>
      </div>

    </div>
  )
}

const botao = document.querySelector("#bnt")

botao.addEventListener("click", function(e){

  e.preventDefault();

  const name = document.querySelector("#input1");
  const value1 = name.value;
  console.log(value1);

  const email = document.querySelector("#input2");
  const value2 = email.value;
  console.log(value2);

  const assunto = document.querySelector("#input3");
  const value3 = assunto.value;
  console.log(value3);

  const msg = document.querySelector("#input4");
  const value4 = msg.value;
  console.log(value4);

})

export default Home
