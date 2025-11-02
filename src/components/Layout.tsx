import React, { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Prism from 'prismjs';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
      <Navbar />

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
