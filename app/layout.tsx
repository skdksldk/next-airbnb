import { Nunito } from 'next/font/google'

import Navbar from "./components/layout/Navbar";
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
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
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  )
}
