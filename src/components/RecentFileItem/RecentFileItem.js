import React, {useContext} from 'react'
import FileIcon from './../../static/images/fileIcon.svg'
import DownloadButton from './../../static/images/downloadButton.png'
import './RecentFileItem.scss'
import { ThemeContext } from '../../themeContext'

export default function RecentFileItem(props) {
    const dayTrue = useContext(ThemeContext)
    return (
        <li className={dayTrue ? 'dayTheme formItemContainer' : 'formItemContainer'}>
            <img className="fileIcon" src={FileIcon} alt="File Icon"></img>
            <div className="formItem">
                <span className="formTitle">Form  1</span>
                <img src={DownloadButton} alt="delete button" />
            </div>
        </li>
    )
}
