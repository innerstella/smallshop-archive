import { useEffect, useState } from "react";
import { Tweet } from "react-tweet";

import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { Box } from "@radix-ui/themes";
import { Swiper, SwiperSlide } from "swiper/react";

import SwipeGif from "../../assets/gif/swipe.gif";
import { Banner } from "../../components/banner";
import { Header } from "../../components/header";
import { CategoryNav } from "../../components/nav/category";
import { ServiceStateNav } from "../../components/nav/serviceState";
import { CATEGORY } from "../../constants/category";
import { SERVICE_STATE } from "../../constants/service";
import { useShopData } from "../../hooks/useShopData";
import Template from "../../templates/Mobile";
import { CategoryType } from "../../types/category.type";
import { ServiceStateType } from "../../types/service.type";
import {
  DiscoveryWrapper,
  GifStyle,
  ScrollWrapper,
} from "./DiscoveryStyle.css";

export const DiscoveryPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const [serviceState, setServiceState] = useState<ServiceStateType>(
    SERVICE_STATE.OFFLINE,
  );
  const [currCategory, setCurrCategory] = useState<CategoryType>(
    serviceState === SERVICE_STATE.OFFLINE
      ? CATEGORY.RESTAURANT
      : CATEGORY.FRUITS,
  );
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
      <div className={DiscoveryWrapper}>
        <Header />
        <Banner />
        <Box pt={"1"}>
          <Flex gap="3" align={"center"}>
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
        </Box>
        <div className={ScrollWrapper}>
          <Swiper grabCursor={true} className="tweet">
            {!isLoading &&
              storeData?.map((data) => {
                if (!data.twitterLink) return;
                const tweetID = data.twitterLink.split("/").pop();

                return (
                  <SwiperSlide key={data.id}>
                    <Box maxWidth="360px">
                      <Tweet id={tweetID || ""} />
                    </Box>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <Dialog.Root open={isDialogOpen}>
          <Dialog.Content size="1" maxWidth="300px">
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              gap={"3"}
            >
              <img src={SwipeGif} alt="밀어서 넘기기" className={GifStyle} />
              <Text as="p" trim="both" size="3">
                트윗을 옆으로 밀어서 살펴보세요!
              </Text>
              <Button onClick={() => setIsDialogOpen(false)}>닫기</Button>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </Template>
  );
};
