import React from 'react'
import { Grid, styled } from '@mui/material'
import SocialLoginCardComponent from '../../atoms/SocialLoginCard'
import IconComponent from '../../atoms/Icon'
import { IconDetails } from '../../../utils/type'
import { useAuth0 } from '@auth0/auth0-react'

interface IconsGridProps {
  icons: Array<IconDetails>
  socialIcons: boolean
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const IconsGrid = ({ icons, socialIcons }: IconsGridProps) => {
  const { loginWithRedirect } = useAuth0()
  return (
    <StyledGrid container data-testid="icons-grid">
      {icons.map((icon) =>
        socialIcons ? (
          <SocialLoginCardComponent
            key={icon.name}
            logo={icon.icon}
            name={icon.name}
            onClick={loginWithRedirect}
          />
        ) : (
          <IconComponent key={icon.name} src={icon.icon} alt={icon.name} />
        )
      )}
    </StyledGrid>
  )
}
