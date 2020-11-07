import React, {useState, useContext} from 'react'
import { ThemeContext } from '../../themeContext'

import './BackgroundImage.scss'

export default function BackgroundImage(props) {
  const dayTrue = useContext(ThemeContext)

  const [imageError , setImageError] = useState(false)

    return (
        !imageError && dayTrue ? <img 
            alt="Unsplash Random" 
            className="randomImage"
            onError = {() => setImageError(true)}
            src={props.image}
        /> : <></>
    )
}
