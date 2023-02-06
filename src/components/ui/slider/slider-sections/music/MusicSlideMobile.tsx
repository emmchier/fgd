import React, { FC, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import { MusicType } from '../../../../../interfaces';
import { Card } from '../../../card';
import { LimitedPagination } from '../../../songs';
import { Text } from '../../../text';

interface MusicSlideMobileProps {
  items?: MusicType[];
}

export const MusicSlideMobile: FC<MusicSlideMobileProps> = ({ items = [] }) => {
  const pagination = {
    clickable: true,
    renderBullet: (_: number, className: string) =>
      items.length <= 8 ? '<span class="' + className + '"></span>' : '',
  };

  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex);

  return (
    <>
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
      >
        {items?.map((music: MusicType) => (
          <SwiperSlide key={music.title}>
            <Card
              img={music.img}
              alt={music.alt}
              title={music.title}
              year={music.year}
              type={music.type}
              actions={music.actions}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {items.length > 8 && (
        <LimitedPagination>
          {[...new Array(8)].map((dot: number, index: number) => (
            <div
              key={index}
              className={
                index === activeIndex
                  ? 'swiper-pagination-bullet-active'
                  : 'swiper-pagination-bullet'
              }
            >
              {dot}{' '}
            </div>
          ))}
          <span>
            <Text size="body3" color="secondary">
              + {items.length - 8}
            </Text>
          </span>
        </LimitedPagination>
      )}
    </>
  );
};
