import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main role="main" className="flex-1 max-w-5xl mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
