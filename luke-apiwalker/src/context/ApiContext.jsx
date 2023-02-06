import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

    const [sent, setSent] = useState(false);

    const [params, setParams] = useState({
        resource: '',
        id: ''
    });

    const [data, setData] = useState(null);

    useEffect(() => {
        const getResource = async () => {
            try {
                const res = await fetch(`https://swapi.dev/api/${params.resource}/${params.id}`);
                const post = await res.json();
                setData(post);
            } catch (error) {
                console.log(error);
            }
        };
        getResource();
    }, [params]);

    return (
        <ApiContext.Provider value={{
            params, setParams, data, sent, setSent
        }}>
            {children}
        </ApiContext.Provider>
    );
};