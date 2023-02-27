import React from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'

interface PurposeDetailsComponentProps {
  title: string
  value: string
}
const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
})

const PurposeDetailsComponent = ({
  title,
  value,
}: PurposeDetailsComponentProps) => {
  const theme = useTheme()
  return (
    <StyledGrid>
      <TypographyComponent variant="h1" color={theme.palette.text.primary}>
        {title}
      </TypographyComponent>
      <TypographyComponent variant="subtitle1" color={theme.palette.info.main}>
        {value}
      </TypographyComponent>
    </StyledGrid>
  )
}

export default PurposeDetailsComponent
