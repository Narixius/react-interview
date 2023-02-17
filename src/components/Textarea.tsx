import React from "react";

export const Textarea= React.forwardRef<HTMLInputElement, any>((props, ref)=>{
  return <textarea ref={ref} {...props}  className="" />
})