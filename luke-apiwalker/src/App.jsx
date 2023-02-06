
import './App.css'
import Form from './components/Form'
import LukeApi from './components/LukeApi'
import { ApiProvider } from './context/ApiContext'

function App() {

    return (
        <div className="App">
            <ApiProvider>
                <LukeApi />
            </ApiProvider>
        </div>
    )
}

export default App
