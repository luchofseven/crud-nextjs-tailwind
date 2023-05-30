import './globals.css'
import { Montserrat } from 'next/font/google'
import { TaskProvider } from '@/context/TasksContext'
import { Toaster } from './Toaster'
import Navbar from '@/components/Navbar'
import { Layout } from '@/components/Layout'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'CRUD App with NextJS',
  description: 'CRUD App generate with NextJS'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>
        <TaskProvider>
          <Navbar />
          <Layout>
            {children}
          </Layout>
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  )
}
