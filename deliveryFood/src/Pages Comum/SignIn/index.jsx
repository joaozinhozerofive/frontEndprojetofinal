import { Container } from "./style";
import { Button } from "../../components/Button";
import logoFood from "../../Assets/logofood.svg"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signIn} = useAuth();


     function handleSignIn(){
        signIn({email, password})
    }
   
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
                    <input
                    onChange={e => setEmail(e.target.value)}
                     type="text" 
                     placeholder="joaodasilva@gmail.com"/>
                </div>
                <div className="input-wrapper">
                    <p>Senha</p>
                    <input 
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                     placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button 
                onClick={handleSignIn}
                title={"Entrar"}/>
             <button
             onClick={() => navigation("/register")}
             className="signUp"
             >
                 Crie uma conta
             </button>


             <button
             onClick={() => navigation("/admin")}
            className="admin"
             >
                Fazer login como adm
             </button>
            </form>


        </Container>
    )
}