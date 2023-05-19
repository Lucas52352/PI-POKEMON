import { useState } from "react";
import { useDispatch } from 'react-redux'
import './Searchbar.css'
import { clearSearch, getByName } from "../../redux/actions";

const Searchbar = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {

        setName(event.target.value);

    };

    const handleSearch = (event) => {

        event.preventDefault()
        dispatch(getByName(name))
        dispatch(clearSearch())
        setName('');
    };

    return (
        <div className="searchHandler">

            <input
                value={name}
                type="search"
                className="input"
                onChange={(event) => {
                    handleChange(event)
                }}
            />

            <button
                type="submit"
                className="searchButton"
                onClick={(event) => {
                handleSearch(event);
                }}
                disabled={!name}
            >
                , I choose you!
            </button>
            
        </div>
    );
};

export default Searchbar;
