import styled from 'styled-components'



export const Container = styled.div`
    display: grid;
    gap: 1.5rem;
    width: 100%;
    position: relative;
    
    
    

`


export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    margin-top: 6.4rem;
    padding: 0 7rem;

    .orders{
        width: 100%;
    }
    .buttonBack{
        display: flex;
        gap: 1rem;
        margin-left: -28rem;
        margin-top: 5rem;
        margin-bottom: 8rem;
    }
    
        textarea{
            margin-top: 2rem;
            margin-bottom: 2rem;
            width: 100%;
        }
    
        .Buy{
            padding: 1.5rem;
            width: 30rem;
        }

        
    

    @media (max-width: 610px){
        padding-left: 8rem;
        width: 50rem;

    }
`

 