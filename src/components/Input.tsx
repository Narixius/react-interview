import React from "react";

export const Input= React.forwardRef<HTMLInputElement, any>((props, ref)=>{
  return <input ref={ref} {...props}  className="" />
})