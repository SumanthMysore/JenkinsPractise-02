import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'

const StyledBox = styled(Box)({
  display: 'flex',
})

const QuestionTypography = styled(TypographyComponent)(({ theme }) => ({
  color: theme.palette.info.main,
  marginRight: theme.spacing(2),
}))

const ValueTypography = styled(TypographyComponent)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

interface SearchFieldFooterProps extends BoxProps {
  question: string
  value: string
}

const SearchFieldFooter = ({ question, value }: SearchFieldFooterProps) => {
  return (
    <StyledBox data-testid="search-field-footer">
      <QuestionTypography variant="body2">{question}</QuestionTypography>
      <ValueTypography variant="body2">{value}</ValueTypography>
    </StyledBox>
  )
}
export default SearchFieldFooter
