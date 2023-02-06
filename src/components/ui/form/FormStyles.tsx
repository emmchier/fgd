import styled from 'styled-components';

export const FormContent = styled.div`
  width: 50%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(0)};

  button:last-child {
    background: transparent;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.color.secondary.dark};

    &:hover {
      color: ${({ theme }) => theme.color.black};
    }

    &:disabled {
      visibility: hidden;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
`;

export const ContentField = styled.div`
  position: relative;

  input,
  textarea {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    label {
      font-size: ${({ theme }) => theme.font.body[3].size};
      line-height: ${({ theme }) => theme.font.body[3].size};
    }

    input,
    textarea {
      margin-bottom: ${({ theme }) => theme.spacing(0)};
    }
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.color.error};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  transform: translateY(10px);
`;

export const TextareaContainer = styled.span`
  p {
    transform: translateY(20px);
  }
`;

export const InputContent = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(0)};
  width: 100%;
  &:focus-within label {
    color: ${({ theme }) => theme.color.primary.main};
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 45px;
  color: ${({ theme }) => theme.color.secondary.dark};
  padding-left: ${({ theme }) => theme.spacing(3)} !important;
  border: 2px solid ${({ theme }) => theme.color.secondary.light};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  font-size: ${({ theme }) => theme.font.body[1].size};
  line-height: ${({ theme }) => theme.font.body[1].lineHeight};
  font-weight: ${({ theme }) => theme.font.weight.regular} !important;
  background: transparent;
  transition: ${({ theme }) => theme.transition.main};
  overflow: hidden;
  padding: 0;

  &:empty {
    border: 2px solid ${({ theme }) => theme.color.secondary.light};
    background: transparent;
    outline: none;
  }

  &:hover {
    background: ${({ theme }) => theme.color.background.light};
    transition: ${({ theme }) => theme.transition.main};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.primary.main};
    background: ${({ theme }) => theme.color.white};
    outline: none;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.body[3].size};
  line-height: ${({ theme }) => theme.font.body[3].lineHeight};
  color: ${({ theme }) => theme.color.black};
`;

export const TextareaContent = styled.div`
  padding: 0;
  &:focus-within label {
    color: ${({ theme }) => theme.color.primary.main};
  }
`;

export const TextareaField = styled.textarea`
  width: 100%;
  height: 45px;
  max-height: ${({ theme }) => theme.spacing(30)};
  color: ${({ theme }) => theme.color.secondary.dark};
  padding-left: ${({ theme }) => theme.spacing(3)} !important;
  border: 2px solid ${({ theme }) => theme.color.secondary.light};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  font-size: ${({ theme }) => theme.font.body[1].size};
  line-height: ${({ theme }) => theme.font.body[1].lineHeight};
  font-weight: ${({ theme }) => theme.font.weight.regular} !important;
  background: transparent;
  transition: ${({ theme }) => theme.transition.main};
  resize: none;
  margin: 0;

  &:not(:placeholder-shown) {
    border: 2px solid ${({ theme }) => theme.color.primary.main};
    background: ${({ theme }) => theme.color.white};
    outline: none;
  }

  &:empty {
    border: 2px solid ${({ theme }) => theme.color.secondary.light};
    background: transparent;
    outline: none;
  }

  &:hover {
    background: ${({ theme }) => theme.color.background.light};
    transition: ${({ theme }) => theme.transition.main};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.primary.main};
    background: ${({ theme }) => theme.color.white};
    outline: none;
  }

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(2.5)};
    cursor: pointer;
  }
  ::-webkit-scrollbar-track {
    border-radius: ${({ theme }) => theme.spacing(5)};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.spacing(5)};
    background: red;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: transparent;
    cursor: pointer;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    max-height: ${({ theme }) => theme.spacing(70)};
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TextareaLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.body[3].size};
  line-height: ${({ theme }) => theme.font.body[3].size};
  color: ${({ theme }) => theme.color.black};
`;

export const SendedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.secondary.dark};
  transition: ${({ theme }) => theme.transition.main};

  p {
    font-size: ${({ theme }) => theme.font.body[1].size};
    line-height: ${({ theme }) => theme.font.body[1].size};
    margin-top: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.color.secondary.dark};
  }

  button {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;
