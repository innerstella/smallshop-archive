import { Flex, Text } from "@radix-ui/themes"
import StoreIcon from "../../assets/icon/store.svg"
import { HeaderWrapper } from "./HeaderStyle.css"
import QuestionIcon from "../../assets/icon/question.svg"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className={HeaderWrapper}>
      <Flex gap={"1"}>
        <img src={StoreIcon} />
        <Text
          size="5"
          weight="bold"
          style={{ color: "#4a5568" }}
          wrap={"nowrap"}
        >
          딸랑!{" "}
          <Text size="5" weight="medium" style={{ color: "#4a5568" }}>
            : 소상공인 가게 찾기
          </Text>
        </Text>
      </Flex>
      <Link
        to="https://innerstella.notion.site/1cb42a268e04803ba69bde083e43fbaf?pvs=4"
        target="_blank"
      >
        <img src={QuestionIcon} alt="FAQ" />
      </Link>
    </header>
  )
}
