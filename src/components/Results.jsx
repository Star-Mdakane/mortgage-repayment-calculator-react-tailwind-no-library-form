import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import EmptyResults from "./EmptyResults";
import PaymentResults from "./PaymentResults";

const Results = () => {

    const { showResults } = useContext(GlobalContext);

    return (
        <div id="results" className='w-full lg:w-126 py-8 px-6 md:p-10 bg-slate-900'>
            {showResults ? <PaymentResults /> : <EmptyResults />}
        </div>

    )
}

export default Results