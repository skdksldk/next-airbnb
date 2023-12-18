import { Nunito } from 'next/font/google'

import Navbar from "./components/layout/Navbar";
import './globals.css'

export const metadata = {
  title: 'aribnb',
  description: 'Aribnb',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
