import { useEffect, useState } from "react";

import { Flex, Spinner } from "@radix-ui/themes";

import { Banner } from "../../components/banner";
import { StoreCard } from "../../components/card";
import { EmptyBox } from "../../components/empty";
import { Header } from "../../components/header";
import { CategoryNav } from "../../components/nav/category";
import { ServiceStateNav } from "../../components/nav/serviceState";
import { SearchInput } from "../../components/search";
import { Spacer } from "../../components/spacer";
import { CATEGORY } from "../../constants/category";
import { SERVICE_STATE } from "../../constants/service";
import { useShopData } from "../../hooks/useShopData";
import { useSearchStore } from "../../stores/searchStore";
import Template from "../../templates/Mobile";
import { CategoryType } from "../../types/category.type";
import { ServiceStateType } from "../../types/service.type";
import { MainWrapper, ScrollWrapper } from "./MainStyles.css";

export const MainPage = () => {
  const [serviceState, setServiceState] = useState<ServiceStateType>(
    SERVICE_STATE.OFFLINE,
  );
  const [currCategory, setCurrCategory] = useState<CategoryType>(
    serviceState === SERVICE_STATE.OFFLINE
      ? CATEGORY.RESTAURANT
      : CATEGORY.FRUITS,
  );

  const { search } = useSearchStore();

  const {
    data: storeData,
    isLoading,
    refetch,
  } = useShopData(serviceState, currCategory);

  useEffect(() => {
    refetch();
  }, [currCategory, refetch]);

  useEffect(() => {
    setCurrCategory(
      serviceState === SERVICE_STATE.OFFLINE
        ? CATEGORY.RESTAURANT
        : CATEGORY.FRUITS,
    );
  }, [serviceState]);

  return (
    <Template>
      <div className={MainWrapper}>
        <Header />
        <Banner />
        <Spacer height={10} />
        <Flex gap="3">
          <ServiceStateNav
            serviceState={serviceState}
            setServiceState={setServiceState}
          />
          <CategoryNav
            serviceState={serviceState}
            currCategory={currCategory}
            setCurrCategory={setCurrCategory}
          />
        </Flex>
        <SearchInput />
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
      </div>
    </Template>
  );
};
