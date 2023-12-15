import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomThemeProvider from './components/CustomThemeProvider'
import Main from './pages/Main'

const App = () => {
    return (
        <BrowserRouter>
            <CustomThemeProvider>
                <Routes>
                    <Route path='/' element={ <Main /> } />
                </Routes>
            </CustomThemeProvider>
        </BrowserRouter>
    )
}

export default App