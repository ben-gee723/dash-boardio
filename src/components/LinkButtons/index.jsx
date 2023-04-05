import LinkButton from "./LinkButton"

export default function LinkButtons ({links}) {
    // console.log(data.links)
    const sortedLinks = links.sort((a, b) => a.name.localeCompare(b.name))

    // return <LinkButton linkInfo={data.links[0]}/>
    return (<>{sortedLinks.map(link => <LinkButton key={link.name} linkInfo={link}/>)}</>)
}