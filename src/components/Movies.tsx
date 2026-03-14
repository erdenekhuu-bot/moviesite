import dance from "../assets/poster/dance.png";
import flash from "../assets/poster/flash.svg";
import jonhwick from "../assets/poster/jonhwick.png";
import marvel from "../assets/poster/marvel.png";
import openhaimer from "../assets/poster/openhaimer.png";
import shazam from "../assets/poster/shazam.png";
import venom from "../assets/poster/venom.png";
import { Card } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

export default function Movie() {
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
            cover={<img draggable={false} alt="" src={dance} />}
          >
            <Card.Meta title="Dance" description="Dance 2019" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={flash} />}
          >
            <Card.Meta title="Flash" description="Flash movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={jonhwick} />}
          >
            <Card.Meta title="Jonh Wick" description="Jonh Wick movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={marvel} />}
          >
            <Card.Meta title="Marvel" description="Marvel movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={openhaimer} />}
          >
            <Card.Meta title="Openhaimer" description="Openhaimer movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={shazam} />}
          >
            <Card.Meta title="Shazam" description="Shazam movie" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img draggable={false} alt="" src={venom} />}
          >
            <Card.Meta title="Venom" description="Venom movie" />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
