import { Flex, Spinner, TabNav, Text, TextField } from "@radix-ui/themes"
import { Header } from "../../components/header"
import { EmptyWrapper, IconStyle, MainWrapper } from "./MainStyles.css"
import { useEffect, useState } from "react"
import { Spacer } from "../../components/spacer"
import { CategoryType } from "../../types/category.type"
import {
  CATEGORY,
  CATEGORY_ICON_LIST,
  CATEGORY_LIST,
} from "../../constants/category"
import { SERVICE_STATE, SERVICE_STATE_LIST } from "../../constants/service"
import { ServiceStateType } from "../../types/service.type"
import { StoreCard } from "../../components/card"
import { getShopData } from "../../apis/getShopData"
import { StoreData } from "../../types/data.type"
import SEARCH_ICON from "../../assets/icon/search.svg"
import EMPTY_ICON from "../../assets/icon/empty.svg"

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
      <TextField.Root
        placeholder="장소를 입력하세요"
        onChange={(e) => setSearch(e.target.value)}
      >
        <TextField.Slot>
          <img src={SEARCH_ICON} />
        </TextField.Slot>
      </TextField.Root>
      <Spacer height={10} />
      <TabNav.Root color="orange">
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
      <TabNav.Root size={"1"}>
        {CATEGORY_LIST[serviceState].map((category, idx) => {
          return (
            <TabNav.Link
              key={idx}
              active={category === currCategory}
              onClick={() => setCurrCategory(category)}
            >
              {category === currCategory && (
                <>
                  <img src={CATEGORY_ICON_LIST[currCategory]} />
                  <Spacer width={5} height={10} />
                </>
              )}
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
        <Flex direction="column" justify="start" align="start" gap="3">
          {storeData.filter((data) =>
            data.address?.split(" ")[1]?.includes(search)
          ).length > 0 ? (
            storeData
              .filter((data) => data.address?.split(" ")[1]?.includes(search))
              .map((data) => (
                <StoreCard
                  key={data.mapLink}
                  data={data}
                  serviceState={serviceState}
                />
              ))
          ) : (
            <>
              <Spacer height={10} />
              <div className={EmptyWrapper}>
                <center>
                  <img src={EMPTY_ICON} alt="없음" className={IconStyle} />
                </center>
                <Text size="5">검색 결과 없음</Text>
              </div>
            </>
          )}
        </Flex>
      )}
    </div>
  )
}
