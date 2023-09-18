import { Container, Content } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import buttonBack from "../../Assets/buttonBack.svg"
import { Textarea } from "../../components/Textarea";

import { Order } from '../../components/Order'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";


export function FoodCart(){

    const navigation = useNavigate()
    
    return(

        <Container>

            
            <Header />
            <Content>
            <div className="buttonBack">
            <img src={buttonBack} alt="botão de voltar" />
            <ButtonText
            onClick={() => navigation(-1)}
            title={"voltar"} />
            </div>
            <Order 
            className = 'orders'
            />
            <Order 
            className = 'orders'
            />
            <Order 
            className = 'orders'
            />
            <Order 
            className = 'orders'
            />
            
            <Textarea
                placeholder = "Ex: tirar alface, milho e ervilhas"
                readOnly={true}
             />

            <Button
            onClick={() => navigation("/")}
            className = "Buy"
            title={`Concluir ∙ ${"25,00"}`}
             />
            </Content>
            <Footer />
        </Container>
    )
}