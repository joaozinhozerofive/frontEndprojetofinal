import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 3rem;
    position: relative;
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    width: 60rem;
    padding: 1rem 1.5rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.8rem;
    align-items: center;
    font-family: 'Poppins', sans-serif;


    .buttonDelete{
        position: absolute;
        right: 1rem;
    }

    img{
        width: 13rem;
        border: 2px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 50%;
    }
    h1{
        font-size: 2.4rem;
    }
    h2{
        font-size: 2rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT};
    }
    button{
        font-size: 1rem;
        width: 6rem;
        padding: 0.8rem;
        position: absolute;
        right: 0.5rem;
        bottom: 1rem;
    }



    @media (max-width: 805px){
        width: 35rem;
    }
`
