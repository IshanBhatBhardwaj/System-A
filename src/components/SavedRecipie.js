const SavedRecipie = (props) => {
    return (
        <div className="recipieCard" onClick={props.onClick}>
            <img src={`${props.data.imgSrc}`}></img>
            <div className="recipieSection">
                <p>{props.data.title}</p>
                <p style={{paddingLeft: "5px", paddingRight: "5px"}}>{props.data.description}</p>
            </div>
        </div>
    )
}

export default SavedRecipie