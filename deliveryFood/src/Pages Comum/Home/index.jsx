import { Container } from "./style";
import { Page } from "./style";

import imgButtonBack from "../../Assets/buttonBack.svg"
import imgButtonNext from "../../Assets/buttonNext.svg"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banners } from "../../components/Banners";
import { Meals } from "../../components/Meals";

export function Home(){

    return(

        <Container>
        <div className="home">    
        <Header />

        <Page>
        
        <Banners />
        <div className="foods">
            <h1>
                Refeições
            </h1>

        <main className="content">
            
        <Meals 
        className = "plates"
        />
        <Meals 
        className = "plates"
        />
        <Meals 
        className = "plates"
        />
        <Meals 
        className = "plates"
        />
        <Meals 
        className = "plates"
        />
        <Meals 
        className = "plates"
        />
        
        </main>
        </div>
        </Page>
        
        

        <Footer />
        </div>
        </Container>
        

    )

}