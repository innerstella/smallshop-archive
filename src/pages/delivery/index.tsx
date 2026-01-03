import { Link } from "react-router-dom";

import * as Accordion from "@radix-ui/react-accordion";
import {
  Blockquote,
  Box,
  Card,
  Flex,
  Heading,
  ScrollArea,
  Text,
} from "@radix-ui/themes";

import AppStoreBadge from "../../assets/badge/app-store.svg";
import PlayStoreBadge from "../../assets/badge/play-store.png";
import BannerCoupon from "../../assets/banner/coupon.png";
import { Header } from "../../components/header";
import { Info } from "../../components/info";
import { plainLink } from "../../components/infoCard/InfoCard.css";
import { DeliveryList } from "../../data/deliveryData";
import Template from "../../templates/Mobile";
import * as styles from "./Accordion.css";
import { AppLogoStyle, BadgeStyle, Coupon, MainWrapper } from "./Delivery.css";

export const DeliveryPage = () => {
  return (
    <Template>
      <div className={MainWrapper}>
        <Header />
        <Link
          to="https://www.atfis.or.kr/delivery/front/M0000159/article/view.do?pageIndex=1&bbsId=BO000001&atcId=AT000014&searchType=title&searchKeyword="
          target="_blank"
          className={plainLink}
        >
          <img
            className={Coupon}
            src={BannerCoupon}
            alt="공공배달앱으로 구매 인증하고 3,000원 쿠폰 받기"
          />
        </Link>
        <Box pb={"3"}>
          <Info />
        </Box>
        <ScrollArea
          type="always"
          scrollbars="vertical"
          style={{ height: "100%" }}
        >
          <Accordion.Root>
            {DeliveryList.map((data) => {
              return (
                <Accordion.Item value={data.region} className={styles.item}>
                  <Accordion.AccordionTrigger className={styles.trigger}>
                    {data.region}
                  </Accordion.AccordionTrigger>
                  <Accordion.AccordionContent className={styles.content}>
                    <ScrollArea
                      type="always"
                      scrollbars="vertical"
                      style={{ height: "100%" }}
                    >
                      <Flex direction={"column"} gap={"2"}>
                        {data.data.map((elem) => {
                          return (
                            <Box maxWidth={"350px"} key={elem.name}>
                              <Card>
                                <Flex direction={"column"} gap={"3"}>
                                  <Flex justify={"between"}>
                                    <Flex direction={"column"} gap="2">
                                      <Heading as="h1" size={"4"}>
                                        {elem.name}
                                      </Heading>
                                      <Flex direction={"column"} gap={"2"}>
                                        <Blockquote>
                                          입점처 수수료 : {elem.fee}%
                                        </Blockquote>
                                        <Flex gap={"2"}>
                                          <img
                                            src={AppStoreBadge}
                                            className={BadgeStyle}
                                            onClick={() =>
                                              window.open(elem.appStore)
                                            }
                                          />

                                          <img
                                            src={PlayStoreBadge}
                                            className={BadgeStyle}
                                            onClick={() =>
                                              window.open(elem.playStore)
                                            }
                                          />
                                        </Flex>
                                      </Flex>
                                    </Flex>
                                    <Flex gap={"2"}>
                                      <img
                                        src={elem.imgUrl}
                                        className={AppLogoStyle}
                                      />
                                    </Flex>
                                  </Flex>

                                  <Flex direction={"column"} gap={"2"}>
                                    <Heading as="h2" size={"3"} color="gray">
                                      소비자 혜택
                                    </Heading>
                                    <Flex direction={"column"}>
                                      {elem.benefit.map((benefit) => {
                                        return <Text>‣ {benefit}</Text>;
                                      })}
                                    </Flex>
                                  </Flex>
                                </Flex>
                              </Card>
                            </Box>
                          );
                        })}
                      </Flex>
                    </ScrollArea>
                  </Accordion.AccordionContent>
                </Accordion.Item>
              );
            })}
          </Accordion.Root>
        </ScrollArea>
      </div>
    </Template>
  );
};
