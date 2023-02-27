import React from 'react'
import { styled, Typography } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'

interface ButtonComponentProps extends ButtonProps {
  label: string
  textColor: string
  onClick? : (event: any) => void
}
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(14),
}))

const ButtonComponent = ({
  label,
  textColor,
  ...buttonProps
}: ButtonComponentProps) => {
  return (
    <StyledButton data-testid="button" type="button" {...buttonProps}>
      <Typography color={textColor} variant="body2">
        {label}
      </Typography>
    </StyledButton>
  )
}

export default ButtonComponent

