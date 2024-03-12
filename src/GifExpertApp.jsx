import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = ( nuevaCategoria ) => {

        setCategories([ nuevaCategoria, ...categories ]);

    }

    return (
        // titulo
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>

            {/* // input */}
            <AddCategory />

            {/* // listado gif */}
          
            <button onClick={() => onAddCategory('hola')}>Agregar</button>
            <ol>
                { 
                categories.map(category => {
                        return <li key={ category }>{ category }</li>
                    }) 
                }
            </ol>
            {/* // gif Item */}
        </>

    )
}

export default GifExpertApp
