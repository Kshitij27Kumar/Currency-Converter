const currency_one = document.getElementById('currency-one'),
  amount_one = document.getElementById('amount-one'),
  currency_two = document.getElementById('currency-two'),
  amount_two = document.getElementById('amount-two')

const rate = document.getElementById('rate'),
  swap = document.getElementById('swap')

calculate = () => {
  const first_currency = currency_one.value
  const second_currency = currency_two.value

  fetch(`https://api.exchangerate-api.com/v4/latest/${first_currency}`)
    .then((res) => res.json())
    .then((data) => {
      const val = data.rates[second_currency]
      rate.innerText = `1 ${first_currency}=${val} ${second_currency}`
      amount_two.value = (amount_one.value * val).toFixed(2)
    })
}
//Event-listeners
currency_one.addEventListener('change', calculate)
amount_one.addEventListener('input', calculate)
currency_two.addEventListener('input', calculate)

swap.addEventListener('click', () => {
  const temp = currency_one.value
  currency_one.value = currency_two.value
  currency_two.value = temp
  calculate()
})

calculate()
