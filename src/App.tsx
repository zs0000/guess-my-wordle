import './App.css'
import './index.css'
import BaseComponent from './Components/BaseComponent/BaseComponent'
import Layout from './Components/Layout/Layout'
import { UserProvider } from './Context/UserContext'

function App() {


  return (
    <UserProvider>
      <Layout>
        <BaseComponent />
      </Layout>
    </UserProvider>
  )
}

export default App
