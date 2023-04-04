import qMark from '../../assets/'

export default function LinkButton () {
    const linkInfo = {
        name: "Google Drive",
        link: "https://drive.google.com/drive/u/1/",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1147px-Google_Drive_icon_%282020%29.svg.png"
    }
    const { name, img, link } = linkInfo;
    return(
        <div className="link-button" href={link}>
            <img src={img ? img : qMark} alt={name}></img>
            <h3>{name}</h3>
        </div>
    )
}