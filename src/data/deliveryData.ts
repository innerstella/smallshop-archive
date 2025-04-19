import { DELIVERY_APP, DeliveryData, REGION } from "../types/delivery.type"

export const DeliveryAppData: Record<string, DeliveryData> = {
  [DELIVERY_APP.땡겨요]: {
    name: "땡겨요",
    playStore: "https://fdofd.ddangyo.com/gateway.html",
    appStore: "https://fdofd.ddangyo.com/gateway.html",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324133430_1633965888.jpg",
  },
  [DELIVERY_APP.배달특급]: {
    name: "배달특급",
    playStore: "https://app.specialdelivery.co.kr/customer/login",
    appStore: "https://app.specialdelivery.co.kr/customer/login",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324133629_1194200128.jpg",
  },
  [DELIVERY_APP.먹깨비]: {
    name: "먹깨비",
    playStore: "http://down.mukkebi.com/",
    appStore: "http://down.mukkebi.com/",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324133714_147593760.jpg",
  },
  [DELIVERY_APP.위메프오]: {
    name: "위메프오",
    playStore: "https://www.wmpo.co.kr/bridge",
    appStore: "https://www.wmpo.co.kr/bridge",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324133756_192225216.jpg",
  },
  [DELIVERY_APP.휘파람]: {
    name: "휘파람",
    playStore: "https://delivery.whee-param.kr/U/M/Main/?isAppUpdate=False",
    appStore: "https://delivery.whee-param.kr/U/M/Main/?isAppUpdate=False",
    imgUrl:
      "https://play-lh.googleusercontent.com/pDL1vA3Vo8H7B8_zADsmMB7pMNprus12RMBveptEYY5kYn6Ucuxv78Vr4XA3y6wmtwI=w240-h480-rw",
  },
  [DELIVERY_APP.전주맛배]: {
    name: "전주맛배",
    playStore: "http://jjorder.kr/appLink",
    appStore: "http://jjorder.kr/appLink",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324145511_1993932000.jpg",
  },
  [DELIVERY_APP.배달의명수]: {
    name: "배달의명수",
    playStore:
      "https://play.google.com/store/apps/details?id=co.kr.uaram.userdeliver_",
    appStore: "https://apps.apple.com/kr/app/배달의명수/id1493177062k",
    imgUrl:
      "https://play-lh.googleusercontent.com/3gc65K-RREtPtNG1qJYpUQKaLoJGRmRJpsrJttN2phIubmOKRAh-JuNbAi1T7IN_cncR=w240-h480-rw",
  },
  [DELIVERY_APP.울산페달]: {
    name: "울산페달",
    playStore:
      "https://event.konacard.co.kr/link/appBridge.html?app=ulsanuspay&target=51_kaId=410610830002301",
    appStore:
      "https://event.konacard.co.kr/link/appBridge.html?app=ulsanuspay&target=51_kaId=410610830002301",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324145636_606894784.jpg",
  },
  [DELIVERY_APP.배달양산]: {
    name: "배달양산",
    playStore:
      "https://play.google.com/store/apps/details?id=gov.yangsan.lovecard",
    appStore: "https://apps.apple.com/kr/app/양산사랑카드상품권/id1447914062",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324145713_834777760.jpg",
  },
  [DELIVERY_APP.대구로]: {
    name: "대구로",
    playStore: "https://app.daeguro.co.kr/app/public_link.html?project=COMMON",
    appStore: "https://app.daeguro.co.kr/app/public_link.html?project=COMMON",
    imgUrl:
      "https://www.atfis.or.kr/delivery/upload/1//20250324145605_575004448.jpg",
  },
}

