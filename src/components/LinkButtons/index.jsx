import data from '../../data/data.json'
import LinkButton from "./LinkButton"

export default function LinkButtons () {
    console.log(data.links)
    const sortedLinks = data.links.sort((a, b) => a.name.localeCompare(b.name))

    // return <LinkButton linkInfo={data.links[0]}/>
    return (<>{data.links.map(link => <LinkButton linkInfo={link}/>)}</>)
}