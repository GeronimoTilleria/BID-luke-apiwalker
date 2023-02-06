import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../context/ApiContext';
import Form from './Form';

const LukeApi = () => {

    const { data, sent, params } = useContext(ApiContext);

    return (
        <>
            <Form />
            {
                sent ?
                    params.resource === 'films' ?
                        data.title ?
                            <div className='container'>
                                <h2>{data.title}</h2>
                                <p>Director: {data.director}</p>
                                <p>Producer: {data.producer}</p>
                                <p>Release Date: {data.release_date}</p>
                            </div>
                            :
                            <span className="loader"></span>
                        : params.resource === 'people' ?
                            data.name ?
                                <div className='container'>
                                    <h2>{data.name}</h2>
                                    <p>Height: {data.height}</p>
                                    <p>Hair Color: {data.hair_color}</p>
                                    <p>Birth Year: {data.birth_year}</p>
                                </div>
                                :
                                <span className="loader"></span>
                            : params.resource === 'planets' ?
                                data.name ?
                                    <div className='container'>
                                        <h2>{data.name}</h2>
                                        <p>Diameter: {data.diameter}</p>
                                        <p>Climate: {data.climate}</p>
                                        <p>Gravity: {data.gravity}</p>
                                    </div>
                                    :
                                    <span className="loader"></span>
                                : params.resource === 'species' ?
                                    data.name ?
                                        <div className='container'>
                                            <h2>{data.name}</h2>
                                            <p>Classification: {data.classification}</p>
                                            <p>Designation: {data.designation}</p>
                                            <p>Language: {data.language}</p>
                                        </div>
                                        :
                                        <span className="loader"></span>
                                    : params.resource === 'starships' ?
                                        data.name ?
                                            <div className='container'>
                                                <h2>{data.name}</h2>
                                                <p>Model: {data.model}</p>
                                                <p>Manufacturer: {data.manufacturer}</p>
                                                <p>Consumables: {data.consumables}</p>
                                            </div>
                                            :
                                            <span className="loader"></span>
                                        : params.resource === 'vehicles' ?
                                            data.name ?
                                                <div className='container'>
                                                    <h2>{data.name}</h2>
                                                    <p>Model: {data.model}</p>
                                                    <p>Manufacturer: {data.manufacturer}</p>
                                                    <p>Consumables: {data.consumables}</p>
                                                </div>
                                                :
                                                <span className="loader"></span>
                                            : ''
                    :
                    ''
            }
        </>
    )

}

export default LukeApi
