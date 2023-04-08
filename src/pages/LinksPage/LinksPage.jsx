import { useEffect, useState, lazy } from 'react';
import { useParams } from "react-router-dom";
import data from '../../data/data.json';

import LinkButtons from "../../components/LinkButtons";

export default function LinksPage (){
    const { navlinks } = data;
    const { name } = useParams()

    const [search, setSearch] = useState("");
    const [allLinks, setAllLinks] = useState(data.links)

    const onChange = (e) => setSearch(e.target.value)
    
    useEffect(()=>{
        let newLinks = data.links.filter(a => `${a.name} ${a.technology} ${a.category} ${a.keywords}`.toLowerCase().includes(search.toLowerCase()))
        setAllLinks(newLinks)
    }, [search])
    
    let title = name ? navlinks.filter(a => a.path == name)[0].name: null;
    let filteredLinks = name ? allLinks.filter(a => a.category === name): null;

    return(
        <div className="page">
            <h1> {title ? title: "All App Links"} </h1>
            <input onChange={onChange} type="text" name="search" id="search" placeholder=' Search for something...' />
            <div className="apps-container">
                <LinkButtons links={filteredLinks !== null ? filteredLinks : allLinks}/>
            </div>
        </div>
    )
}