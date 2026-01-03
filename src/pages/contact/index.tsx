import { Blockquote, Box, Card, Flex, Link, Text } from "@radix-ui/themes";

import { Header } from "../../components/header";
import Template from "../../templates/Mobile";
import { ContactWrapper, ScrollWrapper } from "./ContactStyle.css";

export const ContactPage = () => {
  return (
    <Template>
      <div className={ContactWrapper}>
        <Header />
        <div className={ScrollWrapper}>
          <Box pt={"2"} pb={"2"}>
            <Flex
              direction={"column"}
              gap={"3"}
              justify={"start"}
              align={"start"}
            >
              <Blockquote size="3" color="jade">
                🔔 [딸랑! : 소상공인 가게 찾기] 를 소개합니다!
              </Blockquote>
              <Card variant="surface">
                <Text as="div" color="gray" size="2">
                  트위터 맛집 검색기에 이어,
                  <br />
                  효녀들이 소개하는 우리 엄마 아빠의 가게를 한 눈에 모아볼 수
                  있는 사이트를 개발했습니다 :) <br />
                  <br />
                  딸랑구 넷이 함께 5일 만에 만든 서비스, 딸랑!
                  <br />
                  <br />
                  이번에도 지역만 검색해보세요 👐🏻
                </Text>
              </Card>
            </Flex>
          </Box>
          <Box pt={"2"} pb={"2"}>
            <Flex
              direction={"column"}
              gap={"3"}
              justify={"start"}
              align={"start"}
            >
              <Blockquote size="3" color="jade">
                ❓ FAQ
              </Blockquote>
              <Card variant="surface">
                <Text as="div" weight={"bold"} size="2">
                  🧐 어떤 데이터들인가요?
                </Text>
                <Text as="div" color="gray" size="2">
                  X(구 트위터)에 올라가 있는 누군가의 부모님들이 운영하는 가게들
                  데이터 입니다.
                </Text>
              </Card>
              <Card variant="surface">
                <Text as="div" weight={"bold"} size="2">
                  ✅ 인증 마크는 뭐죠?
                </Text>
                <Text as="div" color="gray" size="2">
                  네이버 지도를 기준으로 방문자 리뷰와 블로그 리뷰 개수가 500개
                  미만인 광고 아닌 가게들만 모아 인증 마크를 달았습니다.
                </Text>
              </Card>
              <Card variant="surface">
                <Text as="div" weight={"bold"} size="2">
                  😀 저도 등록하고 싶어요!
                </Text>
                {/* <Text as="div" color="gray" size="2">
                  기존에 제출된 데이터들을 정리 중이예요. 이후에 구글폼을 통해
                  추가로 가게 정보 등록을 받을 예정이니 조금만 기다려주세요!
                </Text> */}
                <Text as="div" color="gray" size="2">
                  <Link href="https://forms.gle/Pkm2YT7Ho9ccjks58">구글폼</Link>{" "}
                  링크에 맞게 제출해주세요 :)
                  <br />
                  2차 데이터 등록 요청은 4월 20일 자정까지만 받을 예정입니다.
                </Text>
              </Card>
            </Flex>
          </Box>
          <Box pt={"2"} pb={"2"}>
            <Flex
              direction={"column"}
              gap={"3"}
              justify={"start"}
              align={"start"}
            >
              <Blockquote size="3" color="jade">
                ☎️ 문의 사항
              </Blockquote>
              <Card variant="surface">
                <Text as="div" color="gray" size="2">
                  문의가 있으신 경우 아래 링크를 통해 남겨주세요.
                </Text>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3YVtxVDVrVbgMTxy7asEqfN4zLZA7aIWiMXcZpbkLgCBF0A/viewform"
                  target="_blank"
                  size={"2"}
                >
                  🔗 구글폼 링크
                </Link>
              </Card>
            </Flex>
          </Box>
          <Box pt={"2"} pb={"2"}>
            <Flex
              direction={"column"}
              gap={"3"}
              justify={"start"}
              align={"start"}
            >
              <Blockquote size="3" color="jade">
                ☕️ 서비스가 좋았다면?
              </Blockquote>
              <Card variant="surface">
                <Text as="div" color="gray" size="2">
                  딸랑구 팀원들에게 커피 한잔…☕🤗
                </Text>
                <Link
                  href="https://buymeacoffee.com/innerstella"
                  target="_blank"
                  size={"2"}
                >
                  Buy me a coffee
                </Link>
              </Card>
            </Flex>
          </Box>
        </div>
      </div>
    </Template>
  );
};
