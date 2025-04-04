import { Text } from "@radix-ui/themes"
import StoreIcon from "../../assets/icon/store.svg"
import { HeaderWrapper } from "./HeaderStyle.css"

export const Header = () => {
  return (
    <header className={HeaderWrapper}>
      <img src={StoreIcon} />
      <Text size="5" weight="bold" style={{ color: "#4a5568" }} truncate>
        딸램 플레이스{" "}
        <Text size="3" weight="medium" style={{ color: "#4a5568" }}>
          : 소상공인 가게 찾기
        </Text>
      </Text>
    </header>
  )
}
