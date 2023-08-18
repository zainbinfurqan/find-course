'use client'

import { createContext, useState } from "react";


export const GlobleState = createContext(null);

const Context = ({ children }) => {
    const [globleState, setGlobleState] = useState({
        auth: {},
        browseCourses:{},
        course:{}
    });
  
    return (
      <GlobleState.Provider value={{ globleState, setGlobleState }}>
        {children}
      </GlobleState.Provider>
    );
  }

export default Context;
