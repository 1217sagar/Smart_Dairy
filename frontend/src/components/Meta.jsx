import {Helmet} from 'react-helmet-async'

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content='{description}'></meta>
      <meta name='keywords' content='keywords'></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Welcome to SmartDairy",
  description: 'We sell best quality products',
  keywords: 'electronics, buy electronics, cheap electronics',
}

export default Meta