import React from 'react'
import { Link, styled, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'

interface HyperlinkTypographyProps {
  data: string
  handleData?: () => void
}

const StyledTypographyComponent = styled(TypographyComponent)({
  textTransform: 'none',
  cursor: 'pointer',
})

const HyperlinkTypography = ({
  data,
  handleData,
}: HyperlinkTypographyProps) => {
  const theme = useTheme()
  return (
    <Link data-testid="hyperlink-data">
      <StyledTypographyComponent
        onClick={handleData}
        variant="overline"
        color={theme.palette.primary.main}
      >
        {data}
      </StyledTypographyComponent>
    </Link>
  )
}

export default HyperlinkTypography
