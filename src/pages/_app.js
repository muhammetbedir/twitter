import '@/styles/globals.css'
import Layout from '@/components/layout'
import { AppProvider } from '../../context/AppContext'
import { AuthContext, AuthProvider } from '../../context/AuthContext'
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </AuthProvider>
  )
}
