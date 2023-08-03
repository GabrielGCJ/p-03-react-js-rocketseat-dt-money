// import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export const useSummary = () => {
  // const { transactions } = useContext(TransactionsContext);

  // O codigo abaixo tem por finalidade uma melhoria de performace ao utilizar o
  // contexto TransactionsContext, ele funciona exatamente como o useContext
  // normal porem usa a biblioteca useContextSelector.

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // console.log( "UseContext Transactions", transactions )

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
