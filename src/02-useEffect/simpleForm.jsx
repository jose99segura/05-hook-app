import { useEffect, useState } from "react"


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'jose99segura',
        email: 'jose@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () =>  {
        console.log("formState username ha cambiado");
    }, [username]);

    useEffect( () =>  {
        console.log("formState email ha cambiado");
    }, [email]);

    return (
        <>

            <h1>Formulatio Simple</h1>
            <hr />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                name="username" 
                value={ username }
                onChange = { onInputChange }
            />
            <input 
                type="email" 
                className="form-control mt-2" 
                placeholder="jose@gmail.com" 
                name="email" 
                value={ email }
                onChange = { onInputChange }
            />


        </>
    )
}