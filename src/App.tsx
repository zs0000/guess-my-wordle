import './App.css'
import './index.css'
import Layout from './Components/Layout/Layout'
import GameComponent from './Components/GameComponent/GameComponent'
import { ThemeContextProvider } from './Context/ThemeContext'
import { GameContextProvider } from './Context/GameContext'

function App() {
  
  return (
    <ThemeContextProvider>

        <GameContextProvider>
        <Layout>

          <GameComponent />
        </Layout>
        </GameContextProvider>

    </ThemeContextProvider>
  )
}

export default App
