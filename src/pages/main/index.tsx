import { Flex, Spinner } from "@radix-ui/themes"
import { Header } from "../../components/header"
import { MainWrapper, ScrollWrapper, spacerStyle } from "./MainStyles.css"
import { useEffect, useState } from "react"
import { Spacer } from "../../components/spacer"
import { CategoryType } from "../../types/category.type"
import { CATEGORY } from "../../constants/category"
import { SERVICE_STATE } from "../../constants/service"
import { ServiceStateType } from "../../types/service.type"
import { StoreCard } from "../../components/card"
// import { Banner } from "../../components/banner"
import { EmptyBox } from "../../components/empty"
import { SearchInput } from "../../components/search"
import { ServiceStateNav } from "../../components/nav/serviceState"
import { CategoryNav } from "../../components/nav/category"
import { useShopData } from "../../hooks/useShopData"
import Template from "../../templates/Mobile"
import { Banner } from "../../components/banner"

export const MainPage = () => {
  const [serviceState, setServiceState] = useState<ServiceStateType>(
    SERVICE_STATE.OFFLINE
  )
  const [currCategory, setCurrCategory] = useState<CategoryType>(
    serviceState === SERVICE_STATE.OFFLINE
      ? CATEGORY.RESTAURANT
      : CATEGORY.FRUITS
  )
  const {
    data: storeData,
    isLoading,
    refetch,
  } = useShopData(serviceState, currCategory)

  useEffect(() => {
    refetch()
  }, [currCategory, refetch])

  const [search, setSearch] = useState("")

  useEffect(() => {
    setCurrCategory(
      serviceState === SERVICE_STATE.OFFLINE
        ? CATEGORY.RESTAURANT
        : CATEGORY.FRUITS
    )
  }, [serviceState])

  useEffect(() => {
    console.log("Category changed:", currCategory)
  }, [currCategory])
  console.log(storeData)
  return (
    <Template>
      <div className={MainWrapper}>
        <Header />
        <Flex gap="3">
          <ServiceStateNav
            serviceState={serviceState}
            setServiceState={setServiceState}
          />
          <SearchInput setSearch={setSearch} />
        </Flex>
        <div className={spacerStyle}>
          <CategoryNav
            serviceState={serviceState}
            currCategory={currCategory}
            setCurrCategory={setCurrCategory}
          />
        </div>
        {isLoading ? (
          <div className={ScrollWrapper}>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <Spacer height={200} />
              <Spinner size="3" />
            </Flex>
          </div>
        ) : (
          <div className={ScrollWrapper}>
            {(storeData || [])?.filter((data) => data.address?.includes(search))
              ?.length > 0 ? (
              storeData
                ?.filter((data) => data.address?.includes(search))
                .map((data) => (
                  <StoreCard
                    key={data.name} // FIXME: 고유 id 사용해야 함
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

        {/* <Spacer height={60} /> */}
      </div>
    </Template>
  )
}
