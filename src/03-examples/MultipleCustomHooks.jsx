import { useFetch, useCounter } from "../hooks";

import { Quote, LoadingQuote } from "./";


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
      isLoading
      ? <LoadingQuote />
      :<Quote 
        name = {name}
        species = {species}
      />
    }

    <button onClick={ () => increment() } className="btn btn-primary">
      Proximo personaje
    </button>

    </>
  )
}
