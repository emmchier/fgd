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
    position: relative;
    display: flex;
    flex-direction: column;

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-pagination {
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-pagination-bullet {
      width: ${({ theme }) => theme.spacing(3)};
      height: ${({ theme }) => theme.spacing(3)};
      border-radius: ${({ theme }) => theme.border.radius.small};
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      opacity: 1;
      background: ${({ theme }) => theme.color.background.dark};
    }

    .swiper-pagination-bullet-active {
      width: ${({ theme }) => theme.spacing(4)};
      height: ${({ theme }) => theme.spacing(4)};
      background: ${({ theme }) => theme.color.primary.light};
      border-radius: ${({ theme }) => theme.border.radius.small};
    }
  }
`;

export const LimitedPagination = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  transform: translateY(-20px);
  position: relative;
  z-index: 9999999999999;

  div {
    margin-right: ${({ theme }) => theme.spacing(1.5)};
  }

  span {
    margin-left: ${({ theme }) => theme.spacing(1.5)};
    background: ${({ theme }) => theme.color.background.dark};
    border-radius: ${({ theme }) => theme.border.radius.full};
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};
  }
`;
