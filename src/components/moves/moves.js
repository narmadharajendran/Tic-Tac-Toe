import { useMemo } from "react";

const Moves = (props) =>{
    const {history, handleMove} = props;
    const historyLeangth = history.length;
    return(
        <>
            {/* <button onClick={()=>handleMove(0)}>{"Go to game start"}</button> */}
            <h3>Move History</h3>
            {
                historyLeangth > 1 && history.map((history,index) => 
                    (
                        index !==0 && <button className="ui-button" key={index} onClick={()=>handleMove(index)}>{index === 1 ? "Go to game start" : `Go to move ${index - 1}`}</button>
                    ) 
                )
            }
        </>
    )
}

export default Moves