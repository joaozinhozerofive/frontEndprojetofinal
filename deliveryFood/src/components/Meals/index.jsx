import { Container } from "./style";  

import imgPrato  from "../../Assets/imagem-deliveryfood-prato.png"
import imgButtonLess from "../../Assets/less.svg"    
import imgButtonMore from "../../Assets/more.svg" 
import favorites from "../../Assets/favorites.svg"
import buttonEdit from "../../Assets/buttonEdit.svg"

import { Button } from "../Button";
import { Ingredients } from "../Ingredients";
import { useNavigate } from "react-router-dom";



export function Meals ({ isAdmin =  true, title, ...rest}) {
    const navigation = useNavigate();
    function handlePlates(){
        navigation("/plates")
    }

    return(
        <Container 
        isAdmin = {isAdmin}
        {...rest}>

            {!isAdmin ?  <div className="mealsActive">
                <img onClick={() => navigation("/edit")}  id="edit"  src={buttonEdit} alt="coração favoritos" />
                <img  onClick={() => navigation("/plates")} id="snack" src={imgPrato} alt="imagem do prato " />
                <h1 id="snackName">{`Spaguetti Gambe  ${">"}` }</h1>
                <p>Massa fresca com camarões e pesto.</p>
                <h2>{`R$ ${"79,97"}`}</h2>
                
               </div>


             :<div className="mealsActive">
                <img id="favorites"  src={favorites} alt="coração favoritos" />
                <img onClick={() => navigation("/plates")} id="snack" src={imgPrato} alt="imagem do prato " />
                <h1 onClick={() => navigation("/plates")} id="snackName">{`Spaguetti Gambe  ${">"}` }</h1>
                <p>Massa fresca com camarões e pesto.</p>
                <h2>{`R$ ${"79,97"}`}</h2>
                <div className="ingredients">
                
                </div>
                <div id="includs">
                    <img src={imgButtonLess} alt="botao de diminuir" />
                    <h3>01</h3>
                    <img src={imgButtonMore} alt="botao de incluir"  />
                    <Button 
                    onClick={() => handlePlates()}
                    title={"incluir"}
                    />
                    
                </div>


            </div> }
            
        </Container>
    )
}