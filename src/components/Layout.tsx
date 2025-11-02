import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto min-h-screen max-w-6xl">
      <Navbar />

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
