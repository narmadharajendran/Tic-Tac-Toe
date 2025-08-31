class _Util {
    doFindWinner(squares){
        let result = false;
        const winningLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        winningLines.forEach((line) => {
            const[a,b,c] = line;
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                result = true;
                return;
            }
        })
        return result;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

const Util = new _Util();
export default Util;