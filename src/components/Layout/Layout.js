import React, {Fragment} from 'react'
import classes from './Layout.module.css'
// import Auxi from '../hoc/Auxi'

const layout = (props) => (
  <Fragment>
    <div>Tool, sidedrawer, backdrop</div>
    <main className = {classes.Content} >
      {props.children}
    </main>
  </Fragment>
);


export default layout;