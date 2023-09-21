//gera um numero aleatorio entre 0 e 100
const numero_aleatorio = Math.floor(Math.random() * 100);
alert(numero_aleatorio)


const tentativa_imput = document.getElementById("tentativa_input");
//referenciando o botão para a variavel "verificar_button"
const verificar_button = document.getElementById("verificar_button")

verificar_button.addEventListener("click",function(){
    //alert(tentativa_input.value)


    const tentativa = tentativa_input.value;
    
    const escopo = tentativa < 0 || tentativa > 100 || tentativa == ""? true : false
    
    if(escopo){

    alert("o numero fora do escopo, escolha um numero entre 0 e 100.")

    }  

    if(tentativa == numero_aleatorio){

        resultado_mensagem.innerHTML = 'Parabens! você acertou'
        resultado_mensagem.classList.add("sucesso")
        resultado_mensagem.classList.add("flha")
        resultado_mensagem.classList.remove("erro")
    
    
    }else if (tentativa < numero_aleatorio){
        resultado_mensagem.innerHTML = 'tente um numero maior'
        resultado_mensagem.classList.add("flha")
        resultado_mensagem.classList.remove("sucesso")
        resultado_mensagem.classList.remove("erro")
       

        } else {
            resultado_mensagem.innerHTML = 'tente um numero menor'
            resultado_mensagem.classList.add("falha")
            resultado_mensagem.classList.remove("sucesso")
        resultado_mensagem.classList.remove("erro")
        }





    
        //atividade
        //se o numero for maior que o sorteado devera avisar o usuario que o numero é maior
        //se o numero for menor que o sorteado devera avisar o usuario que o numero é maior

        //desafio
          
    


})