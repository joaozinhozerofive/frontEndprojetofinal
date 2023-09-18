import styled from 'styled-components'


export const Container = styled.div`
    margin-bottom: 2rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
    border-radius: 0.8rem;
    width: 100%;
    position: relative;
    border: 2px solid #152c37;
    padding: 3.4rem 1.2rem;
    
    
    
    
    #favorites, #edit{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
    }
    #snack{
        width: 17.6rem;
        margin-top: 2.4rem;
        margin-bottom: -4.0rem;
        border: 2px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 50%;
    }

    h1{
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 2.5rem;
        white-space: nowrap;
        margin-bottom: 1.5rem;
        
    
    }
    p{
        text-align: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;

        color: ${({theme}) => theme.COLORS.LIGHT};
    }
    h2{
        text-align: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 5.2rem;
        margin-bottom: 1.5rem;

        color: ${({theme}) => theme.COLORS.BLUE_100};
    }
    #includs{
        width: 100%;
        text-align: center;
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2.4rem;
        

        >svg{
            width: 1.8rem;
        }

        >button{
            width: 100%;
            text-align: center;
            padding: 1.2rem;
            padding: 2.4rem;
            height: 4.8rem ;
            display: flex;
            align-items: center;
        }

        >h3{
            font-family: 'Roboto', sans-serif;

        }
    }


    
.mealsActive{

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.1rem;
    margin-right: 1.1rem;

    
   

}


    @media (max-width: 1229px){
        
        padding-top: 0;

    #snack{
        width: 12.6rem;
    }

    h1{
        font-size: 2.5rem;
        font-weight: 400;

    }
    p{
        display: none;
    }
    h2{
        font-size: 2.8rem;
        
    }
    #includs{
        display: flex;
        justify-content: center;

        >img, h3{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            margin-bottom: 2rem;
        }

        >button{
            position: absolute;
            bottom: -5rem;
        }
    }
            
        }   
    @media (max-width: 1051px){
        display:flex;
        padding-left: 3rem;
        padding-right: 3rem;
        
    #snack{
        width: 10.6rem;
    }

    h1{
        margin-top: 5rem;
        font-size: 1.5rem;
        font-weight: 400;

    }
    h2{
        font-size: 2rem;
        
    }
    #includs{
        >button{
            font-family: 'Poppins', sans-serif;
            width: 20rem;
            font-size: 1.4rem;
            position: absolute;
            bottom: -5rem;
        }
    }
            
        }   
`
