import { Container, Page } from "./style";
import { Tables } from "../../components/Tables";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import imgButtonBack from "../../Assets/buttonBack.svg"
import { useNavigate } from "react-router-dom";




export function OrdersClient(){
    const navigation = useNavigate()

    return(

        <Container>
            <Header />
            <Page>
            <div className="buttonBack">
                <img src={imgButtonBack} alt="Imagem de voltar" />
                <ButtonText
                onClick={() => navigation(-1)}
                title={"voltar"}
                 />
            </div> 
            <Tables
             />
            <Tables
             />
            <Tables
             />
            <Tables
             />
             </Page>
             <Footer />
        </Container>
    )
}