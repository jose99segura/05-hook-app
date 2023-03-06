import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"


export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  const { name, species } = !!data && data; //!!data convierte el valor de undefined a false

  if (isLoading) {
    return(
      <h1>Cargando...</h1>
    )
  }

  return (
    <>

    <h1>Rick y Morty personajes</h1>
    <hr />

    {
      (isLoading) 
      ?(
        <div className="alert alert-info text-center">
          Loading...
        </div>
      )
      : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{name}</p>
          <footer className="blockquote-footer">{species}</footer>
        </blockquote>
      )
    }

    <button onClick={ () => increment() } className="btn btn-primary">
      Proximo personaje
    </button>

    </>
  )
}
