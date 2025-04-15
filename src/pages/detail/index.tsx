import { Tweet } from "react-tweet"
import { Link, useLocation } from "react-router-dom"
import { Header } from "../../components/header"
import { useShopDataById } from "../../hooks/useShopData"
import Template from "../../templates/Mobile"
import { MainWrapper, ScrollWrapper } from "./DetailStyle.css"
import BackIcon from "../../assets/icon/back.svg"
import {
  Button,
  Flex,
  Link as RadixLink,
  IconButton,
  Text,
  Heading,
  Box,
} from "@radix-ui/themes"
import VerifyIcon from "../../assets/icon/verify.svg"
import { SERVICE_STATE } from "../../constants/service"
import PhoneIcon from "../../assets/icon/phone.svg"
import { Spacer } from "../../components/spacer"

export const DetailPage = () => {
  const location = useLocation()
  const pathParts = location.pathname.split("/")
  const collectionName =
    pathParts[2] === "offline" ? SERVICE_STATE.OFFLINE : SERVICE_STATE.ONLINE
  const docID = pathParts[3]

  const { data } = useShopDataById(collectionName, docID)

  if (!data) return

  return (
    <Template>
      <div className={MainWrapper}>
        <Header />
        <Box pb={"3"}>
          <Flex justify={"between"}>
            <Link to="/">
              <IconButton>
                <img src={BackIcon} alt="뒤로 가기" />
              </IconButton>
            </Link>
            <RadixLink href={data.mapLink} target="_blank">
              <Button>
                <Text wrap="nowrap" truncate>
                  {collectionName === SERVICE_STATE.OFFLINE
                    ? "지도 앱 열기"
                    : "사이트 바로가기"}
                </Text>
              </Button>
            </RadixLink>
          </Flex>
        </Box>

        <Spacer height={50} />
        <Flex direction="row" justify="between" align="start" gap="10px">
          <Flex gap="3px" align="center">
            <Heading as="h1" size="7" weight="bold">
              {data.name}
            </Heading>
            {data.isVerified && data.twitterLink && (
              <img src={VerifyIcon} alt="인증됨" width="16px" />
            )}
          </Flex>
          <Flex gap={"2"}>
            {data.phone && (
              <a href={`tel:${data.phone.replace(/\s/g, "")}`}>
                <IconButton>
                  <img src={PhoneIcon} alt="전화하기" />
                </IconButton>
              </a>
            )}
          </Flex>
        </Flex>
        <Flex direction="column" align={"start"}>
          <Spacer height={20} />
          <Heading as="h2" color="gray" size="5" wrap="nowrap">
            {data.description}
          </Heading>
          {data.address && (
            <>
              <Spacer height={5} />
              <Text as="p" size="3" wrap="balance">
                📍 {data.address}
              </Text>
            </>
          )}
        </Flex>
        <div className={ScrollWrapper}>
          {data.twitterLink ? (
            <Tweet id={data?.twitterLink.split("/").pop() || ""} />
          ) : (
            <>트윗 정보 없음</>
          )}
        </div>
      </div>
    </Template>
  )
}
