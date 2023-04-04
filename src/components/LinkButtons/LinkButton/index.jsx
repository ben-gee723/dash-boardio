import qMark from '../../../assets/qMark.svg'

export default function LinkButton ({linkInfo}) {
    const { name, img, link } = linkInfo;
    
    return(
        <div className="link-button">
            <a href={link} target="_blank">
                <div className='img-container'>
                    <img src={img ? img : qMark} alt={name}></img>
                </div>
                <h3>{name}</h3>
            </a>
        </div>
    )
}