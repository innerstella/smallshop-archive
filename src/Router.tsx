import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/main"
import { AdminPage } from "./pages/admin"
import { BannerPage } from "./pages/banner"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 유저 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/banner" element={<BannerPage />} />

        {/* 관리자 */}
        <Route path="/stella/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
