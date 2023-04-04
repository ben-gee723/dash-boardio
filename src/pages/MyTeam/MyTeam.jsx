import MyTeamsImage from '../../assets/DCI CM - My Team - Ben G.png'

export default function MyTeams() {
    return(
        <div className="page my-team">
            <h1> My Team </h1>
            <a target="_blank" href="https://my-dashboard-delta.vercel.app/assets/DCI%20CM%20-%20My%20Team%20-%20Ben%20G-c35639bb.png">
                <div className='image-container'>
                    <img src={MyTeamsImage} alt="Diagram of my team" />
                </div>
            </a>
        </div>
    )
}