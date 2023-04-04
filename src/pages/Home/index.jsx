import data from '../../data/data.json'
import LinkButtons from "../../components/LinkButtons"
import { useEffect, useState } from 'react'

export default function Home (){
    const [search, setSearch] = useState("");
    const [links, setLinks] = useState(data.links)

    const onChange = (e) => setSearch(e.target.value)
    
    useEffect(()=>{
        let newLinks = data.links.filter(a => a.name.toLowerCase().includes(search.toLowerCase()))
        setLinks(newLinks)
    }, [search])

    return (
        <div className="home page">
                <h1>All App Links</h1>
                <input onChange={onChange} type="text" name="search" id="search" placeholder=' Search for something...' />
            <div className="apps-container">
                <LinkButtons links={links}/>
            </div>
        </div>
    )
}