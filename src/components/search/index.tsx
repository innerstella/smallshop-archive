import { Box, TextField } from "@radix-ui/themes"
import SEARCH_ICON from "../../assets/icon/search.svg"
import { useSearchStore } from "../../stores/searchStore"

export const SearchInput = () => {
  const { search, setSearch } = useSearchStore()

  return (
    <Box width={"100%"} pt={"2"}>
      <TextField.Root
        placeholder="장소를 입력하세요"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        size={"2"}
        value={search}
      >
        <TextField.Slot>
          <img src={SEARCH_ICON} />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  )
}
