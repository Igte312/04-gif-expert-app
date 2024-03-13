import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory);
        //setCategories([ newCategory, ...categories ]);

    }

    return (
        // titulo
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>

            {/* // input */}
            <AddCategory 
            // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory( value ) }
            />

            {/* // listado gif */}
          
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
