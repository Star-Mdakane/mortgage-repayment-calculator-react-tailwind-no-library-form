import { createContext, useState } from "react";


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const initialValue = { amount: "", term: "", rate: "", type: "" };

    const [showResults, setShowResults] = useState(false);
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [results, setResults] = useState(null);

    const handleFormInput = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const validate = (form) => {
        const errors = {};
        if (!form.amount) {
            errors.amount = "This field is required";
        }
        if (!form.term) {
            errors.term = "This field is required";
        }
        if (!form.rate) {
            errors.rate = "This field is required";
        }
        if (!form.type) errors.type = "This field is required";
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length == 0) {
            const res = calculateMortgage(formValues);
            setResults(res);
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    }

    const calculateMortgage = (values) => {
        const amount = Number(values.amount);
        const term = Number(values.term);
        const rate = Number(values.rate) / 100 / 12;
        const months = Number(values.term) * 12;

        if (!amount || !term || !rate) {
            return { monthly: 0, total: 0 };
        }

        if (values.type === 'repayment') {
            const pow = Math.pow(1 + rate, months);
            const monthlyRepayment = amount * (rate * pow) / (pow - 1);
            const mortgage = monthlyRepayment * months;

            return {
                type: 'repayment',
                monthly: Number(monthlyRepayment.toFixed(2)),
                total: Number(mortgage.toFixed(2))
            };
        }

        if (values.type === 'interestOnly') {
            const monthlyInterestOnly = amount * rate;
            const totalInterestOnly = monthlyInterestOnly * months;
            const interestOnlyMortgage = totalInterestOnly + amount;

            return {
                type: 'interestOnly',
                monthly: Number(monthlyInterestOnly.toFixed(2)),
                total: Number(totalInterestOnly.toFixed(2)),
                totalInterest: Number(interestOnlyMortgage.toFixed(2))
            };
        }

        return { monthly: 0, total: 0 };


    }

    const value = {
        showResults,
        setShowResults,
        formValues,
        formErrors,
        handleSubmit,
        handleFormInput,
        initialValue,
        setFormValues,
        results

    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }