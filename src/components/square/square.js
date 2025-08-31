import "./square.styles.scss";

const Square  = (props) =>{
    const {handleOnClick, value} = props;
    return(
        <button className="square" onClick={handleOnClick}>{value}</button>
    )
}

export default Square;