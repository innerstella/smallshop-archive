import { useQuery } from "@tanstack/react-query";

import { getShopData, getShopDataById } from "../apis/getShopData";
import { CategoryType } from "../types/category.type";
import { ServiceStateType } from "../types/service.type";

export const useShopData = (
  serviceState: ServiceStateType,
  category?: CategoryType,
) => {
  return useQuery({
    queryKey: ["shopData", serviceState, category], // 상태와 카테고리를 캐시 키로 사용
    queryFn: () => getShopData(serviceState, category),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export const useShopDataById = (
  serviceState: ServiceStateType,
  docID: string,
) => {
  return useQuery({
    queryKey: ["shopData", serviceState, docID],
    queryFn: () => getShopDataById(serviceState, docID),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
