import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "DuraBlog",
  description: "Blog Website for Durable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
      </head>
      <body className="dark:bg-white-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
