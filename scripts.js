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

  console.log(currency.value)
}