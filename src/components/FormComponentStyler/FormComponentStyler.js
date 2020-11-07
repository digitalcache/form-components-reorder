import React , { Component } from 'react'
import { ThemeContext } from '../../themeContext'
import UpArrow from './../../static/images/upArrow.png'
import DownArrow from './../../static/images/downArrow.png'
import DeleteButton from './../../static/images/deleteButton.svg'

import './FormComponentStyler.scss'

const FormComponentStyler = (FormComponentWrapper) =>
  class FormComponentStyler extends Component {
    static contextType = ThemeContext
    dayTrue = this.context;

    render() {
      return (
          <div className="formComponentWrapper">
            <FormComponentWrapper
            {...this.props}
            />
            <div className={this.dayTrue ? 'formManage dayTheme':'formManage'} >
                <span><img src={UpArrow} alt="Up arrow"/></span>
                <span><img src={DownArrow} alt="down arrow"/></span>
                <span><img src={DeleteButton} alt="delete button"/></span>
            </div>
          </div>
        
      )
    }
  }
  
export default FormComponentStyler
