import styled from 'styled-components';

export const PoweredContent = styled.div`
  display: flex;
  align-items: center;
  width: 200px;

  p {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.secondary.main};
  }

  a {
    font-size: ${({ theme }) => theme.font.body[4].size};
    line-height: ${({ theme }) => theme.font.body[4].lineHeight};

    svg {
      filter: brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(373%) hue-rotate(351deg)
        brightness(99%) contrast(90%);
      transform: translateY(1px);
      margin-left: ${({ theme }) => theme.spacing(0.5)};
      transition: ${({ theme }) => theme.transition.main};

      &:hover {
        transition: ${({ theme }) => theme.transition.main};
        filter: brightness(0) saturate(100%) invert(17%) sepia(88%) saturate(485%)
          hue-rotate(351deg) brightness(99%) contrast(99%);
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-end;
    width: 150px;
  }
`;

export const Desk = styled.div`
  display: flex;
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
export const Mob = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;

    svg {
      width: ${({ theme }) => theme.spacing(4)};
      height: ${({ theme }) => theme.spacing(4)};
    }
  }
`;
