// Cotação de moeda
const USD = 5.70
const EUR = 6.20
const GBP = 7.60

// Obtendo elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

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
      convertCurency(amount.value, USD, "US$");
      break;

    case "EUR":
      convertCurency(amount.value, EUR, "€");
      break;

    case "GBP":
      convertCurency(amount.value, GBP, "£");
      break;
  }

}

// Função para converter a moeda
function convertCurency (amount, price,symbol) {
  console.log(amount, price, symbol)
}