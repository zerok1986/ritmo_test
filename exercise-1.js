let totalDebt = 317
let iteration = 1
let pendingPayment = 0
const payments = []
const payDays = []
const PAYMENT_DELAY = 3

const DEBT_PAYS = {
  3: 30,
  6: 50,
  7: 20,
  13: 100,
  15: 10.5,
  16: 62,
  17: 44.5,
}

const pendingPaymentCalc = () => {
  if (payments.length !== 0) {
    let totalPending = payments.reduce((prev, curr) => prev + curr)
    pendingPayment = totalPending
    return totalPending
  }
}

const checkIfPayday = (iteration) => {
  payDays.map((payday) => {
    if (payday === iteration) {
      totalDebt -= payments[0]
      payments.shift()
    }
    return totalDebt
  })
}

// Loops over customer debts until it's 0
while (totalDebt > 0) {
  pendingPaymentCalc()
  checkIfPayday(iteration)
  // Check if the iteration(day) matches with the iteration num of the required debt
  for (let [key, value] of Object.entries(DEBT_PAYS)) {
    if (Number(key) === iteration) {
      payments.push(value)
      payDays.push(Number(key) + PAYMENT_DELAY)
    }
  }

  if (!pendingPaymentCalc()) pendingPayment = 0

  console.log(
    `Iteration ${iteration}: Debt: ${totalDebt}, Pending Confirmation: ${pendingPayment}`
  )

  iteration++

  // Scaping at iteration 100 (preventing infinite loop)
  // if (iteration === 100) {
  //   process.exit(0)
  // }
}
