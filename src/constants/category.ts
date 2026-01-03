import BUBBLE_ICON from "../assets/icon/bubble.svg";
import CAFE_ICON from "../assets/icon/cafe.svg";
import CAR_ICON from "../assets/icon/car.svg";
import CHEF_ICON from "../assets/icon/chef.svg";
import MENU_BOOK_ICON from "../assets/icon/menu-book.svg";
import RESTAURANT_ICON from "../assets/icon/restaurant.svg";
import SHOPPING_CART_ICON from "../assets/icon/shopping-cart.svg";
import GROCERY_ICON from "../assets/icon/shopping-cart.svg";
import YARD_ICON from "../assets/icon/yard.svg";
import { CategoryType } from "../types/category.type";
import { ServiceStateType } from "../types/service.type";
import { SERVICE_STATE } from "./service";

export enum CATEGORY {
  RESTAURANT = "음식점",
  CAFE = "카페",
  LIFE = "생활/문화",
  FRUITS = "과일/채소/식물",
  DAILY_GOODS = "생활 잡화",
  FOOD = "식품",
  HYGIENE = "위생용품",
  KITCHENWARE = "주방용품",
  VISIT = "출장 서비스",
}

export const CATEGORY_LIST: Record<ServiceStateType, CategoryType[]> = {
  [SERVICE_STATE.OFFLINE]: [
    CATEGORY.RESTAURANT,
    CATEGORY.CAFE,
    CATEGORY.LIFE,
    CATEGORY.VISIT,
  ],
  [SERVICE_STATE.ONLINE]: [
    CATEGORY.FRUITS,
    CATEGORY.DAILY_GOODS,
    CATEGORY.FOOD,
    CATEGORY.HYGIENE,
    CATEGORY.KITCHENWARE,
  ],
};

export const CATEGORY_ICON_LIST: Record<string, string> = {
  [CATEGORY.RESTAURANT]: RESTAURANT_ICON,
  [CATEGORY.CAFE]: CAFE_ICON,
  [CATEGORY.LIFE]: MENU_BOOK_ICON,
  [CATEGORY.FRUITS]: YARD_ICON,
  [CATEGORY.DAILY_GOODS]: SHOPPING_CART_ICON,
  [CATEGORY.FOOD]: GROCERY_ICON,
  [CATEGORY.HYGIENE]: BUBBLE_ICON,
  [CATEGORY.KITCHENWARE]: CHEF_ICON,
  [CATEGORY.VISIT]: CAR_ICON,
};
