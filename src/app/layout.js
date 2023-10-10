import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata = {
  title: 'Materia UI',
  description: 'Material UI and Bootstrap Cmponents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
