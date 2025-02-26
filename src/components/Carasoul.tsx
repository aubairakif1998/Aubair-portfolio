import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import "@/style/carasoul.css";

type Service = {
  id: string;
  name: string;
  imgSrc: string;
  imgSrcPink: string;
};

type FlexRowViewProps = {
  services: Service[];
  hoverIndex: number | null;
  handleClick: (index: number) => void;
  handleHoverStart: (index: number) => void;
  handleHoverEnd: () => void;
};

const FlexRowView: React.FC<FlexRowViewProps> = ({
  services,
  hoverIndex,
  handleClick,
  handleHoverStart,
  handleHoverEnd,
}) => {
  // Active index state
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the active index every 3 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length); // Cycle through the services
    }, 3000); // 3000ms = 3 seconds

    // Cleanup interval when the component is unmounted
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="flex-row-view">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={5}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          425: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              className="flex-row-item"
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHoverStart(index)}
              onMouseLeave={handleHoverEnd}
            >
              <Image
                src={
                  hoverIndex === index || activeIndex === index
                    ? service.imgSrcPink
                    : service.imgSrc
                }
                alt={service.name}
              />
              <p>{service.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlexRowView;
