import React from 'react'
import './Square.css'

class Square extends React.Component {
    render() {
        return (
            <button className='square'>
                ({this.props.col}, {this.props.row})
            </button>
        )
    }
}

export default Square;