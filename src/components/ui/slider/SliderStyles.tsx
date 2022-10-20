import styled, { css } from 'styled-components';

type ItemTypes = {
  expand: boolean;
};

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

export const Section = styled.section<ItemTypes>`
  transform: translate3d(0, 0, 0);
  overflow: hidden;
  transition: width 0.5s ease;

  ${({ expand }) =>
    expand === true
      ? css`
          width: 100%;
        `
      : css`
          width: 0;
        `}
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;

  span {
    width: 100%;
  }

  form {
    width: 100%;
  }
`;
