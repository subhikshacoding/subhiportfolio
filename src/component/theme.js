import { createContext,useEffect,useState } from "react";
import propTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const[themename,setThemeName] = useState('light');

    useEffect(() =>{
        const darkMediaQuery = window.matchMedia('( prefer-color-scheme :dark)');
        setThemeName(darkMediaQuery.matches ? "dark" : "light")
        darkMediaQuery.addEventListener('change',(event)=>[
            setThemeName(event.matches ? "dark" : "light")
        ]);

    },[])

    const toggleTheme =() =>{
        const name = themename === 'dark' ? "light" : "dark"
        localStorage.setItem('themename' , name)
        setThemeName(name);
    }
    return(
        <ThemeContext.Provider value={[{themename,toggleTheme}]}>
            {children}
        </ThemeContext.Provider>

    )
}

    ThemeProvider.propTypes = {
        children:propTypes.node.isRequired,
    }

export{ThemeContext,ThemeProvider};
