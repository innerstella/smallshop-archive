import { Header } from "../../components/header"
import Template from "../../templates/Mobile"
import { MainWrapper } from "../main/MainStyles.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
// Import Swiper styles
// import "swiper/css"
// import { swiperContainer, swiperSlide } from "./BannerStyle.css"
// import "swiper/css/effect-cards"

// import "./styles.css"

// import required modules
export const BannerPage = () => {
  return (
    <Template>
      <div className={MainWrapper}>
        <Header />
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </Template>
  )
}
