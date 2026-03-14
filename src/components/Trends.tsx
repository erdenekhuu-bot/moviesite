import { Card } from "antd";
import napolion from "../assets/poster/napolion.png";
import action from "../assets/poster/action.png";
import barbie from "../assets/poster/barbie.png";
import bastard from "../assets/poster/bastard.png";
import cowboy from "../assets/poster/cowboy.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

export default function Trend() {
  return (
    <div className="p-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        direction="horizontal"
      >
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={napolion} />}
          >
            <Card.Meta title="Napolion" description="Napolion 2019" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={action} />}
          >
            <Card.Meta title="Action" description="action movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={barbie} />}
          >
            <Card.Meta title="Barbie" description="Barbie movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={bastard} />}
          >
            <Card.Meta title="Bastard" description="Bastard movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={cowboy} />}
          >
            <Card.Meta title="Cowboy" description="Cowboy movie" />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
