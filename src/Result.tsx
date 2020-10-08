import React from 'react'
import {useLocation} from 'react-router-dom'
import {finalLocation} from './Types/types'
import {Link} from 'react-router-dom'
function Result() {
    const location : finalLocation = useLocation();
    const { state } = location;
    const {amount, counter} = state;
 

    return (
        <div className='Result'>
            <div className='ResultBox'>
                <span>Obtained Marks:{counter} </span>
                <span>Total Marks: {amount}</span>
                <span>Percentage: {((counter/amount) * 100).toFixed(2) + '%'}</span>
                <span>Status: {((+counter/+amount) * 100 > 50) ? 'Passed': 'Failed'}</span>
            </div>
            <div className='GoBack'>
                <Link to ='/'>
                <button type="submit" className='submit_Button'>Start Again</button>
                </Link>
            </div>
        </div>
    )  
}

export default Result;
