import React from 'react'
import Square from './Square'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.ROWS = 3
    this.COLS = 3

    this.state = {
      squares: Array.from(Array(this.ROWS), () => new Array(this.COLS)),
      marker: 'X'
    }
  }

  getNextMarker() {
    if (this.state.marker === 'X') {
      return 'O'
    }
    else {
      return 'X'
    }
  }

  handleClick(col, row) {
    let squares = this.state.squares.map((row) => row.slice())
    squares[row][col] = this.state.marker
    this.setState({squares: squares, marker: this.getNextMarker()})
  }

  renderSquare(col, row) {
    return (
      <Square
        value={this.state.squares[row][col]}
        onClick={() => this.handleClick(col, row)}
      />)
  }
  
  renderRowOfSquares(rowIndex, length) {
    let squares = []
    for (var col = 0; col < length; col++) {
      squares.push(this.renderSquare(col, rowIndex))
    }
    return (
      <div className='row-of-squares'>
        {squares}
      </div>
    )
  }

  render() {
    let rows = []
    for (var row = 0; row < this.ROWS; row++) {
      rows.push(this.renderRowOfSquares(row, this.COLS))
    }
    return (
      <div className='board'>
        <h1>The next player is: {this.state.marker}</h1>
        {rows}
      </div>
    )
  }
  }

  export default Board