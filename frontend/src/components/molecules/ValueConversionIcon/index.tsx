import React from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import IconComponent from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'

interface ValueConversionProps {
  transferedAmount: string
  receivedAmount: string
  logo: string
  name: string
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
})

const StyledTypography = styled(TypographyComponent)(({ theme }) => ({
  marginRight: theme.spacing(3),
}))

const ValueConversion = ({
  transferedAmount,
  receivedAmount,
  logo,
  name,
}: ValueConversionProps) => {
  const theme = useTheme()
  return (
    <StyledGrid>
      <StyledTypography variant="body2" color={theme.palette.text.primary}>
        {receivedAmount}
      </StyledTypography>
      <IconComponent src={logo} alt={name} />
      <StyledTypography
        variant="body2"
        color={theme.palette.text.primary}
        sx={{ marginLeft: theme.spacing(3) }}
      >
        {transferedAmount}
      </StyledTypography>
    </StyledGrid>
  )
}

export default ValueConversion
