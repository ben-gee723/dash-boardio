import { useParams } from "react-router-dom";
import data from '../../data/data.json';
import { useEffect, useState } from 'react';

import LinkButtons from "../../components/LinkButtons";

export default function LinksPage (){
    const { mainLinks, links } = data;
    const { name } = useParams()

    const [search, setSearch] = useState("");
    const [allLinks, setAllLinks] = useState(data.links)

    const onChange = (e) => setSearch(e.target.value)
    
    useEffect(()=>{
        let newLinks = data.links.filter(a => `${a.name} ${a.technology} ${a.group} ${a.category}`.includes(search.toLowerCase()))
        setAllLinks(newLinks)
    }, [search])
    
    let title = null
    let filteredLinks = null
    
    if (name) {
        title = mainLinks.filter(a => a.path == name)[0].name
        filteredLinks = allLinks.filter(a => a.group === name)
    }

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