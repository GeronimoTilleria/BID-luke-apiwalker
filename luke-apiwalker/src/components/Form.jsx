import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

const Form = () => {
    const { setParams, setSent } = useContext(ApiContext);

    const [paramsAux, setParamsAux] = useState({
        resource: '',
        id: ''
    });

    const handleSelect = (e) => {
        const { value } = e.target;
        setParamsAux({
            ...paramsAux,
            resource: value
        });


    }

    const handleNumber = (e) => {
        const { value } = e.target;
        setParamsAux({
            ...paramsAux,
            id: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setParams(paramsAux);
        setSent(true);
    };

    return (
        <form className='container my-5' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-around align-items-center' >
                <div className='d-flex align-items-center' style={{ 'width': '250px' }}>
                    <label style={{ 'width': '150px' }}>Search for:</label>
                    <select className='form-select' onChange={handleSelect}>
                        <option value='people'>People</option>
                        <option value='films'>Films</option>
                        <option value='planets'>Planets</option>
                        <option value='species'>Species</option>
                        <option value='starships'>Starships</option>
                        <option value='vehicles'>Vehicles</option>
                    </select>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <label>Id: </label>
                    <input className="form-control" type='number' onChange={handleNumber} min={1} max={10} />
                </div>
                <div>
                    <input className="btn btn-primary" type='submit' value='Search' />
                </div>
            </div>


        </form>
    )
}

export default Form
