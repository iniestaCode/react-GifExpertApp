import React,{useState} from 'react'
import PropTypes from 'prop-types'


export const CategoryAdd = ({setCategories}) => {
    const [InputValue, setInputValue] = useState('')
    const HandledInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const HandledSubmitAddCategory = (e)=>{
        e.preventDefault();        
        if(InputValue.trim().length>2){            
            setCategories (catis=>[InputValue,...catis]);                    
        }        
    }   
    return (
        <form onSubmit={HandledSubmitAddCategory}>
           <input 
                type="text"
                value={InputValue}
                onChange={HandledInputChange}                        
           />
        </form>
    )
}
CategoryAdd.propTypes = {    
    setCategories : PropTypes.func.isRequired
}