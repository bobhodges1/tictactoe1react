import { React, useState } from "react";


export function TicTacToe() {
    const TicTacToeGridArray = [
        { id: 1, content: null },
        { id: 2, content: null },
        { id: 3, content: null },
        { id: 4, content: null },
        { id: 5, content: null },
        { id: 6, content: null },
        { id: 7, content: null },
        { id: 8, content: null },
        { id: 9, content: null }
    ];

    const [initialStateOfGrid, setStateOfGrid] = useState(TicTacToeGridArray)

    function whoseTurnItIs() {
        let nullCount = 0
        for (let element of TicTacToeGridArray) {
            if (element === null) {
                nullCount++;
            }
        }
        if (nullCount % 2 === 1) {
            console.log("player1")
            return "player1"
        } else if (nullCount % 2 === 0) {
            console.log("player2")
            return "player2"
        }

    }


    let whoseTurn = whoseTurnItIs()

    function takeTurn() {
        if (whoseTurn = "player1") {
            console.log("cell clicked")



        }

    }

    const gridCells = TicTacToeGridArray.map((cell) => {
        if (cell.content === null) {
            return (
                <div className="ticTacToeCell" key={cell.id} onClick={takeTurn}></div>
            );
        }
    })


    return <div className="ticTacToeGrid">{gridCells}</div>

}