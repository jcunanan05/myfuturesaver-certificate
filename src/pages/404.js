import React from 'react'

import HomeLayout from '../components/layouts/HomeLayout'
import SEO from '../components/Seo'

const NotFoundPage = () => (
  <HomeLayout>
    <SEO title="404: Not found" />
    <h1>Page Not Found.</h1>
  </HomeLayout>
)

export default NotFoundPage