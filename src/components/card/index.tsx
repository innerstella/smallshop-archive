import { Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes"
import { StoreData } from "../../types/data.type"
import { Spacer } from "../spacer"
import VerifyIcon from "../../assets/icon/verify.svg"
import { ServiceStateType } from "../../types/service.type"
import { SERVICE_STATE } from "../../constants/service"

interface StoreCardProps {
  data: StoreData
  serviceState: ServiceStateType
}

export const StoreCard = ({ data, serviceState }: StoreCardProps) => {
  console.log(serviceState)
  return (
    <Box maxWidth="350px">
      <Card>
        <Flex direction="row" justify="between" align="center" gap="10px">
          <Flex gap="3px" align="center">
            <Text as="p" size="4" weight="bold">
              {data.name}
            </Text>
            <img src={VerifyIcon} alt="인증됨" width="16px" />
          </Flex>
          <Link href={data.mapLink} target="_blank">
            <Button>
              <Text wrap="nowrap" truncate>
                {serviceState === SERVICE_STATE.OFFLINE
                  ? "지도 앱 열기"
                  : "사이트 바로가기"}
              </Text>
            </Button>
          </Link>
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
        <Spacer height={5} />
        <Link href={data.twitterLink}>
          <Text as="p" size="1" truncate>
            🔗 {data.twitterLink}
          </Text>
        </Link>
      </Card>
    </Box>
  )
}
