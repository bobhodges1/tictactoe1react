import React, { useState } from "react";

export function TicTacToe() {

    const InitialTicTacToeGridArray = [
        { id: 0, content: null },
        { id: 1, content: null },
        { id: 2, content: null },
        { id: 3, content: null },
        { id: 4, content: null },
        { id: 5, content: null },
        { id: 6, content: null },
        { id: 7, content: null },
        { id: 8, content: null }
    ];

    const [stateOfGrid, setStateOfGrid] = useState(InitialTicTacToeGridArray)
    console.log("rerendered grid", stateOfGrid)

    function takeTurn(cellId, event) {
        console.log(whoseTurn)
        console.log("clicked cell " + cellId)
        console.log(checkForWinner())
        const updatedGrid = [...stateOfGrid]
        if (whoseTurn === "player1" && updatedGrid[cellId].content === null) {
            updatedGrid[cellId].content = "x"
            setStateOfGrid(updatedGrid)
        }
        else if (whoseTurn === "player2" && updatedGrid[cellId].content === null) {
            updatedGrid[cellId].content = "o"
            setStateOfGrid(updatedGrid)
        }
        else {
            return null
        }
    }

    function whoseTurnItIs() {
        let nullCount = stateOfGrid.filter(cell => cell.content === null).length
        return nullCount % 2 === 1 ? "player1" : "player2";
    }

    let whoseTurn = whoseTurnItIs()

    const gridCells = stateOfGrid.map((cell) => {

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

