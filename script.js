const currency_one = document.getElementById('currency-one'),
  amount_one = document.getElementById('amount-one'),
  currency_two = document.getElementById('currency-two'),
  amount_two = document.getElementById('amount-two')

const rate = document.getElementById('rate'),
  swap = document.getElementById('swap')

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
