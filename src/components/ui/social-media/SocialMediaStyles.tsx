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
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  svg {
    filter: brightness(0) saturate(100%) invert(19%) sepia(14%) saturate(3848%) hue-rotate(358deg)
      brightness(97%) contrast(96%);
    transition: ${({ theme }) => theme.transition.main};
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
