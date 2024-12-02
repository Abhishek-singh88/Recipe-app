//import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import Mealcards from './Mealcards'

const MainPage = () => {

    const [data,setData] = useState()
    const [search,setSearch] = useState()
    const [msg,setMsg] = useState("")
    const [loading, setLoading] = useState(false);

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }

    const myfuc = async () =>{
        if(search==""){
            setMsg("Enter any dish");
        }
        else{
            setLoading(true);
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        //console.log(jsonData);
        setData(jsonData.meals);
        setMsg("");
        setLoading(false); 
    }}

    //console.log(data);
  return (
    <>
        <h1 className='head'>FOOD RECIPE APP</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type="text" placeholder='Enter Dishes' onChange={handleInput}/>
                <button onClick={myfuc}>Search</button>
                <div>
                {loading && <div className='spinner'></div>}
                </div>
            </div>
            <h3 className='error'>
                {msg}
            </h3>
            <div>
                <Mealcards detail={data}/>
            </div>
        </div>
    </>
  )
}

export default MainPage
