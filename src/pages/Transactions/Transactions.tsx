import { Header } from "../../components/Header/Header"
import { Summary } from "../../components/Summary/Summary"
import { SearchForm } from "./components/SearchForm/SearchForm"
import { PriceHighLigth, TransactionsContainer, TransactionsTable } from "./styles"

export const Transactions = ( ) => {
    return(
        <div>
            <Header/>
            <Summary/>



          <TransactionsContainer>
            <SearchForm/>
          <TransactionsTable>

                <tbody>

                    <tr>
                        <td width="40%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLigth variant="income">
                                    R$ 12.000,00
                                </PriceHighLigth>                            
                            </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>

                    <tr>
                        <td width="40%">Hamburguer</td>
                            <td>
                                <PriceHighLigth variant="outcome">
                                    - R$ 59,00
                                </PriceHighLigth>                            
                            </td>
                        <td>Alimentação</td>
                        <td>13/04/2022</td>
                    </tr>
                    
                </tbody>
            </TransactionsTable>
          </TransactionsContainer>
        </div>
    )
}