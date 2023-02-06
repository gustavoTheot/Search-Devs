import { ThemeProvider } from "styled-components"
import { Devs } from "./components/Devs"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Devs/>
    </ThemeProvider>

  )
}

export default App
