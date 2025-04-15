import {
  Box,
  Button,
  Card,
  Flex,
  Link as RadixLink,
  IconButton,
  Text,
} from "@radix-ui/themes"
import { StoreData } from "../../types/data.type"
import { Spacer } from "../spacer"
import VerifyIcon from "../../assets/icon/verify.svg"
import { ServiceStateType } from "../../types/service.type"
import { SERVICE_STATE } from "../../constants/service"
import PhoneIcon from "../../assets/icon/phone.svg"
import { Link } from "react-router-dom"
import { linkStyle } from "./CardStyle.css"

interface StoreCardProps {
  data: StoreData
  serviceState: ServiceStateType
}

export const StoreCard = ({ data, serviceState }: StoreCardProps) => {
  const collectionName = serviceState === "오프라인" ? "offline" : "online"

  return (
    <Link to={`/detail/${collectionName}/${data.id}`} className={linkStyle}>
      <Box maxWidth="100%" width="360px">
        <Card>
          <Flex direction="row" justify="between" align="center" gap="10px">
            <Flex gap="3px" align="center">
              <Text as="p" size="4" weight="bold">
                {data.name}
              </Text>
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

              <RadixLink href={data.mapLink} target="_blank">
                <Button>
                  <Text wrap="nowrap" truncate>
                    {serviceState === SERVICE_STATE.OFFLINE
                      ? "지도 앱 열기"
                      : "사이트 바로가기"}
                  </Text>
                </Button>
              </RadixLink>
            </Flex>
          </Flex>
          <Spacer height={20} />
          <Text as="p" color="gray" size="2" wrap="nowrap">
            {data.description}
          </Text>
          {data.address && (
            <>
              <Spacer height={5} />
              <Text as="p" size="1" wrap="balance">
                📍 {data.address}
              </Text>
            </>
          )}
          {data.twitterLink && (
            <>
              <Spacer height={5} />
              <RadixLink href={data.twitterLink}>
                <Text as="p" size="1" truncate>
                  🔗 {data.twitterLink}
                </Text>
              </RadixLink>
            </>
          )}
        </Card>
      </Box>
    </Link>
  )
}
