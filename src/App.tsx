import './App.css'
import './index.css'
import Layout from './Components/Layout/Layout'
import { UserProvider } from './Context/UserContext'
import GameComponent from './Components/GameComponent/GameComponent'
import { ThemeContextProvider } from './Context/ThemeContext'
import { GameContextProvider } from './Context/GameContext'

function App() {
  
  return (
    <ThemeContextProvider>
      <UserProvider>
        <GameContextProvider>
        <Layout>

          <GameComponent />
        </Layout>
        </GameContextProvider>
      </UserProvider>
    </ThemeContextProvider>
  )
}

export default App
