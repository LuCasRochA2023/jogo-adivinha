function verificaChute(chute){
    const numero= +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML+="<div>valor inválido!</div>";
        return;
}
    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML+=`<div>Erro o numero precisa ser menor que ${maiorValor} e maior que ${menorValor}</div>`;
        return;
}
    if(numero===numeroSecreto){
        document.body.innerHTML=
        `
        <div><h2 class="sec" >Você acertou!</h2>
    
        <div><h3> O número secreto era ${numeroSecreto}</h3></div> 
    
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button></div>`

    }else if(numero>numeroSecreto){
        elementoChute.innerHTML+=`<div>O numero secreto é menor<i class="fa-solid fa-down-long></i></div> `
    }else{
        elementoChute.innerHTML+=`<div>O numero secreto é maior<i class="fa-solid fa-up-long></i></div> `
}
}
function numeroMaiorOuMenor(numero){
    return numero> maiorValor || numero<menorValor;
    
}
document.body.addEventListener("click",e=>{
    if(e.target.id=="jogar-novamente"){
        window.location.reload();
    }
})
function chuteForInvalido(numero){
    return Number.isNaN(numero);
}
console.log(numeroSecreto);
