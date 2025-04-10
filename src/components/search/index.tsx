import { Box, TextField } from "@radix-ui/themes"
import SEARCH_ICON from "../../assets/icon/search.svg"
import { Dispatch, SetStateAction } from "react"

interface SearchInputProps {
  setSearch: Dispatch<SetStateAction<string>>
}

export const SearchInput = ({ setSearch }: SearchInputProps) => {
  return (
    <Box width={"100%"}>
      <TextField.Root
        placeholder="장소를 입력하세요"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        size={"2"}
      >
        <TextField.Slot>
          <img src={SEARCH_ICON} />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  )
}