export const DeliveryList = [
  {
    region: [REGION.서울특별시],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "서울사랑상품권(할인율 5%) 사용 가능",
          "자치구 배달전용상품권 사용 가능",
          "온누리상품권 사용 가능",
          "연말정산 소득공제 30% 혜택",
        ],
      },
    ],
  },
  {
    region: [REGION.경기도_전체],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.배달특급],
        fee: 1,
        benefit: ["경기지역화폐(6~10%) 결제시 5% 추가쿠폰(1,500원 한도)"],
      },
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: ["경기지역화폐(6~10%) 사용가능", "온누리 상품권 사용 가능"],
      },
    ],
  },
  {
    region: [REGION.경기도_성남],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 0,
        benefit: ["경기지역화폐(6~10%) 사용가능"],
      },
      {
        ...DeliveryAppData[DELIVERY_APP.위메프오],
        benefit: ["성남사랑상품권(할인율 10%, ~6.30까지) 사용 가능"],
      },
    ],
  },
  {
    region: [REGION.경기도_시흥],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 0,
        benefit: ["경기지역화폐(6~10%) 사용가능"],
      },
    ],
  },
  {
    region: [REGION.충북_전체],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 1.5,
        benefit: [
          "청주페이(할인율 7%), 충주사랑상품권(할인율 7%), 제천화폐모아(할인율 7%) 사용 가능",
          "리뷰이벤트(포인트적립)",
          "무료배달",
          "온누리상품권 사용 연계중",
        ],
      },
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "여민전(할인율 5%) 사용 시 추가 캐시백(5%)",
          "상시 프로모션(땡데이 등)",
          "온누리상품권 사용 가능",
          "진천사랑상품권(할인율 8%) 사용 가능",
          "결초보은(할인율 10%), 옥천사랑(할인율 10%), 영동사랑(할인율 10%), 증평사랑으뜸(할인율 10%), 괴산사랑(할인율 10%), 음성행복페이(할인율 10%), 단양사랑(할인율 10%) 사용 가능",
          "무료배달",
          "상시 프로모션(땡데이 등)",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.충북_세종],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "여민전(할인율 5%) 사용 시 추가 캐시백(5%)",
          "상시 프로모션(땡데이 등)",
          "온누리상품권 사용 가능",
          "진천사랑상품권(할인율 8%) 사용 가능",
          "결초보은(할인율 10%), 옥천사랑(할인율 10%), 영동사랑(할인율 10%), 증평사랑으뜸(할인율 10%), 괴산사랑(할인율 10%), 음성행복페이(할인율 10%), 단양사랑(할인율 10%) 사용 가능",
          "무료배달",
          "상시 프로모션(땡데이 등)",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.충북_제천],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.배달모아],
        fee: 0,
        benefit: ["모아(할인율 10%) 사용 가능", "이벤트 쿠폰"],
      },
    ],
  },
  {
    region: [REGION.강원_춘천],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "춘천사랑상품권(할인율 7~10%) 사용 가능",
          "배달료 할인쿠폰 발행(예산소진시까지)",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.강원_원주],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "원주사랑상품권(할인율 7%) 사용 가능",
          "첫/재주문시 쿠폰지급(최대 1만원)",
          "쿠폰 23,000원 지급(매일 추첨)",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.강원_태백],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 2,
        benefit: [
          "4월9일부터 배달앱에 탄탄페이(할인율 10%) 적용",
          "온누리상품권 사용 연계중",
        ],
      },
    ],
  },
  {
    region: [REGION.강원_홍천],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "홍천사랑상품권(할인율 10%) 사용 가능",
          "할인이벤트(예정)",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.강원_정선],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 1.5,
        benefit: [
          "와와페이(할인율 10%) 사용 가능",
          "할인쿠폰 발행",
          "온누리상품권 사용 연계중",
        ],
      },
    ],
  },
  {
    region: [REGION.강원_강릉],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "강릉페이 8% 캐쉬백",
          "첫/재주문 시 쿠폰지급(각 5천원)",
          "상시 프로모션(댕데이, 브랜드쿠폰 등)",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.충남_전체],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "공주시 제외",
          "금산사랑상품권 (할인율 5%) 사용 가능",
          "서산사랑, 계롱사랑, 당진사랑 상품권 (할인율 7%) 사용 가능",
          "천안사랑상품권 (할인율 8%) 사용 가능",
          "보령사랑, 논산사랑, 서천사랑, 청양사랑, 홍성사랑, 예산사랑, 태안사랑상품권, 아산페이 (할인율 10%) 사용 가능",
          "부여: 지역사랑상품권 연계 미정",
          "첫주문 할인쿠폰 제공",
          "상시 프로모션(땡데이 등)",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.충남_공주],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.휘파람],
        fee: 1.7,
        benefit: [
          "공주페이(할인율 5%) 사용 가능",
          "할인쿠폰 제공(매주)",
          "온누리상품권 사용 사용가능(예정)",
        ],
      },
    ],
  },
  {
    region: [REGION.전북_전주],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.전주맛배],
        fee: 0,
        benefit: [
          "전주사랑상품권(캐시백 10%) 사용 가능",
          "첫가입 쿠폰제공",
          "지역축제 연계 등을 통한 상시할인 진행",
        ],
      },
    ],
  },
  {
    region: [REGION.전북_정읍],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.위메프오],
        fee: 2,
        benefit: [
          "정읍사랑상품권 (할인율 10%) 사용 가능",
          "배달비 할인쿠폰 (일반가맹점 최대 2,000원, 전통시장관 최대 4,000원)",
          "특별할인쿠폰(3,000원)",
          "정읍사랑상품권 결제 시 배달앱 포인트 페이백 5%",
          "온누리상품권 사용가능(예정)",
        ],
      },
    ],
  },
  {
    region: [REGION.전북_군산],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.배달의명수],
        fee: 0,
        benefit: [
          "군산사랑상품권(할인율 10%) 사용 가능",
          "배달료지원, 할인지원, 홍보영상촬영 등",
          "온누리상품권 사용 가능(예정)",
        ],
      },
    ],
  },
  {
    region: [REGION.경남_통영_밀양],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.위메프오],
        fee: 2,
        benefit: ["밀양사랑상품권(10%) 사용가능"],
      },
    ],
  },
  {
    region: [REGION.울산],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.울산페달],
        fee: 2,
        benefit: [
          "4월 30일까지 울산사랑상품권(캐시백 7%) 사용 시 추가 캐시백(5%)",
          "할인쿠폰 발행",
        ],
      },
    ],
  },
  {
    region: [REGION.경남_김해],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 1.5,
        benefit: ["김해사랑상품권(7%) 사용가능", "온누리상품권 사용 연계중"],
      },
    ],
  },
  {
    region: [REGION.경남_양산],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.배달양산],
        fee: 2,
        benefit: [],
      },
    ],
  },
  {
    region: [REGION.제주특별자치도],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 1.5,
        benefit: [
          "상시 할인이벤트",
          "제주드론 배송",
          "온누리상품권 사용가능(예정)",
        ],
      },
    ],
  },
  {
    region: [REGION.광주],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.위메프오],
        fee: 2,
        benefit: [
          "광주상생카드(할인율 7%) 사용 가능",
          "주말할인쿠폰, 전통시장 장보기 서비스(배달료 할인)",
          "온누리상품권 시스템 구축중",
        ],
      },
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "광주상생카드(할인율 7%) 사용 가능",
          "주말 할인쿠폰, 땡겨요 자체 할인 프로모션",
          "온누리상품권 사용 가능",
        ],
      },
    ],
  },
  {
    region: [REGION.경기도_전체],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 1.5,
        benefit: [
          "전남 지역사랑상품권 (할인율 5~10%) 사용 가능",
          "첫가입 쿠폰제공",
          "온누리상품권 사용 가능(예정)",
        ],
      },
      {
        ...DeliveryAppData[DELIVERY_APP.땡겨요],
        fee: 2,
        benefit: [
          "전남 지역사랑상품권 (할인율 5~10%) 사용 가능",
          "첫가입 쿠폰제공",
          "온누리상품권 사용 가능(예정)",
        ],
      },
    ],
  },
  {
    region: [REGION.대구],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.대구로],
        fee: 2,
        benefit: [
          "대구로페이 사용 시 5% 추가 할인",
          "온누리상품권 사용가능(예정)",
          "첫주문 5,000원 할인쿠폰",
          "마일리지 0.5% 적립",
        ],
      },
    ],
  },
  {
    region: [REGION.경북],
    data: [
      {
        ...DeliveryAppData[DELIVERY_APP.먹깨비],
        fee: 1.5,
        benefit: [
          "지역상품권 (5% / 10%) 사용 가능",
          "온누리상품권 사용 연계중",
          "할인쿠폰 제공(비정기)",
        ],
      },
    ],
  },
]
