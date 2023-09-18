import styled from 'styled-components'


export const Container = styled.div`
   background: ${({theme}) => theme.COLORS.BACKGROUND_700};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 1rem;
   padding: 2.8rem  12.2rem;
   gap: 3.5rem;
   border-radius: 0.8rem;
   position: relative;
   border: 2px solid #152c37;

   .buttonDelete{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
   }

   #snack{
    width: 15rem;
    height: 15rem;
    border: 2px solid ${({theme}) => theme.COLORS.WHITE};
    border-radius: 50%;
   }

   h1{
    font-size: 2.6rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
   }
   .ingredients{
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
   }

   p{
    color: ${({theme}) => theme.COLORS.WHITE};;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
   }
   .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;


    input{
        height: 20rem;
        border: none;
        padding: 1rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        border-radius: 1rem;
        width: 100%;
        color: ${({theme}) => theme.COLORS.LIGHT};
    }
   }
   #includs{
        text-align: center;

        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-top: 2.4rem;
        

        >svg{
            width: 1.8rem;
        }

        >button{
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


    @media (max-width: 1075px){
        
        padding: 3rem;
        width: 50rem;

        #snack{
            width: 10rem;
            height: 10rem;
        }

        
    }


    @media (max-width: 790px){
        display: flex;
        flex-direction: column;
        width: 35rem;


        .content{

        }
        
        button{
            font-size: 1.4rem;
        }

        textarea{
            margin-top: 1rem;
        }
    }
`