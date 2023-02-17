import React from "react";

export const Select= React.forwardRef<HTMLInputElement, any>((props, ref) => {
  const { list = [], ...restOfProps } = props;

  return <select ref={ref} {...restOfProps}  className="">
    {
      list.map((item)=>{
        return <option key={item.id} value={item.value}>{item.title}</option>
      })
    }
    </select>
})