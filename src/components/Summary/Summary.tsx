import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import { SumaryCard, SummaryContainer } from "./styles"

export const Summary = () => {
    return (
        <SummaryContainer>
            <SumaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SumaryCard>
            <SumaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>R$ 1.259,00</strong>
            </SumaryCard>
            <SumaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>R$ 16.141,00</strong>
            </SumaryCard>

        </SummaryContainer>
    )
}