import EmptyIllustration from "../../assets/images/illustration-empty.svg"

const EmptyResults = () => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <img src={EmptyIllustration} alt="" className="w-48 h-48" />
            <h1 className="text-[24px] leading-[125%] font-bold text-white">Results shown here</h1>
            <p className="text-[16px] leading-[150%] font-medium text-[#9ABED5] text-center">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        </div>
    )
}

export default EmptyResults