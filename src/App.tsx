import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/Themes/default"
import { GlobalStyle } from "./styles/global"

export const App = () => {

  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello Word</h1>
    </ThemeProvider>
  )
}
