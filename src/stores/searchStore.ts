import { create } from "zustand"
import { persist } from "zustand/middleware"

type SearchStore = {
  search: string
  setSearch: (value: string) => void
  reset: () => void
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      search: "",
      setSearch: (value) => set({ search: value }),
      reset: () => set({ search: "" }),
    }),
    {
      name: "search-storage", // localStorage 키 이름
    }
  )
)
