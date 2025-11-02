import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

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
            <Route path="/blog" element={<div>Blog Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
