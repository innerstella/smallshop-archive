import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { BannerImage, BannerWrapper } from "./BannerStyle.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { BannerData } from "../../data/bannerData"
import { Link } from "react-router-dom"
import "swiper/swiper-bundle.css"

export const Banner = () => {
  const bannerSettings = {
    spaceBetween: 30,
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  }

  return (
    <div className={BannerWrapper}>
      <Swiper {...bannerSettings}>
        {BannerData.map((banner) => {
          return (
            <SwiperSlide key={banner.name}>
              <Link to={banner.link} target="_blank">
                <img
                  className={BannerImage}
                  src={banner.src}
                  alt={banner.name}
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
