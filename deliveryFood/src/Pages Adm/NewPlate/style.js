import styled from 'styled-components'

export const Container = styled.div`

    
    footer{
        margin-top: 30.0rem;
    }

`


export const Page = styled.main`

    position: relative;
    padding: 15rem 12.2rem 0 12.2rem;

    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-bottom: 3.2rem;
        margin-top: 3.2rem;
    }

    .save{
        
        display: flex;
        justify-content: end;
        
    
        button{
        display: flex;
        justify-content: center;
        background-color: ${({theme}) => theme.COLORS.RED_700};
        padding: 1rem;
        gap: 1rem;
        margin-top: 2.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
            
        }

        .delete{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
            color: ${({theme}) => theme.COLORS.WHITE};
            border-radius: 0.8rem;
            padding: 1rem;
        }
    }

    select{
        width: 40rem;
    }
    .buttonBack{
        display: flex;
        align-items: center;
        gap: 1rem;
    }


@media (max-width: 1229px){
    padding-left: 5rem;
    padding-right: 5rem;
    .save{
       button{
        width: 100%;
    } 
    }
    
}
`

