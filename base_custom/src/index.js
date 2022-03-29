import ReactDOM from 'react-dom'

// TODO: Kommenter ut om du ønsker å bruke .scss
// import './styles/scss/main.scss'

// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
import './styles/css/main.css'

import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from './components/Movies'
import Actors from './pages/Actors'
import Actor from './pages/Actor'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route element={<App />}>
                <Route index element={<Movies />} />
                <Route >
                    <Route path="movies" index element={<Movies />} />
                </Route>
                <Route path="actors">
                    <Route index element={<Actors />} />
                    <Route path=":name" element={< Actor />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>, document.getElementById('root'))
