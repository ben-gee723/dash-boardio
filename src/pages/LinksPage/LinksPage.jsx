import { useParams } from "react-router-dom"
import data from '../../data/data.json'

import LinkButtons from "../../components/LinkButtons";

export default function LinksPage (){
    const { mainLinks, links } = data;
    const { name } = useParams()
    
    const title = mainLinks.filter(a => a.path == name)[0].name
    const filteredLinks = links.filter(a => a.group === name)

    return(
        <div className="home page">
            <h1> {title} </h1>
            <div className="apps-container">
                <LinkButtons links={filteredLinks}/>
            </div>
        </div>
    )
}