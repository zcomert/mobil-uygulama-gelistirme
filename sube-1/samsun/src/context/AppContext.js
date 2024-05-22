import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    
    const [ids, setIds] = useState([]);

    const addFav = (id) => {
        setIds([...ids, id]);
    }

    const removeFav = (id) => {
        setIds([...ids.filter(item => item!==id)])
    } 

    const values = {
        ids:ids,
        addFav:addFav,
        removeFav:removeFav
    }


    return(<AppContext.Provider value={values} >{children}</AppContext.Provider>)
}

export default AppContext;