import { useLocation, useNavigate } from "react-router-dom"
import { appBarStyle, ButtonStyle, underBarStyle } from "./AppbarStyle.css"
import ListIcon from "../../assets/icon/list.svg"
import BookIcon from "../../assets/icon/book.svg"
import DeliveryIcon from "../../assets/icon/delivery.svg"

export const Appbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={appBarStyle}>
      <div
        className={
          location.pathname === "/" ||
          location.pathname.split("/")[1] === "detail"
            ? underBarStyle
            : ""
        }
      >
        <button className={ButtonStyle} onClick={() => navigate("/")}>
          <img className={ButtonStyle} src={ListIcon} alt="둘러보기" />
        </button>
      </div>
      <div className={location.pathname === "/discovery" ? underBarStyle : ""}>
        <button className={ButtonStyle} onClick={() => navigate("/discovery")}>
          <img src={BookIcon} alt="전단지 보기" />
        </button>
      </div>
      <div className={location.pathname === "/delivery" ? underBarStyle : ""}>
        <button className={ButtonStyle} onClick={() => navigate("/delivery")}>
          <img src={DeliveryIcon} alt="공공 배달 앱" />
        </button>
      </div>
    </div>
  )
}
