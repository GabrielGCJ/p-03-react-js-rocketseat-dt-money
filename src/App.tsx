import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/Themes/default"
import { GlobalStyle } from "./styles/global"
import { Transactions } from "./pages/Transactions/Transactions"
import { TransactionsProvider } from "./contexts/TransactionsContext"

export const App = () => {

  return (

    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>

        <GlobalStyle />
        <Transactions/>
      </TransactionsProvider>
    </ThemeProvider>
  )
}
