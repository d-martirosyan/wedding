import "./globals.css";

export const metadata = {
  title: "Erik & Lana",
  description: "Wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="arm">
      <head>
        <meta property="og:title" content="Էրիկ և Լանա" />
        <meta property="og:description" content="Հրավեր" />
        <meta property="og:image" content="/assets/images/glavniy.PNG" />
        <meta property="og:url" content="https://erik-lana.vercel.app" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
