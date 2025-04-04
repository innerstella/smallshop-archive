import { TabNav } from "@radix-ui/themes"
import { CATEGORY_ICON_LIST, CATEGORY_LIST } from "../../constants/category"
import { Spacer } from "../spacer"
import { ServiceStateType } from "../../types/service.type"
import { CategoryType } from "../../types/category.type"
import { Dispatch, SetStateAction } from "react"

interface CategoryNavProps {
  serviceState: ServiceStateType
  currCategory: CategoryType
  setCurrCategory: Dispatch<SetStateAction<CategoryType>>
}

export const CategoryNav = ({
  serviceState,
  currCategory,
  setCurrCategory,
}: CategoryNavProps) => {
  return (
    <TabNav.Root size={"1"}>
      {CATEGORY_LIST[serviceState].map((category, idx) => {
        return (
          <TabNav.Link
            key={idx}
            active={category === currCategory}
            onClick={() => setCurrCategory(category)}
          >
            {category === currCategory && (
              <>
                <img src={CATEGORY_ICON_LIST[currCategory]} />
                <Spacer width={5} height={10} />
              </>
            )}
            {category}
          </TabNav.Link>
        )
      })}
    </TabNav.Root>
  )
}
