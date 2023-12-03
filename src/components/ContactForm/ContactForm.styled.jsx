import styled from "styled-components";
import { theme } from "../../constants/theme";

export const Form = styled.form`
    width: 100%;
    padding: 36px 12px;
    background-color: ${theme.colors.greyBgdColor};
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: end;
`
export const FieldsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ $hasError }) => ($hasError ? theme.colors.errorColor : theme.colors.activeColor)};
    outline: none;
`
export const TextInput = styled.textarea`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${theme.colors.activeColor};
    outline: none;
    resize: none;
    height: 150px;
`

export const ErrorText = styled.p`
    color: ${theme.colors.errorColor};
    font-size: 12px;
`