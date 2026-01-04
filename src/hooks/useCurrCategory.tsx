import { useEffect, useState } from "react";

import { CATEGORY } from "../constants/category";
import { SERVICE_STATE } from "../constants/service";
import { CategoryType } from "../types/category.type";
import { ServiceStateType } from "../types/service.type";

export const useCurrCategory = (serviceState: ServiceStateType) => {
  const [currCategory, setCurrCategory] = useState<CategoryType>(
    serviceState === SERVICE_STATE.OFFLINE
      ? CATEGORY.RESTAURANT
      : CATEGORY.FRUITS,
  );

  useEffect(() => {
    setCurrCategory(
      serviceState === SERVICE_STATE.OFFLINE
        ? CATEGORY.RESTAURANT
        : CATEGORY.FRUITS,
    );
  }, [serviceState]);

  return [currCategory, setCurrCategory] as const;
};