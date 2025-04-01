import { ReactNode } from "react"
import { contentStyle, templateStyle } from "./MobileStyles.css"

interface TemplateProps {
  children: ReactNode
}

const Template = ({ children }: TemplateProps) => {
  return (
    <div className={templateStyle}>
      <div className={contentStyle}>{children}</div>
    </div>
  )
}

export default Template
