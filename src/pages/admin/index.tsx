import { Button, Callout, Checkbox, Flex, Select, Text } from "@radix-ui/themes"
import { Spacer } from "../../components/spacer"
import { AdminWrapper, inputStyle } from "./AdminPageStyle.css"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase"
import { FormEvent, useEffect, useRef, useState } from "react"
import { StoreData } from "../../types/data.type"
import { CATEGORY_LIST } from "../../constants/category"
import { CategoryType } from "../../types/category.type"
import { getShopDataByName } from "../../apis/getShopData"

export const AdminPage = () => {
  const [shopType, setShopType] = useState("offlineShop")
  const nameInputRef = useRef<HTMLInputElement>(null)
  const serviceState = shopType === "offlineShop" ? "오프라인" : "온라인"
  const [storeData, setStoreData] = useState<StoreData>({
    name: nameInputRef.current?.value || "",
    address: "",
    description: "",
    twitterLink: "",
    mapLink: "",
    phone: "",
    isVerified: false,
    category: CATEGORY_LIST[serviceState][0],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setStoreData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    setStoreData((prev) => ({ ...prev, isVerified: checked === true }))
  }

  useEffect(() => {
    setStoreData((prev) => ({
      ...prev,
      category: CATEGORY_LIST[serviceState][0], // 선택한 shopType의 첫 번째 카테고리로 초기화
    }))
  }, [shopType])

  const addData = async () => {
    const isConfirmed = confirm(`입력된 데이터를 등록할까요?`)
    if (!isConfirmed) return

    if (!nameInputRef.current?.value) {
      alert("상호명을 입력해주세요")
      return
    }

    try {
      await addDoc(collection(db, shopType), {
        ...storeData,
        name: nameInputRef.current?.value,
        createdAt: serverTimestamp(),
      })

      alert("데이터가 성공적으로 등록되었습니다!")

      // 입력값 초기화
      window.location.reload()
    } catch (error) {
      console.error("데이터 추가 오류:", error)
    }
  }

  const checkAlreadyExist = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const inputName = nameInputRef.current?.value

    if (!inputName) {
      alert("상호명을 입력해주세요!")
      return
    }

    try {
      const data = await getShopDataByName(
        serviceState,
        storeData.category,
        inputName
      )

      alert(
        data.length > 0 ? "존재하는 상호명입니다." : "신규 등록 가능합니다."
      )
    } catch (error) {
      console.error("데이터 확인 오류", error)
    }
  }

  return (
    <div className={AdminWrapper}>
      <h1>관리자 페이지</h1>
      <Spacer height={20} />
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
        <Callout.Text weight={"bold"}>
          온/오프라인, 카테고리, 상호명 입력 후, 이미 등록된 가게인지 먼저
          확인해주세요!
        </Callout.Text>
      </Callout.Root>
      <Spacer height={10} />
      <Flex gap={"5"} align={"center"}>
        {/* 온/오프라인 선택 */}
        <Text weight="bold" size="4" wrap={"nowrap"}>
          온/오프라인 구분
        </Text>
        <Select.Root
          size="3"
          defaultValue="offlineShop"
          onValueChange={setShopType}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="offlineShop">오프라인</Select.Item>
            <Select.Item value="onlineShop">온라인</Select.Item>
          </Select.Content>
        </Select.Root>
        <Spacer height={20} />
        {/* 카테고리 선택 */}
        <Text weight="bold" size="4" wrap={"nowrap"}>
          카테고리
        </Text>
        <Select.Root
          size="3"
          value={storeData.category}
          onValueChange={(value) =>
            setStoreData((prev) => ({
              ...prev,
              category: value as CategoryType,
            }))
          }
        >
          <Select.Trigger />
          <Select.Content>
            {CATEGORY_LIST[serviceState].map((category) => (
              <Select.Item key={category} value={category}>
                {category}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        {/* 상호명 */}
        <form onSubmit={(e) => checkAlreadyExist(e)}>
          <Flex gap={"5"} align={"center"}>
            <Text weight="bold" size="4" wrap={"nowrap"}>
              상호명
            </Text>
            <input
              ref={nameInputRef}
              className={inputStyle}
              name={storeData.name}
              // onChange={handleChange}
            />
            <Button size={"3"}>등록된 가게인지 확인하기</Button>
          </Flex>
        </form>
      </Flex>
      <Spacer height={20} />
      {[
        { label: "한줄 설명", name: "description" },
        { label: "트위터 링크", name: "twitterLink" },
        { label: "지도 앱/사이트 주소 링크", name: "mapLink" },
        { label: "전화번호 (01012345678 형식)", name: "phone" },
      ].map(({ label, name }) => (
        <Flex direction="column" align="start" gap="3" key={name}>
          <Text weight="bold" size="4" wrap={"nowrap"}>
            {label}
          </Text>
          <input
            className={inputStyle}
            name={name}
            value={(storeData[name as keyof StoreData] as string) || ""}
            onChange={handleChange}
          />
          <Spacer height={20} />
        </Flex>
      ))}
      {shopType === "offlineShop" && (
        <Flex direction="column" align="start" gap="3">
          <Text weight="bold" size="4">
            주소
          </Text>
          <input
            className={inputStyle}
            name="address"
            value={storeData.address || ""}
            onChange={handleChange}
          />
          <Spacer height={20} />
        </Flex>
      )}
      {/* 카테고리 선택 */}
      <Spacer height={20} />
      <Text as="label" size="3">
        <Flex gap="2">
          <Checkbox
            checked={storeData.isVerified}
            onCheckedChange={handleCheckboxChange}
          />
          인증 여부
        </Flex>
      </Text>
      <Spacer height={30} />
      <Button size="4" onClick={addData}>
        등록하기
      </Button>
    </div>
  )
}
