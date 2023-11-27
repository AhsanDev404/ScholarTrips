import { Inter } from "next/font/google";
import "./globals.css";
import CustomProvider from "./components/CustomProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
