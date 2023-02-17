import React from "react";
import classNames from 'classnames'

export const Row:React.FC<any> = (props) => {
  return <div {...props} className={classNames(props.className, 'flex')} />
}