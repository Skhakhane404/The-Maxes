import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}) {
  const siteTitle = 'THE MAXES | Premium Panel Beating & Spray Painting in Welkom'
  const siteDescription = 'Expert panel beating, spray painting, and collision repair in Welkom. Free estimates, insurance approved, quality guaranteed.'
  const siteUrl = 'https://www.the-maxes.com'
  const siteImage = '/maxeslogo.jpg'

  return (
    <Helmet>
      <title>{title ? `${title} | THE MAXES` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || 'panel beating, spray painting, car repair, Welkom'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || siteImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image || siteImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  )
}
