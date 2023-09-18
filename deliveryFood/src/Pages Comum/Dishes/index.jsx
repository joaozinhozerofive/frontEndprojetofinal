import { Container, Page } from "./style.js";
import { Footer } from "../../components/Footer/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import imgButtonBack from "../../Assets/buttonBack.svg"
import imgDishes from "../../Assets/imagem-deliveryfood-prato.png"
import imgButtonLess from "../../Assets/less.svg"     
import imgButtonMore from "../../Assets/more.svg" 
import { Ingredients } from "../../components/Ingredients/index.jsx";
import { useNavigate } from "react-router-dom";

export function Dishes({isAdmin = true}){

    const navigation = useNavigate();
    return(
        <Container>
            <Header/>
            <div className="buttonBack">
                <img src={imgButtonBack}alt="botão de voltar" />
            <ButtonText 
            onClick={() => navigation(-1)}
            title={"voltar"}
            />
            </div>

{!isAdmin ? <Page>

<div className="indexSnack">
    <img  src={imgDishes} alt="Imagem do prato" />

</div>
<div className="content">
     <h1>{`Spaguetti Gambe  ${""}` }</h1>
        <p>Massa fresca com camarões e pesto. </p>

<div className="ingredients">
    <Ingredients
         title={"alface"}
     />
     <Ingredients
        title={"macarrão"}
     />
     <Ingredients
        title={"camarão"}
     />
    <Ingredients
        title={"cebolinha"}
     />
    <Ingredients
        title={"alho"}
     />
    <Ingredients
        title={"alho"}
     />
    <Ingredients
        title={"alho"}
     />
    <Ingredients
        title={"alho"}
     />
</div>

<div id="includs">
    <Button
    onClick={() => navigation("/edit")}
    className = "editDish" 
    title={"Editar prato"}
/>
</div>
</div>
</Page>  : 
<Page>

        <div className="indexSnack">
            <img src={imgDishes} alt="Imagem do prato" />

        </div>
        <div className="content">
             <h1>{`Spaguetti Gambe  ${""}` }</h1>
                <p>Massa fresca com camarões e pesto.</p>
                <div className="ingredients">
    <Ingredients
         title={"alface"}
     />
     <Ingredients
        title={"macarrão"}
     />
     <Ingredients
        title={"camarão"}
     />
    <Ingredients
        title={"cebolinha"}
     />
    <Ingredients
        title={"alho"}
     />
    <Ingredients
        title={"alho"}
     />
    <Ingredients
        title={"alho"}
     />
    <Ingredients
        title={"alho"}
     />
</div>
        
    <div id="includs">
        <img src={imgButtonLess} alt="botao de diminuir" />
        <h3>01</h3>
        <img src={imgButtonMore} alt="botao de incluir"  />
        <Button 
        onClick={() => navigation(-1)}
        title={"incluir ∙ R$ 25,00"}
        />
        
    </div>
    </div>
</Page>
}
            <Footer/>
        </Container>
    )
}