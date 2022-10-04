import React, { useState } from "react";
import useSearchValue from "../hooks/useSearchValue";

const AppContext = React.createContext({});

const AppProvider = (props) => {
    const [searchValue, setSearchValue] = useState(useSearchValue);

    return (
        <AppContext.Provider value={{
            searchValue,
            setSearchValue,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };