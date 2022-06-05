import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Posts from "./pages/Posts"
import Post from "./pages/Post"
import SideNav from "./components/SideNav"
import Layout from "./components/Layout"

function App() {
  return (
    <div>
        <Router>
            <div className = "flex">
                <SideNav />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Posts />} exact/>
                        <Route path="/:id" element={<Post />}/>
                    </Routes>
                </Layout>
            </div>
        </Router>
    </div>
  );
}

export default App;
