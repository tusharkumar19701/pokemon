import React, { useEffect, useState } from 'react'
import MainBody from './MainBody';
// import MainBody from './MainBody';

const Navbar = () => {
    const [pokemon,setPokemon] = useState("");
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [allData,setAllData] = useState("");
    console.log("poke",pokemon);

    async function fetchData() {
        setLoading(true);
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const json = await data.json();
        setLoading(false);
        setAllData(json);
        // console.log(json);
    }
    async function mainData() {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const json = await data.json()
        console.log(json);
        setData(json?.results);
    }
    console.log(data);
    useEffect(() => {
        mainData();
    },[]);

  return (
    <div className=''>
        <div className='bg-red-400 flex justify-center items-center p-4 gap-3 shadow-lg'>
            <input type="text" placeholder='Enter pokemon name' className='w-1/2  p-2 rounded-lg' onChange={(e) => setPokemon(e.target.value.toLowerCase())} />
            <button className='px-10 py-2 bg-white rounded-lg bg-gray-200' onClick={fetchData}>Search</button>
        </div>
        <div className=''>
        {!loading && (pokemon === allData?.name) ? <MainBody name={allData?.name} sprite={allData?.sprites?.front_default} abilities={allData?.abilities} height={allData?.height} weight={allData?.weight} types={allData?.types} stats={allData?.stats} /> :
            <div className='flex justify-center mt-24 font-bold text-xl p-4'>Enter the correct name of the pokemon to know about it</div>
        }
        </div>
    </div>
  )
}

export default Navbar;