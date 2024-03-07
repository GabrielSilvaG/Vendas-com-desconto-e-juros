/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.
 
Código Condição de pagamento:
- À vista débito, receber 10% de desconto; CÓDIGO: 1
- À vista no dinheiro ou pix, receber 15% de desconto; CÓDIGO: 2
- Em 2x, preço normal da etiqueta sem juros; CÓDIGO: 3
- Acima de 2x, preço normal da etiqueta mais juros de 10%; CÓDIGO: 4
*/


let valorProduto = 170.12;
let vezesPagamento = 5;
console.log('Valor do Produto R$=' + valorProduto.toFixed(2))


const avDebito = valorProduto - (valorProduto * 0.1);  /*  '1' */
const avDinheiroPix = valorProduto - (valorProduto * 0.15); /* '2' */
const duasVezes = valorProduto / 2;  /* '3' */
const acimaDuasVezes = valorProduto * 0.1; /* '4' */
const tipoPagamento = '4';





if (tipoPagamento === '1') {
    console.log('Valor a pagar com desconto de 10% R$', + avDebito, 'Desconto R$:', + valorProduto * 0.10);  /* OK! */

} else if (tipoPagamento === '2') {
    console.log('Valor a pagar com desconto de 15% R$', + avDinheiroPix, 'Desconto R$:' + valorProduto * 0.15);  /* OK! */

} else if (tipoPagamento === '3') {
    console.log('Valor em 2x = R$', + duasVezes);   /* OK! */

} else {
    tipoPagamento === '4' && vezesPagamento >= '3'
    console.log('Valor do produto com 10% de juros em ' + vezesPagamento + 'x ' + 'R$=' + (acimaDuasVezes + valorProduto).toFixed(2) , 'Parcelas de R$='+ ((acimaDuasVezes + valorProduto) / vezesPagamento).toFixed(2));

}

