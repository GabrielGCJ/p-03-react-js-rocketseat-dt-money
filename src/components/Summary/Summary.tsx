import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import { SumaryCard, SummaryContainer } from "./styles"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"

export const Summary = () => {

    const { transactions } = useContext(TransactionsContext)

    console.log( "UseContext Transactions", transactions )

    const summary = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type === 'income') {
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }            

            return acc
        } , {
             income: 0 , 
             outcome: 0, 
             total: 0 
        }
    )


    return (
        <SummaryContainer>
            <SumaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>
                    {/* R$ 17.400,00 */}
                    {`R$ ${summary.income}`}
                </strong>
            </SumaryCard>
            <SumaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>
                    {/* R$ 1.259,00 */}
                    {`R$ ${summary.outcome}`}

                </strong>
            </SumaryCard>
            <SumaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>
                    {/* R$ 16.141,00 */}
                    {`R$ ${summary.total}`}
                </strong>
            </SumaryCard>

        </SummaryContainer>
    )
}