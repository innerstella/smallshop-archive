import "./App.css"
import "@radix-ui/themes/styles.css"
import Template from "./templates/Mobile"
import { Theme } from "@radix-ui/themes"
import { MainPage } from "./pages/main"

function App() {
  return (
    <>
      <Theme accentColor="jade">
        <Template>
          <MainPage />
        </Template>
      </Theme>
    </>
  )
}

export default App
