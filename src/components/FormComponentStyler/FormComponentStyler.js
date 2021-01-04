import React , { Component } from 'react'
import { ThemeContext } from '../../themeContext'
import Arrow from './../../static/images/prevButton.png'
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
                <span><img className="upArrow" src={Arrow} alt="Up arrow"/></span>
                <span><img src={Arrow} className="downArrow" alt="down arrow"/></span>
                <span><img onClick={this.props.deleteComponent} className="deleteButton" src={DeleteButton} alt="delete button"/></span>
            </div>
          </div>
        
      )
    }
  }
  
export default FormComponentStyler
