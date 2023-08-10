import "./productcard.css"

function ProductCard(props){
    return(
        <div className="ProductCard">
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            <div className="Description">
                <p>{props.description}</p>
            </div>
            <img src = {props.img}></img>
        </div>
    );
}
export default ProductCard;