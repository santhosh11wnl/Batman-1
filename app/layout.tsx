import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAMA PAVAN NAGA SAI SANTHOSH KATRAGADDA | Full-Stack Developer & GenAI Engineer",
  description:
    "Full-Stack Developer (Python/Django, React/Next.js) and GenAI/ML Engineer with 5 years of experience building scalable web platforms, AI-powered applications, and data-intensive systems.",
  keywords: [
    "Full-Stack Developer",
    "Python",
    "Django",
    "React",
    "Next.js",
    "GenAI",
    "Machine Learning",
    "LLMs",
    "RAG",
  ],
  authors: [{ name: "RAMA PAVAN NAGA SAI SANTHOSH KATRAGADDA" }],
  openGraph: {
    title: "RAMA PAVAN NAGA SAI SANTHOSH KATRAGADDA | Full-Stack Developer & GenAI Engineer",
    description:
      "Full-Stack Developer and GenAI/ML Engineer specializing in Python/Django, React/Next.js, and LLM-powered systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Creepster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased relative"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/mainThemeLogo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
