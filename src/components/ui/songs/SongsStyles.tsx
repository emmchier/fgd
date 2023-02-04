import styled from 'styled-components';

export const SongsContent = styled.ul`
  padding: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(8)};
  margin-left: ${({ theme }) => theme.spacing(10)};
  width: 35%;
  height: 65%;
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: ${({ theme }) => theme.spacing(3)};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.primary.light};
  }

  li:last-child {
    margin-bottom: 100px;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const SongsItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;

export const MobileSlider = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    height: 50%;

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: white;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: red;
    }

    .swiper-pagination {
      position: fixed;
      bottom: 30vh;
    }

    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
    }

    .swiper-pagination-bullet-active {
      color: #fff;
      background: #007aff;
    }
  }
`;
