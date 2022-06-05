import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Posts from "./pages/Posts"
import Post from "./pages/Post"
import SideNav from "./components/SideNav"
import Layout from "./components/Layout"

function App() {
    return (
        <div className="flex h-screen">
            <Router>
                <SideNav />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Posts />} exact />
                        <Route path="/:id" element={<Post />} />
                    </Routes>
                </Layout>
            </Router>
        </div>
    )
}

export default App
