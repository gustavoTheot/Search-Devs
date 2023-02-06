import styled from "styled-components";

export const Container = styled.div`
    max-width: 54rem;

    margin: 0 auto;
`

export const ListAboutUsers = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 26.25rem);
    grid-template-rows: 20.5rem;
    gap: 1rem;

    margin-top: 4rem;
    margin-bottom: 4rem;

    color: ${props => props.theme['base-text']};
    
`

export const DataAboutUser = styled.li`
    display: flex;    
    flex-direction: row;  
    gap: 1rem;

    border-radius: 10px;
    padding: 1.5rem;

    background-color: ${props => props.theme['gray-600']}; 
`

export const InformsUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li{
            list-style: none;

            display: flex;
            align-items: center;
            gap: 0.5rem;

            svg{
                color: ${props => props.theme['base-label']};
            }
        }
    }

    img{
        width: 9.25rem;
        border-radius: 8px;
    }

`

export const DescriptionUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a{
        font-weight: 700;
        text-decoration: none;
        color: ${props => props.theme['green']}
    }

    p{
        text-align: justify;
    }
`
