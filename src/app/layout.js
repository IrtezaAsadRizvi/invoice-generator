import { Source_Sans_3 } from 'next/font/google'
import { METADATA } from '@/config/metaData'
import './styles/globals.css'
import './styles/tooltip.css'

const font = Source_Sans_3({ subsets: ['latin'] })
export const metadata = METADATA

export default function RootLayout({ children }) {
  return (
      <html>
        <body className={`bg-body dark:bg-body-dark ${font.className}`}>
            {children}
        </body>
      </html>
  )
}
