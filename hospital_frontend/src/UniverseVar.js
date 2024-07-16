import React from "react"
const DataAppContext = React.createContext();
const UniverseVar = (props) => {
    return(
        <DataAppContext.Provider value="100">
            {
                props.children
            }
        </DataAppContext.Provider>
    )
}
export default UniverseVar;
export {DataAppContext};