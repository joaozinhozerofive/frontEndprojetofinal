import { Container } from "./style";
import { Button } from "../../components/Button";
import logoFood from "../../Assets/logofood.svg"
import { useNavigate } from "react-router-dom";


export function SignInAdm(){

    const navigation = useNavigate()

    return(
        <Container>
            
            <div className="logo">
                <img src={logoFood} alt="Imagem da logo" />
                <h1>food explorer</h1>
            </div>

            <form>
                <h1>Faça login</h1>
                <div className="input-wrapper">
                    <p>Email</p>
                    <input type="text" placeholder="joaodasilva@gmail.com"/>
                </div>
                <div className="input-wrapper">
                    <p>Senha</p>
                    <input type="password" placeholder="No mínimo 6 caracteres"/>
                </div>
                
                <Button 
                title={"Entrar"}/>
             <button
             onClick={() => navigation("/")}
            className="admin"
             >
                Fazer login como usuário comum
             </button>
            </form>


        </Container>
    )
}