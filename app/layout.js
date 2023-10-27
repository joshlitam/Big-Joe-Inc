import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Big Joe Inc',
  description: 'Home Page of Big Joe Inc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/icon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
