import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import EmptyResults from "./EmptyResults";
import PaymentResults from "./PaymentResults";

const Results = () => {

    const { showResults } = useContext(GlobalContext);

    return (
        <section id="results" className='w-full lg:w-126 py-8 px-6 md:p-10 bg-[#133041] lg:rounded-bl-[80px] flex items-center justify-center lg:items-start'>
            {showResults ? <PaymentResults /> : <EmptyResults />}
        </section>

    )
}

export default Results