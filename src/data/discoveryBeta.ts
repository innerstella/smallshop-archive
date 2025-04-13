import { CATEGORY } from "../constants/category"

interface DiscoveryBetaData {
  id: number
  name: string
  imgSrc: string
  desc: string
  address: string
  twitterLink: string
}

export const discoveryBeta: Record<string, DiscoveryBetaData[]> = {
  [CATEGORY.RESTAURANT]: [
    {
      id: 1,
      name: "꿀꿀분식",
      imgSrc:
        "https://pbs.twimg.com/media/Gnl1gA0bcAAnuJX?format=jpg&name=small",
      desc: "종합 분식",
      address: "경기 의정부시 오목로205번길 61 1층 103호",
      twitterLink: "https://x.com/yogurttopping/status/1907685123405091314",
    },
    {
      id: 2,
      name: "큰복식당솥뚜껑삼겹살",
      imgSrc:
        "https://pbs.twimg.com/media/GnzhnmabYAIlCKZ?format=jpg&name=900x900",
      desc: "삼겹살",
      address: "충남 천안시 서북구 성거읍 성거길 148",
      twitterLink: "https://x.com/Iluvumomm/status/1908648418337308858",
    },
  ],
  [CATEGORY.CAFE]: [
    {
      id: 1,
      name: "앙금설기",
      imgSrc:
        "https://pbs.twimg.com/media/GnSZiBIboAA0D_d?format=jpg&name=large",
      desc: "떡, 한과",
      address: "경기 김포시 초당로61번길 26 104호",
      twitterLink: "https://x.com/comeon_0v0/status/1906317355250020706",
    },
    {
      id: 2,
      name: "클라라tea&coffee salon",
      imgSrc:
        "https://pbs.twimg.com/media/GnSlvqdaQAA9jbL?format=jpg&name=medium",
      desc: "홍차전문점",
      address: "경남 창원시 마산합포구 중앙동4길 24-26",
      twitterLink: "https://x.com/enkeph/status/1906330792181317669",
    },
  ],
}
