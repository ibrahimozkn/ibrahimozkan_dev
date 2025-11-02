import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import data from './assets/data.json';
import BlogPost from './pages/BlogPost';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
