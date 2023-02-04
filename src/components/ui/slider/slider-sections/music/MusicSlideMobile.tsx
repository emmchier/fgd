import React, { FC } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import { MusicType } from '../../../../../interfaces';

interface MusicSlideMobileProps {
  items?: MusicType[];
}

export const MusicSlideMobile: FC<MusicSlideMobileProps> = ({ items = [] }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
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
    </>
    // <ul>
    //   {items?.map((music: MusicType) => (
    //     <SongsItem key={music.title}>
    //       <Card
    //         img={music.img}
    //         alt={music.alt}
    //         title={music.title}
    //         year={music.year}
    //         type={music.type}
    //         actions={music.actions}
    //       />
    //     </SongsItem>
    //   ))}
    // </ul>
  );
};
