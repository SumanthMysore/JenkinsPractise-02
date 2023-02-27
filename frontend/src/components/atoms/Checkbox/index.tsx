import React from 'react'
import { Box, Checkbox, CheckboxProps, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import TypographyComponent from '../Typography'

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: theme.spacing(6.5),
  },
}))

interface CheckboxComponentProps extends CheckboxProps {
  label: string
  checked?: boolean
}

const CheckboxComponent = ({
  label,
  checked,
  ...checkboxProps
}: CheckboxComponentProps) => {
  const theme = useTheme()
  return (
    <StyledBox data-testid="checkbox">
      <StyledCheckbox {...checkboxProps} checked={checked} />
      <TypographyComponent
        variant="subtitle1"
        color={theme.palette.text.primary}
      >
        {label}
      </TypographyComponent>
    </StyledBox>
  )
}
export default CheckboxComponent
