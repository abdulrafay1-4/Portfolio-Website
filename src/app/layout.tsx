import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Rafay - Cybersecurity Student & CTF Enthusiast",
  description: "Passionate cybersecurity enthusiast from FAST-NUCES, dedicated to mastering digital defense through CTF competitions and security research.",
  keywords: ["cybersecurity", "CTF", "FAST-NUCES", "security research", "SOC analyst"],
  authors: [{ name: "Abdul Rafay" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
