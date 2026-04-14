import React from 'react'

const EmptyResults = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div>Image</div>
            <h1>Results shown here</h1>
            <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        </div>
    )
}

export default EmptyResults