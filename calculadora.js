function calcular(moedaOrigem, moedaDestino, valorAConverter) {
  let Origem, Destino;
  const moedas = [
    { name: "BTC", valor: 289178.59 },
    { name: "CAD", valor: 4.34 },
    { name: "USD", valor: 5.25 },
    { name: "EUR", valor: 6.35 },
    { name: "JPY", valor: 0.048 },
    { name: "GBP", valor: 7.4 },
    { name: "BRL", valor: 1.0 },
    { name: "CNY", valor: 0.81 },
  ];
  for (let moeda of moedas) {
    if (moeda.name === moedaOrigem.toUpperCase()) Origem = moeda.valor;

    if (moeda.name === moedaDestino.toUpperCase()) Destino = moeda.valor;
  }
  return `${calculadora(Origem, Destino, valorAConverter).toFixed(
    2
  )} ${moedaDestino.toUpperCase()}`;
}

function calculadora(origem, destino, valor) {
  return (origem * valor) / destino;
}

/*
                        Modo de uso
    1) Chame a função calcular passando os 3 parametros dentro de cum console.log().
    Parametros
        1- Entre com o codigo da moeda de origem como string.
        2- Entre com o codigo da moeda de destino como string.
        3- Entre com o valor a ser convertido como number.
    2) Execute o codigo no node.


    Codigos
    -- 'BTC' = BITCOIN
    -- 'CAD' = DOLAR CANADENSE
    -- 'USD' = DOLAR AMERICANO
    -- 'EUR' = EURO
    -- 'JPY' = IENE
    -- 'GBP' = LIBRA ESTERLINA
    -- 'BRL' = REAL
    -- 'CNY' = YUAN

*/

// Testes

//-> 100 DOLARES para EURO
console.log(calcular("BRL", "EUR", 100));
// -> 1000 DOLARES para REAL
console.log(calcular("usd", "brl", 1000));
// -> 1000 REAIS para IENE
console.log(calcular("BRL", "jpy", 1000));

//Resultado Esperado
// 15.74 EUR
// 5250.00 BRL
// 20833.33
