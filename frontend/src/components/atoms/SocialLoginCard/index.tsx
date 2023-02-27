import React from 'react'
import { Grid, styled } from '@mui/material'
import ImageComponent from '../Image'

interface SocialLoginCardProps {
  logo: string
  name: string
  onClick?: () => void
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3.5),
  width: 'fit-content',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.info.contrastText,
  cursor: 'pointer',
}))

const SocialLoginCardComponent = ({
  logo,
  name,
  onClick,
}: SocialLoginCardProps) => {
  return (
    <StyledGrid data-testid="sociallogincard" onClick={onClick}>
      <ImageComponent source={logo} alt={name} />
    </StyledGrid>
  )
}

export default SocialLoginCardComponent
