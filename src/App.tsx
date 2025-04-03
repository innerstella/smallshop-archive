import "./App.css"
import "@radix-ui/themes/styles.css"
import Template from "./templates/Mobile"
import { Theme } from "@radix-ui/themes"
import AppRouter from "./Router"

function App() {
  return (
    <>
      <Theme accentColor="jade">
        <Template>
          <AppRouter />
        </Template>
      </Theme>
    </>
  )
}

export default App
