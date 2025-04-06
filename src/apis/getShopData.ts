import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { ServiceStateType } from "../types/service.type"
import { SERVICE_STATE } from "../constants/service"
import { StoreData } from "../types/data.type"
import { CategoryType } from "../types/category.type"

export const getShopData = async (
  serviceState: ServiceStateType,
  category?: CategoryType // ✅ category 필터 추가
): Promise<StoreData[]> => {
  const collectionName =
    serviceState === SERVICE_STATE.OFFLINE ? "offlineShop" : "onlineShop"

  try {
    // ✅ 처음부터 query()를 사용해서 변수 선언
    const shopQuery = category
      ? query(collection(db, collectionName), where("category", "==", category))
      : collection(db, collectionName) // 필터 없으면 그냥 컬렉션 가져오기

    const querySnapshot = await getDocs(shopQuery)

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as StoreData),
    }))
  } catch (error) {
    console.error("Firestore 데이터 가져오기 오류:", error)
    return []
  }
}

export const getShopDataByName = async (
  serviceState: ServiceStateType,
  category: CategoryType, // ✅ category 필터 추가
  name: string // 상호명
): Promise<StoreData[]> => {
  const collectionName =
    serviceState === SERVICE_STATE.OFFLINE ? "offlineShop" : "onlineShop"

  try {
    const shopQuery = query(
      collection(db, collectionName),
      where("category", "==", category),
      where("name", "==", name)
    )

    const querySnapshot = await getDocs(shopQuery)

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as StoreData),
    }))
  } catch (error) {
    console.error("Firestore 데이터 가져오기 오류:", error)
    return []
  }
}
