import Form from "./components/Form"
import Results from "./components/Results"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {

  return (
    <GlobalProvider>
      <div id="app" className="bg-white w-93.75 md:w-172 lg:w-252 flex flex-col lg:flex-row md:rounded-3xl overflow-hidden">
        <Form />
        <Results />
      </div>
    </GlobalProvider>
  )
}

export default App
