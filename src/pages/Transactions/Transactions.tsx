import { Header } from '../../components/Header/Header'
import { Summary } from '../../components/Summary/Summary'
import { SearchForm } from './components/SearchForm/SearchForm'
import {
  PriceHighLigth,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
// import { useContext } from 'react'

export const Transactions = () => {
  // const { transactions } = useContext(TransactionsContext)

  // O codigo abaixo tem por finalidade uma melhoria de performace ao utilizar o
  // contexto TransactionsContext, ele funciona exatamente como o useContext
  // normal porem usa a biblioteca useContextSelector.

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighLigth variant={transaction.type}>
                      {/* {transaction.price} */}
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLigth>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {/* {transaction.createdAt} */}
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
