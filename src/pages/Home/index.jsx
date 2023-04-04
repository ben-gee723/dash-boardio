import LinkButtons from "../../components/LinkButtons"
export default function Home (){
    return (
        <div className="home page">
            <h1>All App Links</h1>
            <div className="apps-container">
                <LinkButtons/>
            </div>
        </div>
    )
}