
import { Inter } from "next/font/google";
import { Header } from "app/componentes/shared/header";
import { Footer } from "app/componentes/shared/Footer";
import styles from 'app/sass/global.sass';

const inter = Inter({ subsets: ["latin"] });

     

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
        <footer/>
       </body>
    </html>
  );
}
