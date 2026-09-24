import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-oswald",
});

export const metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#080a0d] text-white">

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}