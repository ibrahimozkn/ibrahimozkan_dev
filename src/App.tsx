import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import data from './assets/data.json';
import BlogPost from './pages/BlogPost';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <div className="bg-background-dark min-w-full">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog blogPosts={data.blogPosts} />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/projects" element={<Projects projects={data.projects} />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
