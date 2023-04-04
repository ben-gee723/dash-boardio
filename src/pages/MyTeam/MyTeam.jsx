import MyTeamsImage from '../../assets/DCI CM - My Team - Ben G.png'

export default function MyTeams() {
    return(
        <div className="page my-team">
            <h1> My Team </h1>
            <div className='image-container'>
                <img src={MyTeamsImage} alt="Diagram of my team" />
            </div>
        </div>
    )
}