import { useContext } from "react"
import Calculator from "../../assets/images/icon-calculator.svg"
import { GlobalContext } from "../contexts/GlobalContext"

const Form = () => {

    const { formValues, setFormValues, handleFormInput, initialValue, handleSubmit, formErrors, setShowResults } = useContext(GlobalContext);

    const onClickHandler = () => {
        setShowResults(false);
        setFormValues(initialValue);
    }


    return (
        <form id="form" onSubmit={handleSubmit} className='w-full lg:w-126 py-8 px-6 md:p-10 flex flex-col gap-6 md:gap-10'>
            <div className='flex flex-col md:flex-row gap-2 md:justify-between'>
                <h1 className='text-[24px] leading-[125%] tracking-[0%] text-slate-900 font-bold'>Mortgage Calculator</h1>
                <button type="button" onClick={onClickHandler} className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium underline cursor-pointer'>Clear All</button>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
                <div className='col-span-2 flex flex-col gap-3'>
                    <label htmlFor="amount" className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium'>Mortgage Amount</label>
                    <div className={`flex border ${formErrors.amount ? 'border-[#D73328]' : 'border-[#6B94A8]'}  rounded-sm`}>
                        <p className={`w-11 px-4 py-3 text-[18px] leading-[125%] tracking-[0%] font-bold ${formErrors.amount ? 'text-white' : 'text-[#4E6E7E]'} ${formErrors.amount ? 'bg-[#D73328]' : 'bg-[#E4F4FD]'} `}>{"\u00A3"}</p>
                        <input type="number" inputMode="decimal" pattern="[0-9]*[.]?[0-9]*" name="amount" id="amount" value={formValues.amount} onChange={handleFormInput} className='w-full px-4 text-[18px] leading-[125%] tracking-[0%] text-slate-900 font-bold placeholder-slate-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer' />
                    </div>
                    {formErrors.amount && (
                        <p role="alert" className="text-[#D73328] text-[14px] leading-[150%] font-medium">

                            {formErrors.amount}
                        </p>
                    )}
                </div>
                <div className='col-span-2 md:col-span-1 flex flex-col gap-3'>
                    <label htmlFor="term" className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium'>Mortgage Term</label>
                    <div className={`flex border ${formErrors.amount ? 'border-[#D73328]' : 'border-[#6B94A8]'}  rounded-sm`}>
                        <input type="number" inputMode="decimal" pattern="[0-9]*[.]?[0-9]*" max={30} name="term" id="term" value={formValues.term} onChange={handleFormInput} className='w-full px-4 text-[18px] leading-[125%] tracking-[0%] text-slate-900 font-bold placeholder-slate-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer' />
                        <p className={`w-20 px-4 py-3 text-[18px] leading-[125%] tracking-[0%] font-bold ${formErrors.amount ? 'text-white' : 'text-[#4E6E7E]'} ${formErrors.amount ? 'bg-[#D73328]' : 'bg-[#E4F4FD]'}`}>years</p>
                    </div>
                    {formErrors.term && (
                        <p role="alert" className="text-[#D73328] text-[14px] leading-[150%] font-medium">

                            {formErrors.term}
                        </p>
                    )}
                </div>
                <div className='col-span-2 md:col-span-1 flex flex-col gap-3'>
                    <label htmlFor="rate" className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium'>Interest Rate</label>
                    <div className={`flex border ${formErrors.amount ? 'border-[#D73328]' : 'border-[#6B94A8]'}  rounded-sm`}>
                        <input type="number"
                            inputMode="decimal"
                            pattern="[0-9]*[.]?[0-9]*"
                            max={20}
                            name="rate"
                            value={formValues.rate}
                            id="rate"
                            onChange={(e) => {
                                let val = e.target.value.replace(',', '.').replace(/[^0-9.]/g, '');

                                const parts = val.split('.');
                                if (parts.length > 2) {
                                    val = parts[0] + '.' + parts.slice(1).join('');
                                }

                                setFormValues(prev => ({ ...prev, rate: val }));
                            }}
                            className='w-full px-4 text-[18px] leading-[125%] tracking-[0%] text-slate-900 font-bold placeholder-slate-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer' />
                        <p className={`w-12.5 px-4 py-3 text-[18px] leading-[125%] tracking-[0%] font-bold ${formErrors.amount ? 'text-white' : 'text-[#4E6E7E]'} ${formErrors.amount ? 'bg-[#D73328]' : 'bg-[#E4F4FD]'}`}>%</p>
                    </div>
                    {formErrors.rate && (
                        <p role="alert" className="text-[#D73328] text-[14px] leading-[150%] font-medium">

                            {formErrors.rate}
                        </p>
                    )}
                </div>
                <fieldset className='col-span-2 flex flex-col gap-3'>
                    <legend className='text-[16px] text-[#4E6E7E] text-left leading-[150%] tracking-[0%] font-medium mb-3'>Mortgage Type</legend>
                    <label className='border border-[#6B94A8] rounded-sm px-4 gap-4 h-12 flex items-center cursor-pointer has-checked:bg-[#D8DB2F]/10 has-checked:border-[#D8DB2F] group'>
                        <span className="grid place-items-center w-6 h-6">
                            <input
                                type="radio"
                                name="type"
                                id="repayment"
                                value="repayment"
                                checked={formValues.type === 'repayment'}
                                onChange={handleFormInput}
                                className="peer col-start-1 row-start-1 appearance-none w-6 h-6 border-2 border-gray-400 rounded-full checked:border-[#D8DB2F] focus:ring-0 cursor-pointer"
                            />
                            <div className="col-start-1 row-start-1 w-3 h-3 rounded-full bg-[#D8DB2F] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </span>
                        <span className='text-[18px] leading-[125%] font-bold text-slate-900 flex-1'>
                            Repayment
                        </span>
                    </label>
                    <label className='border border-[#6B94A8] rounded-sm px-4 gap-4 h-12 flex items-center cursor-pointer has-checked:bg-[#D8DB2F]/10 has-checked:border-[#D8DB2F] group'>
                        <span className="grid place-items-center w-6 h-6">
                            <input
                                type="radio"
                                name="type"
                                id="interestOnly"
                                value="interestOnly"
                                checked={formValues.type === 'interestOnly'}
                                onChange={handleFormInput}
                                className="peer col-start-1 row-start-1 appearance-none w-6 h-6 border-2 border-gray-400 rounded-full checked:border-[#D8DB2F] focus:ring-0 cursor-pointer"
                            />
                            <div className="col-start-1 row-start-1 w-3 h-3 rounded-full bg-[#D8DB2F] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </span>
                        <span className='text-[18px] leading-[125%] font-bold text-slate-900 flex-1'>
                            Interest Only
                        </span>
                    </label>
                    {formErrors.type && (
                        <p role="alert" className="text-[#D73328] text-[14px] leading-[150%] font-medium">

                            {formErrors.type}
                        </p>
                    )}
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