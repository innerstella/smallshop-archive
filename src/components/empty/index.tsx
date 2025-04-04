import { Spacer } from "../spacer"
import { EmptyWrapper, IconStyle } from "./Empty.css"
import EMPTY_ICON from "../../assets/icon/empty.svg"
import { Text } from "@radix-ui/themes"

export const EmptyBox = () => {
  return (
    <>
      <Spacer height={10} />
      <div className={EmptyWrapper}>
        <center>
          <img src={EMPTY_ICON} alt="없음" className={IconStyle} />
        </center>
        <Text size="5">검색 결과 없음</Text>
      </div>
    </>
  )
}
