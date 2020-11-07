import React, {useContext} from 'react'
import { ThemeContext } from '../../themeContext'
import RecentFileItem from '../RecentFileItem/RecentFileItem'
import './RecentForm.scss'

export default function RecentForms(props) {
    const dayTrue = useContext(ThemeContext)
    return (
        <>
            <div className={dayTrue? "recentForm dayTheme":"recentForm"}>
                <h1>Saved Forms</h1>
                <ul>
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                    <RecentFileItem day={props.toggleDay} />
                </ul>
            </div>
        </>
        
    )
}
