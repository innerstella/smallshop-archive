import { CategoryType } from "../types/category.type"
import { ServiceStateType } from "../types/service.type"
import { SERVICE_STATE } from "./service"

export enum CATEGORY {
  RESTAURANT = "음식점",
  CAFE = "카페",
  LIFE = "생활/문화",
  FRUITS = "과일/채소/식물",
  DAILY_GOODS = "생활 잡화",
  FOOD = "식품",
  HYGIENE = "위생용품",
  KITCHENWARE = "주방용품",
}

export const CATEGORY_LIST: Record<ServiceStateType, CategoryType[]> = {
  [SERVICE_STATE.OFFLINE]: [CATEGORY.RESTAURANT, CATEGORY.CAFE, CATEGORY.LIFE],
  [SERVICE_STATE.ONLINE]: [
    CATEGORY.FRUITS,
    CATEGORY.DAILY_GOODS,
    CATEGORY.FOOD,
    CATEGORY.HYGIENE,
    CATEGORY.KITCHENWARE,
  ],
}
