import React from 'react'
import Square from './Square'

class Board extends React.Component {
    renderSquare(col, row) {
      return <Square col={col} row={row} />
    }
  
    renderRowOfSquares(rowIndex, length) {
      var squares = []
      for (var col = 0; col < length; col++) {
        squares.push(this.renderSquare(col, rowIndex));
      }
      return (
        <div className='row-of-squares'>
          {squares}
        </div>
      );
    }
  
    render() {
      var rows = []
      for (var row = 0; row < 3; row++) {
        rows.push(this.renderRowOfSquares(row, 3))
      }
      return (
        <div className='board'>
          {rows}
        </div>
      );
    }
  }

  export default Board;