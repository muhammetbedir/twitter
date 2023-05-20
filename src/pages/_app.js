import '@/styles/globals.css'
import Layout from '@/components/layout'
import { AppProvider } from '../../context/AppContext'
import { AuthContext } from '../../context/AuthContext'
export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </AuthContext>
  )
}
