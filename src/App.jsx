import AuthContext from "./context/AuthContext"
import HomePage from "./pages/Homepage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NewArticle from "./pages/NewArticle"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"

function App() {
  return (
    <Router>
      <AuthContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewArticle />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AuthContext>
    </Router>
  )
}

export default App