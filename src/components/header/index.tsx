import { Link } from "react-router-dom";

import { Flex, IconButton, Text } from "@radix-ui/themes";

import StoreIcon from "../../assets/icon/store.svg";
import { HeaderWrapper } from "./HeaderStyle.css";

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
      <Flex gap="3" align={"center"}>
        <Link to="/contact">
          <IconButton variant="surface">
            <Text size={"2"} wrap={"nowrap"}>
              ❓
            </Text>
          </IconButton>
        </Link>
        <Link to="https://buymeacoffee.com/innerstella" target="_blank">
          <IconButton variant="surface">
            <Text size={"2"} wrap={"nowrap"}>
              ☕️
            </Text>
          </IconButton>
        </Link>
      </Flex>
    </header>
  );
};
