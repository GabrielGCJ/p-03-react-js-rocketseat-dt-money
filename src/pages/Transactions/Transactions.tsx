import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "./components/SearchForm/SearchForm";
import {
  PriceHighLigth,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/Formatter";



export const Transactions = () => {

  const { transactions } = useContext(TransactionsContext)
 

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
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
