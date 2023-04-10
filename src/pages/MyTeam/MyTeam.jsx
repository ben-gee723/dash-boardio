import MyTeamsImage from '../../assets/DCI CM - My Team - Ben G.png'
import Store from '../../store/app-context'


export default function MyTeams() {
    const { width } = Store()
    return(
        <div className="page my-team">
            <div className="title" style={width > 767 ? {}: {display: "block"}}>
                <h1 className={width > 767 ? "": "small-h1"}> My Team </h1>
            </div>
            <a target="_blank" href="https://my-dashboard-delta.vercel.app/assets/DCI%20CM%20-%20My%20Team%20-%20Ben%20G-c35639bb.png">
                <div className='image-container'>
                    <img src={MyTeamsImage} alt="Diagram of my team" />
                </div>
            </a>
        </div>
    )
}