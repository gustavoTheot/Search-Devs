import styled from "styled-components";

export const SearchForm = styled.form`
    position: relative;;
    bottom: 25px;
    
    input{
        width: 100%;
        padding: 1rem;
        outline: none;
        border: 1px solid transparent;
        border-radius: 10px;

        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        color: ${props => props.theme['base-title']};
        background-color: ${props => props.theme['gray-600']};
    
        &::placeholder{
            color: ${props => props.theme['text-input']}
        }

        &:focus{
            border: 1px solid ${props => props.theme['green']};
        }
    }
`