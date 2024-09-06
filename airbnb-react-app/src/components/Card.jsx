

function Card (props){
    console.log(props)
    return(
        <div className="card">
        <img 
            src={`../images/${props.img}`}
            className="card--image" 
            alt="Main card image."
        />
        <div className="card--stats"> 
            <img 
                src="../images/star.png" 
                className="card--star" 
                alt="Star icon."
            /> 
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.country}</span>
        </div>
        <h2>Life Lessons with Katie Zaferes</h2>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
    );
}

export default Card