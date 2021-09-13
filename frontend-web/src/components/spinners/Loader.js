import { useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import './_Loader.css'

// Can be a string as well. Need to ensure each key-value pair ends with ;

function Loader() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="center-loader">
      <div className="sweet-loading text-center">
        <HashLoader color="#000000" loading={loading} css="" size={80} />
      </div>
    </div>
  )
}

export default Loader
