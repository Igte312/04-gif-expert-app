import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onImputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onImputChange}

            />
        </form>
    )
}


AddCategory.protoTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

