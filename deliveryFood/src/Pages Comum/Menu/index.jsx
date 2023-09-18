import { Container } from "./style";
import { FiX, FiSearch } from "react-icons/fi";
import { InputHeader } from "../../components/InputHeader";
import { useNavigate } from "react-router-dom";


export function Menu({isAdmin, ...rest}){
    const navigation = useNavigate();
    return(
        <Container>

            {isAdmin ? 
<>
    <header>
    <FiX
    onClick={() => navigation("/")} 
    />
    <h1>Menu</h1>
    </header>
    <main>
    <h2>Sair</h2>
    </main>
    </> 
    :

    <>
    <header>
    <FiX
    onClick={() => navigation(-1)} 
    />
    <h1>Menu</h1>
    </header>
    <main>
    
    <h2
    onClick={() =>navigation("/new")}
    >
        Novo Prato</h2>
    <h2>Sair</h2>
    </main>
    </>

        }
            
        </Container>
    )
}