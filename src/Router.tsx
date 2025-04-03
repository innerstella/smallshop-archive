import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/main"
import { AdminPage } from "./pages/admin"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/stella/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
