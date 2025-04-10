import { ReactNode } from "react"
import {
  // appBarStyle,
  // ButtonStyle,
  contentStyle,
  templateStyle,
} from "./MobileStyles.css"
// import ListIcon from "../assets/icon/list.svg"
// import BookIcon from "../assets/icon/book.svg"
// import LocationIcon from "../assets/icon/location.svg"
// import { useNavigate } from "react-router-dom"

interface TemplateProps {
  children: ReactNode
}

const Template = ({ children }: TemplateProps) => {
  // const navigate = useNavigate()

  return (
    <div className={templateStyle}>
      <div className={contentStyle}>
        {children}
        {/* <div className={appBarStyle}>
          <button className={ButtonStyle} onClick={() => navigate("/")}>
            <img className={ButtonStyle} src={ListIcon} alt="둘러보기" />
          </button>
          <button className={ButtonStyle} onClick={() => navigate("/banner")}>
            <img src={BookIcon} alt="전단지 보기" />
          </button>
          <button className={ButtonStyle}>
            <img src={LocationIcon} alt="지도로 보기" />
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Template
