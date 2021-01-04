import React from 'react'
import './DownloadJSON.scss'

export default function DownloadJSON(props) {
    return (
        <button onClick={props.download} className="downloadJSON">Finalize</button>
    )
}
