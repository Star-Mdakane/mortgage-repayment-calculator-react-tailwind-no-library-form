import Calculator from "../../assets/images/icon-calculator.svg"

const Form = () => {
    return (
        <form id="form" className='w-full lg:w-126 py-8 px-6 md:p-10 flex flex-col gap-6 md:gap-10'>
            <div className='flex flex-col md:flex-row gap-2 md:justify-between'>
                <h1 className='text-[24px] leading-[125%] tracking-[0%] text-slate-900 font-bold'>Mortgage Calculator</h1>
                <button type="button" className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium underline cursor-pointer'>Clear All</button>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
                <div className='col-span-2 flex flex-col gap-3'>
                    <label htmlFor="amount" className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium'>Mortgage Amount</label>
                    <div className='flex border border-[#6B94A8] rounded-sm'>
                        <p className='w-11 px-4 py-3 text-[18px] leading-[125%] tracking-[0%] font-bold text-[#4E6E7E] bg-[#E4F4FD]'>{"\u00A3"}</p>
                        <input type="text" name="" id="amount" className='w-full px-4 text-[18px] leading-[125%] tracking-[0%] text-slate-900 font-bold placeholder-slate-900 cursor-pointer' placeholder='300000' />
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 flex flex-col gap-3'>
                    <label htmlFor="term" className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium'>Mortgage Amount</label>
                    <div className='flex border border-[#6B94A8] rounded-sm'>
                        <input type="text" name="" id="term" className='w-full px-4 text-[18px] leading-[125%] tracking-[0%] text-slate-900 font-bold placeholder-slate-900 cursor-pointer' placeholder='25' />
                        <p className='w-20 px-4 py-3 text-[18px] leading-[125%] tracking-[0%] font-bold text-[#4E6E7E] bg-[#E4F4FD]'>years</p>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 flex flex-col gap-3'>
                    <label htmlFor="rate" className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium'>Mortgage Amount</label>
                    <div className='flex border border-[#6B94A8] rounded-sm'>
                        <input type="text" name="" id="range" className='w-full px-4 text-[18px] leading-[125%] tracking-[0%] text-slate-900 font-bold placeholder-slate-900 cursor-pointer' placeholder='5.25' />
                        <p className='w-12.5 px-4 py-3 text-[18px] leading-[125%] tracking-[0%] font-bold text-[#4E6E7E] bg-[#E4F4FD]'>%</p>
                    </div>
                </div>
                <fieldset className='col-span-2 flex flex-col gap-3'>
                    <legend className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium'>Mortgage Type</legend>
                    <label className='border border-[#6B94A8] rounded-sm px-4 gap-4 h-12 flex items-center cursor-pointer has-checked:bg-[#D8DB2F]/10 group'>
                        <div className="grid place-items-center w-6 h-6">
                            <input
                                type="radio"
                                name="type"
                                className="peer col-start-1 row-start-1 appearance-none w-6 h-6 border-2 border-gray-400 rounded-full checked:border-[#D8DB2F] focus:ring-0 cursor-pointer"
                                defaultChecked
                            />
                            <div className="col-start-1 row-start-1 w-3 h-3 rounded-full bg-[#D8DB2F] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </div>
                        <span className='text-[18px] leading-[125%] font-bold text-slate-900 flex-1'>
                            Repayment
                        </span>
                    </label>
                    <label className='border border-[#6B94A8] rounded-sm px-4 gap-4 h-12 flex items-center cursor-pointer has-checked:bg-[#D8DB2F]/10 group'>
                        <div className="grid place-items-center w-6 h-6">
                            <input
                                type="radio"
                                name="type"
                                className="peer col-start-1 row-start-1 appearance-none w-6 h-6 border-2 border-gray-400 rounded-full checked:border-[#D8DB2F] focus:ring-0 cursor-pointer"
                            />
                            <div className="col-start-1 row-start-1 w-3 h-3 rounded-full bg-[#D8DB2F] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </div>
                        <span className='text-[18px] leading-[125%] font-bold text-slate-900 flex-1'>
                            Interest Only
                        </span>
                    </label>
                </fieldset>
            </div>
            <div className="md:text-left">
                <button aria-label="Calculate Mortgage" type="submit" className="w-82 h-14 flex gap-6 px-10 rounded-full items-center bg-[#D8DB2F] cursor-pointer">
                    <img src={Calculator} alt="calculator" className="w-6 h-6" />
                    <span className="text-[18px] leading-[125%] tracking-[0%] font-bold text-slate-900">Calculate Repayments</span>
                </button>
            </div>
        </form>
    )
}

export default Form