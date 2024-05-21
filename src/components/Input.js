import React from 'react'
import propTypes from 'prop-types'

const Input = ({title,type,style,inputStyle,setInfo}) => {
  return (
    <div className={style}>
      <label htmlFor="name" className='text-base  ' >{title}</label>
      <input onChange={(e)=>setInfo(e.target.value)} className={`mt-4 w-full rounded-xl border border-neutral-dark4 p-2 bg-neutral-light4 ${inputStyle} `} type={type} />
    </div>
  )
}


Input.prototype={
  title:propTypes.string.isRequired,
  type:propTypes.string.isRequired,
  style:propTypes.string.isRequired,
  inputStyle:propTypes.string.isRequired

}
export default Input
