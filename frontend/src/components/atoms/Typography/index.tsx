import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

interface TypographyComponentProps extends TypographyProps {
  children?: React.ReactNode
}

const TypographyComponent = (props: TypographyComponentProps) => {
  const { children, variant, align, color, gutterBottom, ...rest } = props
  return (
    <Typography
      variant={variant}
      align={align}
      gutterBottom={gutterBottom}
      color={color}
      {...rest}
    >
      {children}
    </Typography>
  )
}

export default TypographyComponent
