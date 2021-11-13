<<<<<<< HEAD
import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
=======
import React from "react";
export default (reducer,actions,initialState) =>{
    const Context = React.createContext();

    const Provider=({children})=>{
        const [state, dispatch] = useReducer(reducer, initialState, []);

        const boundActions ={};
        for(let key in actions){
            boundActions[key] = actions[key](dispatch);
        }


        return <Context.Provider value={{state,...boundActions}}>
            {children}
        </Context.Provider>
    }

    return {Context,Provider};

}

>>>>>>> a0731a5a26423ffecf90021584af56b59201011c
