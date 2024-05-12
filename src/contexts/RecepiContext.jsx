import React, { createContext , useEffect , useState} from 'react'


export const Recepicontext = createContext(null);

const RecepiContext = (props) => {

    const [recipes, setrecipes] = useState([]);

    useEffect(() =>{
       setrecipes(JSON.parse(localStorage.getItem("recipes")) || []);
    },[])

  return (
    <Recepicontext.Provider value={[recipes, setrecipes]}>
       {props.children}
    </Recepicontext.Provider>
  )
}

export default RecepiContext