import { Flex, Spinner, TabNav } from "@radix-ui/themes"
import { Header } from "../../components/header"
import { MainWrapper } from "./MainStyles.css"
import { useEffect, useState } from "react"
import { Spacer } from "../../components/spacer"
import { CategoryType } from "../../types/category.type"
import { CATEGORY, CATEGORY_LIST } from "../../constants/category"
import { SERVICE_STATE, SERVICE_STATE_LIST } from "../../constants/service"
import { ServiceStateType } from "../../types/service.type"
import { StoreCard } from "../../components/card"
import { getShopData } from "../../apis/getShopData"
import { StoreData } from "../../types/data.type"

export const MainPage = () => {
  const [serviceState, setServiceState] = useState<ServiceStateType>(
    SERVICE_STATE.OFFLINE
  )
  const [currCategory, setCurrCategory] = useState<CategoryType>(
    serviceState === SERVICE_STATE.OFFLINE
      ? CATEGORY.RESTAURANT
      : CATEGORY.FRUITS
  )
  const [storeData, setStoreData] = useState<StoreData[]>([]) // 리스트 상태 추가
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setCurrCategory(
      serviceState === SERVICE_STATE.OFFLINE
        ? CATEGORY.RESTAURANT
        : CATEGORY.FRUITS
    )
  }, [serviceState])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const data: StoreData[] = await getShopData(serviceState, currCategory)
        setStoreData(data || []) // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error("데이터 가져오기 실패:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [serviceState, currCategory])

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
      {isLoading ? (
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Spacer height={200} />
          <Spinner size="3" />
        </Flex>
      ) : (
        <Flex direction={"column"} justify={"start"} align={"start"} gap={"3"}>
          {storeData.map((data) => (
            <StoreCard data={data} serviceState={serviceState} />
          ))}
        </Flex>
      )}
    </div>
  )
}
