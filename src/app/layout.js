import "./globals.css";

export const metadata = {
  title: "Erik & Lana",
  description: "Wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="arm">
      <head>
        <meta property="og:url" content="https://erik-lana.vercel.app" />
        <meta property="og:title" content="Էրիկ և Լանա" />
        <meta property="og:description" content="Հրավեր" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
