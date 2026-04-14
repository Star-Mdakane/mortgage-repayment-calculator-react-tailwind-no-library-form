import React from 'react'

const PaymentResults = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-10'>
            <div className='flex flex-col gap-4'>
                <h1>Your Results</h1>
                <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>
            <div className='flex flex-col gap-4 px-4 py-6 md:p-8 md:gap-8'>
                <div className='flex flex-col gap-2'>
                    <p>Your monthly repayments</p>
                    <p>£1,797.74</p>
                </div>
                <div>Divider</div>
                <div className='flex flex-col gap-2'>
                    <p>
                        Total you'll repay over the term
                    </p>
                    <p>
                        £539,322.94
                    </p>
                </div>
            </div>

        </div>
    )
}

export default PaymentResults