import { ButtonBaseType } from '@/models/base-components'
import { Button } from 'antd'
import React, { forwardRef } from 'react'


const ButtonBase = forwardRef((props: ButtonBaseType, ref: React.LegacyRef<HTMLButtonElement | HTMLAnchorElement> | undefined) => {
  const { children, ...propsButton } = props
  return (
    <Button {...propsButton} className='button_base' ref={ref}>
      {children}
    </Button>
  )
})

ButtonBase.displayName = "ButtonBase"

export default ButtonBase