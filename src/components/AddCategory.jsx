import PropTypes from "prop-types";
import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChanged = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return
        onNewCategory(inputValue.  trim())
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChanged} />
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}