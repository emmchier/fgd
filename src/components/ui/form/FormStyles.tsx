import styled from 'styled-components';

export const FormContent = styled.div`
  width: 100%;
  margin-right: ${({ theme }) => theme.spacing(20)};
  margin-left: ${({ theme }) => theme.spacing(70)};
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
  overflow: hidden;
  color: ${({ theme }) => theme.color.black};
  padding-left: ${({ theme }) => theme.spacing(5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.body[1].size};
  line-height: ${({ theme }) => theme.font.body[1].lineHeight};
  padding: 0;
  background-color: ${({ theme }) => theme.color.white};
  border: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary.main};
    background-color: ${({ theme }) => theme.color.white};
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
  resize: none;
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: ${({ theme }) => theme.spacing(40)};
  transition: ${({ theme }) => theme.transition.main};
  color: ${({ theme }) => theme.color.black};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.body[1].size};
  line-height: ${({ theme }) => theme.font.body[1].size};
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary.main};
    background-color: ${({ theme }) => theme.color.white};
    /* padding: ${({ theme }) => theme.spacing(3)} 0; */
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
    background: transparent;
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
