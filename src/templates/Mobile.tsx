import { ReactNode, useEffect } from "react"
import { contentStyle, templateStyle } from "./MobileStyles.css"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

interface TemplateProps {
  children: ReactNode
}

const Template = ({ children }: TemplateProps) => {
  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"))
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      console.log(userList)
    }

    fetchUsers()
  }, [])

  return (
    <div className={templateStyle}>
      <div className={contentStyle}>{children}</div>
    </div>
  )
}

export default Template
