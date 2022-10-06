import styled from 'styled-components';

type PropTypes = {
  width: string;
  height: string;
  moveTo: string;
  margin: string;
  padding: string;
};

export const Content = styled.div<PropTypes>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border-radius: ${({ theme }) => theme.border.radius.main};
  background-color: ${({ theme }) => theme.color.primary.main};
  ${({ moveTo }) => `transform: translate${moveTo};`};
`;
