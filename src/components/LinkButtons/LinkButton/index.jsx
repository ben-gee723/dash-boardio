import qMark from '../../../assets/qMark.svg'

export default function LinkButton ({linkInfo}) {
    // const linkInfo = alink ? alink : {
    //     name: "Google Drive",
    //     link: "https://drive.google.com/drive/u/1/",
    //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1147px-Google_Drive_icon_%282020%29.svg.png"
    // }
    // console.log("linkInfo", linkInfo)
    const { name, img, link } = linkInfo;
    
    return(
        <div className="link-button">
            <a href={link}>
                <div className='img-container'>
                    <img src={img ? img : qMark} alt={name}></img>
                </div>
                <h3>{name}</h3>
            </a>
        </div>
    )
}