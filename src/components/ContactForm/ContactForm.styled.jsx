import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const Form = styled.form`
  width: 100%;
  padding: 36px 12px;
  background-color: ${theme.colors.greyBgdColor};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: end;

  @media ${theme.media.tablet} {
    padding: 36px 24px;
  }

  @media ${theme.media.tablet} {
    padding: 48px 48px;
  }
`;
export const FieldsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  letter-spacing: -0.64px;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid
    ${({ $hasError }) =>
      $hasError ? theme.colors.errorColor : theme.colors.activeColor};
  outline: none;
  font-size: 18px;
  letter-spacing: -0.72px;
  padding: 8px 0;

  @media ${theme.media.desktop} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`;
export const TextInput = styled.textarea`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.activeColor};
  outline: none;
  resize: none;
  height: 150px;
  font-size: 18px;
  letter-spacing: -0.72px;
  padding: 8px 0;

  @media ${theme.media.desktop} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`;

export const ErrorText = styled.span`
  color: ${theme.colors.errorColor};
  font-size: 12px;
  padding: 8px 0;
  text-align: right;
`;
