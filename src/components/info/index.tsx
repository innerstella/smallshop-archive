import { Callout, Link } from "@radix-ui/themes"

export const Info = () => {
  return (
    <Callout.Root size={"1"}>
      <Callout.Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          viewBox="0 -960 960 960"
          width="16px"
          fill="#666666"
        >
          <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      </Callout.Icon>
      <Callout.Text>
        <Link href="https://www.atfis.or.kr/delivery/front/M0000169/app/list.do">
          '공공배달'
        </Link>{" "}
        페이지의 데이터 기반으로 작성되었습니다.
      </Callout.Text>
    </Callout.Root>
  )
}
