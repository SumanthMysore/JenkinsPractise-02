import React from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'

interface ReviewDetailProps {
  title: string
  value: string
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const ReviewDetail = ({ title, value }: ReviewDetailProps) => {
  const theme = useTheme()
  return (
    <StyledGrid>
      <TypographyComponent variant="body2" color={theme.palette.info.main}>
        {title}
      </TypographyComponent>
      <TypographyComponent variant="body2" color={theme.palette.text.primary}>
        {value}
      </TypographyComponent>
    </StyledGrid>
  )
}

export default ReviewDetail
