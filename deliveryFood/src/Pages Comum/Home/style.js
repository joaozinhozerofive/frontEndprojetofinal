import styled from 'styled-components'


export const Container = styled.div`



    .home{
        width: 100%;
        display: grid;
        grid-template-areas: 
        "header"
        "page"
        "footer";

        position: relative;
    }
`


export const Page = styled.div`
    flex: 1;
    
    grid-area: page;
    padding: 0 8.4rem;
    overflow-y: auto;
    position: relative;

   
    
    
    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        margin-top: 6.3rem;
    }

    .content::-webkit-scrollbar{
        width: 100%;
    }
    
    .content{

        position: relative;
        overflow-x: auto;
        


    #buttonBack{
        position: fixed;
        top: 25rem;
        z-index: 1000;
    }
    
    #buttonNext{
        position: fixed;
        right: 10rem;
        top: 48rem;
        z-index: 1000
    }
        margin-top: 2.5rem;
        display: flex;
        gap: 2.7rem;
        width: 100%;


       
        
        
    }


    @media (max-width: 1270px){

        .main{
            max-width: 100%;
            
        }
        }



        @media (max-width: 1229px){
            padding-right: 2rem;
            padding-left: 4rem;
            #buttonBack{
                display: none;
            }
            #buttonNext{
                display: none;
            }
        }
        @media (max-width: 1051px){
            .foods{
                h1:first-child{
                font-size: 2.5rem;
            }
            }
            
        }
        @media (max-width: 900px){
            .foods{
                h1:first-child{
                font-size: 2.2rem;
            }
            }
            
        }

`
