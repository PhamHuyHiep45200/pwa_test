import { InputBaseType } from '@/models/base-components'
import { Input, InputRef } from 'antd'
import React, { forwardRef } from 'react'


const InputBase = forwardRef((props: InputBaseType, ref: React.LegacyRef<InputRef> | undefined) => {
  const { children, ...propsInput } = props
  return (
    <Input {...propsInput} className='input_base' ref={ref}>
      {children}
    </Input>
  )
})

InputBase.displayName = "InputBase"

export default InputBase
