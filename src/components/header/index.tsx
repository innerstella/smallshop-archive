import { Text } from "@radix-ui/themes"
import StoreIcon from "../../assets/icon/store.svg"
import { HeaderWrapper } from "./HeaderStyle.css"

export const Header = () => {
  return (
    <header className={HeaderWrapper}>
      <img src={StoreIcon} />
      <Text size="5" weight="bold" style={{ color: "#4a5568" }}>
        소담소상 : 소상공인업체 검색기
      </Text>
    </header>
  )
}
