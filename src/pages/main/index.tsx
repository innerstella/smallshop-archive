import { Flex, Spinner } from "@radix-ui/themes"
import { Header } from "../../components/header"
import { MainWrapper, ScrollWrapper } from "./MainStyles.css"
import { useEffect, useState } from "react"
import { Spacer } from "../../components/spacer"
import { CategoryType } from "../../types/category.type"
import { CATEGORY } from "../../constants/category"
import { SERVICE_STATE } from "../../constants/service"
import { ServiceStateType } from "../../types/service.type"
import { StoreCard } from "../../components/card"
import { getShopData } from "../../apis/getShopData"
import { StoreData } from "../../types/data.type"
import { Banner } from "../../components/banner"
import { Info } from "../../components/info"
import { EmptyBox } from "../../components/empty"
import { SearchInput } from "../../components/search"
import { ServiceStateNav } from "../../components/nav/serviceState"
import { CategoryNav } from "../../components/nav/category"

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
  const [search, setSearch] = useState("")

  useEffect(() => {
    setCurrCategory(
      serviceState === SERVICE_STATE.OFFLINE
        ? CATEGORY.RESTAURANT
        : CATEGORY.FRUITS
    )
  }, [serviceState])

  useEffect(() => {
    console.log(search)
  }, [search])

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
      <Spacer height={50} />
      <Info />
      <Spacer height={20} />
      <SearchInput setSearch={setSearch} />
      <Spacer height={10} />
      <ServiceStateNav
        serviceState={serviceState}
        setServiceState={setServiceState}
      />
      <Spacer height={10} />
      <CategoryNav
        serviceState={serviceState}
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />
      <Spacer height={20} />
      {isLoading ? (
        <div className={ScrollWrapper}>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Spacer height={200} />
            <Spinner size="3" />
          </Flex>
        </div>
      ) : (
        <div className={ScrollWrapper}>
          {storeData.filter((data) => data.address?.includes(search)).length >
          0 ? (
            storeData
              .filter((data) => data.address?.includes(search))
              .map((data) => (
                <StoreCard
                  key={data.mapLink}
                  data={data}
                  serviceState={serviceState}
                />
              ))
          ) : (
            <EmptyBox />
          )}
        </div>
      )}
      <Spacer height={30} />
      <Banner />
      <Spacer height={200} />
    </div>
  )
}
