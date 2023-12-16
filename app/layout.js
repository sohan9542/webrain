import { Inter } from 'next/font/google'
import './globals.css'
import './bootstrap.css'
import '@/lib/animate/animate.min.css'
import "swiper/css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webrain | Web development agency',
  description: 'Web development agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      <link rel="icon" href={'/tab2.png'} />
      
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
