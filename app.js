alert('Boas Vindas ao Jogo no número Secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()*numeroMaximo+ 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

while(chute!= numeroSecreto){
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);

    if(chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        
        }else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativas';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas ${palavraTentativas}.`);
//if (tentativas > 1){
   // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}else {
   // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
