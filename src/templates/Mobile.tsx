import { ReactNode } from "react"
import {
  // appBarStyle,
  // ButtonStyle,
  contentStyle,
  templateStyle,
} from "./MobileStyles.css"
import { Appbar } from "../components/appbar"
import DisplayAds from "../components/adsense"
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
        <DisplayAds />
        {children}
        <Appbar />
      </div>
    </div>
  )
}

export default Template
