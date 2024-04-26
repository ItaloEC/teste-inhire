import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste InHire",
  description: "Italo Alves de Lima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`flex items-center justify-center bg-slate-900 ${montserrat.className} text-white`}
      >
        {children}
      </body>
    </html>
  );
}
