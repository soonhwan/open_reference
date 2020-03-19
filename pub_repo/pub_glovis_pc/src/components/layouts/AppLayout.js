import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types'

const AppLayout = ({children}) => {
  return (
      <div id="wrap">
        <Header />
        <section id="container">{children}</section>
        <Footer />
      </div> 
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout