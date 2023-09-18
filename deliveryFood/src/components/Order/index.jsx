import { Container } from "./style";
import { Button } from "../Button";
import { Textarea } from "../Textarea";
import { Ingredients } from "../Ingredients";

import imgButtonLess from "../../Assets/less.svg"     
import imgButtonMore from "../../Assets/more.svg"
import imgSnack from "../../Assets/imagem-deliveryfood-prato.png"



export function Order({title, isAdmin = true, ...rest}){
    return(

        <Container {...rest}>


            {!isAdmin ? <>
            <img id="snack" src={imgSnack} alt="Imagem do prato" />
            
            <div className="content">
            <h1>Spaguetti Gambe</h1>
            <div className="ingredients">
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
             </div>
           
            
            <div id="includs">
                    <Button 
                    title={"Finalizar"}
                    />
                </div>

            </div>
            </>
            
            
            
            
            : 



            <>
            <img id="snack" src={imgSnack} alt="Imagem do prato" />
            
            <div className="content">
            <h1>Spaguetti Gambe</h1>
            <div className="ingredients">
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
            <Ingredients
            title={"cebola"}
             />
            
             </div>
            <div id="includs">
                    <img src={imgButtonLess} alt="botao de diminuir" />
                    <h3>01</h3>
                    <img src={imgButtonMore} alt="botao de incluir"  />
                    <Button 
                    title={"incluir ∙ R$ 25,00"}
                    />
                    
                    
                </div>

            </div>
            </>
            }
           
        </Container>
    )
}