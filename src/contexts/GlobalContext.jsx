import { createContext, useState } from "react";


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const initialValue = { amount: "", term: "", rate: "", type: "" };

    const [showResults, setShowResults] = useState(false);
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});

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
        const errors = validate(formValues)
        setFormErrors(errors)

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            calculateMortgage(formValues);
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

        console.log({ amount, term, rate, months });
    }

    const value = {
        showResults,
        setShowResults,
        formValues,
        formErrors,
        handleSubmit,
        handleFormInput,
        initialValue,
        setFormValues

    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }