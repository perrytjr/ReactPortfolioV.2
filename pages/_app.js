import '../styles/styles.tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout'





function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp