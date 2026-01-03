import { Link } from "react-router-dom";

import { Flex, Text } from "@radix-ui/themes";

import CursorIcon from "../../assets/icon/cursor.svg";
import { Container, plainLink } from "./InfoCard.css";

export const InfoCard = () => {
  return (
    <Link to="/delivery" className={plainLink}>
      <div className={Container}>
        <Flex direction={"column"} align={"start"} gap={"1"}>
          <Text align={"center"} weight={"bold"} size={"5"}>
            공공 배달 어플 써보실래요?
          </Text>
          <Text align={"center"} weight={"medium"} size={"3"}>
            우리 지역 배달 어플 둘러보기
          </Text>
        </Flex>
        <img src={CursorIcon} alt="클릭" />
      </div>
    </Link>
  );
};
