const botaoConverteValor = document.querySelector(".converterValores")
const valorSelecionado = document.querySelector(".moedaSelecionada")


function converterValores() {
  const valorDigitado = document.querySelector("input").value
  const valorParaConverter = document.querySelector(".moedaParaConverter")
  const moedaConvertida = document.querySelector(".moedaConvertida")

  console.log(valorSelecionado.value)

  const dolarDoDia = 6.19
  const euroDoDia = 6.45
  const bitcoinDoDia = 590181.82


  if (valorSelecionado.value == "dolar") {
    moedaConvertida.innerHTML = new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD"
    }).format(valorDigitado / dolarDoDia)
  }
  if (valorSelecionado.value == "euro") {
    moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(valorDigitado / euroDoDia)
  }
  if (valorSelecionado.value == "bitcoin") {
    moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(valorDigitado / bitcoinDoDia)
  }

  valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valorDigitado)

}
function mudarMoeda() {
  const tipoMoeda = document.querySelector(".tipoMoeda")
  const imagemMoeda = document.querySelector(".imagemMoeda")

  if(valorSelecionado.value == "dolar"){
    tipoMoeda.innerHTML = "Dolar Americano"
    imagemMoeda.src = "./assets/bandeira-estadosunidos.png"
  }
  if(valorSelecionado.value == "euro"){
    tipoMoeda.innerHTML = "Euro"
    imagemMoeda.src = "./assets/libra.png"
  }
  if(valorSelecionado.value == "bitcoin"){
    tipoMoeda.innerHTML = "Bitcoin"
    imagemMoeda.src = "./assets/bitcoin.png"
  }

}
valorSelecionado.addEventListener("change", mudarMoeda)
document.addEventListener("click", converterValores)
