import "./globals.css";

export const metadata = {
  title: "Erik & Lana",
  description: "Wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="arm">
      <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Էրիկ և Լանա" />
        <meta name="twitter:description" content="Հրավեր" />
        <meta name="twitter:image" content="/assets/images/main.png" />
        <meta property="og:title" content="Էրիկ և Լանա" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erik-lana.vercel.app" />
        <meta property="og:image:url" content="/assets/images/main.png" />
        <meta property="og:description" content="Հրավեր" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
