import React, {createContext, useState, useEffect} from 'react'

const AppContext = createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const AppProvider = ({children}) => {
    const [array, setArray] = useState([])
    const [mura, setMura] = useState("")

    const GetPhoto = async () => {
        const res = await fetch(url)
        const data = await res.json()
        const {drinks} = data
        setArray(drinks)
    }

    useEffect(() => {
        GetPhoto()
    }, [])
    //
    // const searchText = (event) => {
    //     setMura(event.target.value);
    //
    // };
    // const dataSearch = array.filter((item) => {
    //     return item.username.toLowerCase().includes(mura.toLowerCase());
    // })
    return (
        <AppContext.Provider value={{array,}}>
            {children}
        </AppContext.Provider>
    )
}
export {AppContext, AppProvider,}