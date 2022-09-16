import { createContext , useContext, useReducer } from 'react'

// this prepares the data layer
export const DataContext = createContext();


// this wraps our app which needs the data
export const Provider = ({reducer, initialState, children}) => {
  return(
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  )
}

// this helps in pulling the data
export const useContextValue = () => useContext(DataContext);
