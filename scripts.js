// Cotação de moeda
const USD = 5.70
const EUR = 6.20
const GBP = 7.60

// Obtendo elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer  = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRagex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRagex, "")
})

// Captando o submit
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;

    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }

}

// Função para converter a moeda
function convertCurrency (amount, price,symbol) {
  try {
    // Exibindo cotação
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calculando total
    let total = amount * price

    // Exibindo resultado
    result.textContent = total

    // Classe que aplica o footer (resultado)
    footer.classList.add("show-result")   
  } catch (error) {
    // Remove classe de footer
    footer.classList.remove("show-result") 
    
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde")
  }
}

// Formatar moeda para real brasileiro
function formatCurrencyBRL (value) {
  // Converter variável para número e usar a função toLocaleString
  return Number(value).toLocaleString("pt-Bt", {
    style: "currency",
    currency: "BRL",
  })
}