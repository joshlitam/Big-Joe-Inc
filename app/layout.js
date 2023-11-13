import { Inter } from 'next/font/google'
import './styles/globals.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Big Joe Inc',
  description: 'Home Page of Big Joe Inc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="shortcut icon" href="/images/icon.png" sizes="any" />
        <meta name="color scheme" content="only light" />
        <meta property="og:image" content="/img/hero-pattern-1.jpg" />
        <meta property="og:description" content="Big Joe Company Website" />
      </head>
      <body className={inter.className}>
        <>
          <Carousel />
          {children}
          <Footer />
        </>

      </body>
    </html>
  )
}
