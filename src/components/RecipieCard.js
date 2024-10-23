const RecipieCard = (props) => {
    return (
        <div className="recipieCard" onClick={props.onClick}>
            <img src={`${props.data.imgSrc}`}></img>
            <div className="recipieSection">
                <p>{props.data.title}</p>
                <p style={{paddingLeft: "5px", paddingRight: "5px"}}>{props.data.description}</p>
                <button className="saveButton">Save This Recipe</button>
            </div>
        </div>
    )
}

export default RecipieCard