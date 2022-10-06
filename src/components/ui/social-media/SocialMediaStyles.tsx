import styled from 'styled-components';

export const SocialMediaContent = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;

  figure {
    div {
      width: ${({ theme }) => theme.spacing(6)};
      height: ${({ theme }) => theme.spacing(6)};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  svg {
    filter: brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(737%) hue-rotate(5deg)
      brightness(81%) contrast(94%);
    transition: ${({ theme }) => theme.transition.main};

    &:hover {
      opacity: 0.5;
    }
  }

  li {
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      figure {
        div {
          width: ${({ theme }) => theme.spacing(8)};
          height: ${({ theme }) => theme.spacing(8)};
          svg {
            width: ${({ theme }) => theme.spacing(8)};
            height: ${({ theme }) => theme.spacing(8)};
          }
        }
      }

      svg:last-child {
        margin-right: 0;
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
