import React from 'react'
import {useLocation} from 'react-router-dom'
import {finalLocation} from './Types/types'

function Result() {
    const location : finalLocation = useLocation();
    const { state } = location;
    const {total, amount} = state;
    return (
        <div className='Result'>
            <div className='ResultBox'>
                <span>Obtained Marks:{+amount} </span>
                <span>Total Marks: {+total}</span>
                <span>Percentage: {((+amount/+total) * 100).toFixed(2)}</span>
                <span>Status: {((+amount/+total) * 100 > 50) ? 'Passed': 'Failed'}</span>
            </div>
        </div>
    )
}

export default Result
