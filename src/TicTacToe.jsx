import React, { useState } from "react";


export function TicTacToe() {
    const InitialTicTacToeGridArray = [
        { id: 1, content: null },
        { id: 2, content: null },
        { id: 3, content: "x" },
        { id: 4, content: null },
        { id: 5, content: "x" },
        { id: 6, content: null },
        { id: 7, content: "o" },
        { id: 8, content: null },
        { id: 9, content: null }
    ];

    const [StateOfGrid, setStateOfGrid] = useState(InitialTicTacToeGridArray)

    function whoseTurnItIs() {
        let nullCount = 0
        for (let element of InitialTicTacToeGridArray) {
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

    function takeTurn(cellId, event) {
        console.log("clicked cell " + cellId)




    }



    const gridCells = StateOfGrid.map((cell) => {

        return (
            <div className="ticTacToeCell"
                key={cell.id} onClick={(evt) => takeTurn(cell.id, evt)}>
                {getContentForCell(cell.content)}
            </div>
        );

    })


    return <div className="ticTacToeGrid">{gridCells}</div>

}
function getContentForCell(xoOrNull) {
    if (xoOrNull === "x") {
        return "👽"
    }
    else if (xoOrNull === "o") {
        return "🐮"
    }
    else {
        return null
    }
}