import { TabNav } from "@radix-ui/themes"
import { Header } from "../../components/header"
import { MainWrapper } from "./MainStyles.css"
import { useEffect, useState } from "react"
import { Spacer } from "../../components/spacer"
import { CategoryType } from "../../types/category.type"
import { CATEGORY, CATEGORY_LIST } from "../../constants/category"
import { SERVICE_STATE, SERVICE_STATE_LIST } from "../../constants/service"
import { ServiceStateType } from "../../types/service.type"
import { StoreCard } from "../../components/card"
import { offlineDummyData, onlineDummyData } from "../../data/dummyData"

export const MainPage = () => {
  const [serviceState, setServiceState] = useState<ServiceStateType>(
    SERVICE_STATE.OFFLINE
  )
  const [currCategory, setCurrCategory] = useState<CategoryType>(
    serviceState === SERVICE_STATE.OFFLINE
      ? CATEGORY.RESTAURANT
      : CATEGORY.FRUITS
  )

  useEffect(() => {
    setCurrCategory(
      serviceState === SERVICE_STATE.OFFLINE
        ? CATEGORY.RESTAURANT
        : CATEGORY.FRUITS
    )
  }, [serviceState])

  const dummyData =
    serviceState === SERVICE_STATE.OFFLINE ? offlineDummyData : onlineDummyData

  return (
    <div className={MainWrapper}>
      <Header />
      <Spacer height={20} />
      <TabNav.Root>
        {SERVICE_STATE_LIST.map((state, idx) => {
          return (
            <TabNav.Link
              key={idx}
              active={serviceState === state}
              onClick={() => setServiceState(state)}
            >
              {state}
            </TabNav.Link>
          )
        })}
      </TabNav.Root>
      <Spacer height={10} />
      <TabNav.Root color="orange">
        {CATEGORY_LIST[serviceState].map((category, idx) => {
          return (
            <TabNav.Link
              key={idx}
              active={category === currCategory}
              onClick={() => setCurrCategory(category)}
            >
              {category}
            </TabNav.Link>
          )
        })}
      </TabNav.Root>
      <Spacer height={20} />
      {dummyData.map((data) => (
        <StoreCard data={data} serviceState={serviceState} />
      ))}
    </div>
  )
}
