import React from 'react'
import { Grid, styled } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../theme/theme'
import HyperlinkTypography from '../HyperlinkInfo'

interface HeaderWithLinkProps {
  title: string
  value: string
  handleData?: () => void
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const HeaderWithLink = ({ title, value, handleData }: HeaderWithLinkProps) => {
  return (
    <StyledGrid>
      <TypographyComponent variant="caption" color={theme.palette.info.light}>
        {title}
      </TypographyComponent>
      <HyperlinkTypography data={value} handleData={handleData} />
    </StyledGrid>
  )
}

export default HeaderWithLink
