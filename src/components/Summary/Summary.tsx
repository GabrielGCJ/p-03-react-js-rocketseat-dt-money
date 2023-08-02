import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SumaryCard, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export const Summary = () => {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SumaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>
          {/* R$ 17.400,00 */}
          {/* {`R$ ${summary.income}`} */}
          {priceFormatter.format(summary.income)}
        </strong>
      </SumaryCard>
      <SumaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>
          {/* R$ 1.259,00 */}
          {/* {`R$ ${summary.outcome}`} */}
          {priceFormatter.format(summary.outcome)}
        </strong>
      </SumaryCard>
      <SumaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>
          {/* R$ 16.141,00 */}
          {/* {`R$ ${summary.total}`} */}
          {priceFormatter.format(summary.total)}
        </strong>
      </SumaryCard>
    </SummaryContainer>
  )
}
