import { useLocation, useNavigate } from "react-router-dom"
import { appBarStyle, ButtonStyle, underBarStyle } from "./AppbarStyle.css"
import ListIcon from "../../assets/icon/list.svg"
import BookIcon from "../../assets/icon/book.svg"
import ContactIcon from "../../assets/icon/contact.svg"

export const Appbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)

  return (
    <div className={appBarStyle}>
      <div className={location.pathname === "/" ? underBarStyle : ""}>
        <button className={ButtonStyle} onClick={() => navigate("/")}>
          <img className={ButtonStyle} src={ListIcon} alt="둘러보기" />
        </button>
      </div>
      <div className={location.pathname === "/discovery" ? underBarStyle : ""}>
        <button className={ButtonStyle} onClick={() => navigate("/discovery")}>
          <img src={BookIcon} alt="전단지 보기" />
        </button>
      </div>
      <div className={location.pathname === "/contact" ? underBarStyle : ""}>
        <button className={ButtonStyle} onClick={() => navigate("/contact")}>
          <img src={ContactIcon} alt="문의사항" />
        </button>
      </div>
    </div>
  )
}
