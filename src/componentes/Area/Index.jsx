import styles from './Area.module.css'
import React from 'react'

const Area = ({ titulo, tituloColor, videoBorderColor, btnColor, children }) => {

  const childrenArray = React.Children.toArray(children)

  return (
    <>
      {childrenArray.length > 0 && <div className={styles.areaContainer}>
      <h1 style={{ backgroundColor: tituloColor }}>{titulo}</h1>
        <div className={styles.videoContainer}>
          {children.map((child) => React.cloneElement(child, { videoBorderColor, btnColor }))}
        </div>
      </div>}
    </>
  )
}

export default Area