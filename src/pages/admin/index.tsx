import { Button, Checkbox, Flex, Select, Text } from "@radix-ui/themes"
import { Spacer } from "../../components/spacer"
import { AdminWrapper, inputStyle } from "./AdminPageStyle.css"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase"
import { useEffect, useState } from "react"
import { StoreData } from "../../types/data.type"
import { CATEGORY_LIST } from "../../constants/category"
import { CategoryType } from "../../types/category.type"

export const AdminPage = () => {
  const [shopType, setShopType] = useState("offlineShop")
  const serviceState = shopType === "offlineShop" ? "오프라인" : "온라인"
  const [storeData, setStoreData] = useState<StoreData>({
    name: "",
    address: "",
    description: "",
    twitterLink: "",
    mapLink: "",
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
    try {
      await addDoc(collection(db, shopType), {
        ...storeData,
        createdAt: serverTimestamp(), // Firestore의 타임스탬프 사용
      })

      alert("데이터가 성공적으로 등록되었습니다!")

      // 입력값 초기화
      setStoreData({
        name: "",
        address: "",
        description: "",
        twitterLink: "",
        mapLink: "",
        isVerified: false,
        category: CATEGORY_LIST[serviceState][0],
      })
    } catch (error) {
      console.error("데이터 추가 오류:", error)
    }
  }

  return (
    <div className={AdminWrapper}>
      <h1>관리자 페이지</h1>
      <Spacer height={20} />
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
      <Flex direction="column" align="start" gap="3">
        <Text weight="bold" size="4">
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
      </Flex>

      <Spacer height={20} />
      {[
        { label: "상호명", name: "name" },
        { label: "한줄 설명", name: "description" },
        { label: "트위터 링크", name: "twitterLink" },
        { label: "지도 앱/사이트 주소 링크", name: "mapLink" },
      ].map(({ label, name }) => (
        <Flex direction="column" align="start" gap="3" key={name}>
          <Text weight="bold" size="4">
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
