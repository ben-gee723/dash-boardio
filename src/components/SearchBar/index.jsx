import { useEffect, useState } from 'react';
import data from '../../data/data.json';

export default function SearchBar ({setAllLinks}){
    const { links } = data;
    const [search, setSearch] = useState("");

    const onChange = (e) => setSearch(e.target.value)

    useEffect(()=>{
        let newLinks = links.filter(a => `${a.name} ${a.technology} ${a.category} ${a.keywords}`.toLowerCase().includes(search.toLowerCase()))
        setAllLinks(newLinks)
    }, [search])
    
    return <input onChange={onChange} type="text" name="search" id="search" placeholder=' Search for something...' />

}