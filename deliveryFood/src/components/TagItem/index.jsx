import { Container } from "./style"
import { FiPlus, FiX } from "react-icons/fi"

export function TagItem({ isNew, title, value, onClick, ...rest}) {

    return(
        <Container isNew={ isNew }>
            <input type="text"
            value={value}
            readOnly = {!isNew}
            {...rest}
             />
            <button
            type="button"
            onClick={ onClick }
            >
            {title}
            {isNew ? <FiPlus/> : <FiX/>}
            </button>
            

            
        </Container>
    )

}
