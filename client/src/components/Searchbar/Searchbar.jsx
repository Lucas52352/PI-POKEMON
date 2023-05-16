import { useState } from "react";

export default Searchbar = ( {onSearch} ) => {
    let [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>

            <input 
                value={name}
                type="search" 
                placeholder="wich do you want?"
                onChange={handleChange}
            />

            <button
                className="searchButton"
                onClick={() => {
                    onSearch(name),
                    setName('')
                }}
            >
                Search
            </button>

        </div>
    )
}