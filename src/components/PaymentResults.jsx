import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const PaymentResults = () => {

    const { results } = useContext(GlobalContext);

    const { monthly, total } = results;

    return (
        <div className='flex flex-col gap-6 md:gap-10'>
            <div className='flex flex-col gap-4'>
                <h1 className="text-[24px] leading-[125%] font-bold text-white">Your Results</h1>
                <p className="text-[16px] leading-[150%] font-medium text-[#9ABED5]">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>
            <div className='flex flex-col gap-4 px-4 py-6 md:p-8 md:gap-8 rounded-lg bg-[#0E2431] border-t-4 border-[#D8DB2F]'>
                <div className='flex flex-col gap-2 '>
                    <p className='text-[16px] leading-[150%] font-medium text-[#9ABED5]'>Your monthly repayments</p>
                    <p className='text-[40px] md:text-[56px] text-[#D8DB2F] font-bold leading-[auto] md:leading-[125%] tracking-[0%]'>£{monthly}</p>
                </div>
                <div className='w-full h-px bg-[#9ABED5]/25'></div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[16px] leading-[150%] font-medium text-[#9ABED5]'>
                        Total you'll repay over the term
                    </p>
                    <p className='text-[24px] text-white leading-[125%] tracking-[0%] font-bold'>
                        £{total}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PaymentResults;