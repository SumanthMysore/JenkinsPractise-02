import React, { useCallback, useState } from 'react'
import { Grid, styled } from '@mui/material'
import IconComponent from '../../atoms/Icon'
import ImageComponent from '../../atoms/Image'
import TypographyComponent from '../../atoms/Typography'
import PocketPay from '../../../../public/assets/Images/PocketPay.svg'
import bell from '../../../../public/assets/Icons/bell.svg'
import close from '../../../../public/assets/Icons/close.svg'
import Ellipse from '../../../../public/assets/Icons/Ellipse.svg'
import {
  AVATAR_ALT,
  BELL_ALT,
  CLOSE_ALT,
  LOGO_ALT,
  PERSONA_NAME,
} from '../../../utils/constants'
import theme from '../../../theme/theme'
import { Stepper } from '../../organisms/Stepper'
import { STEPS } from '../../../utils/type'
import ProfileMenu from '../ProfileMenu'
import { useAuth0 } from '@auth0/auth0-react'

interface TopNavbarProps {
  topNavVariant: boolean
  isStepper: boolean
  stepData: STEPS[]
  activeTab: number
  isCloseIcon: boolean
}
const ParentGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
})

const StyledImage = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(17),
  marginTop: theme.spacing(6),
}))

const StyledAvatarIconsGrid = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(6),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}))

const StyledBellIconsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}))

const StyledChildGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
})

const StyledIcons = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(8),
  marginTop: theme.spacing(5),
}))

const StyledBellIconComponent = styled(IconComponent)(({ theme }) => ({
  minWidth: theme.spacing(4),
  minHeight: theme.spacing(5),
}))

const StyledAvatarIconComponent = styled(IconComponent)(({ theme }) => ({
  minWidth: theme.spacing(7),
  minHeight: theme.spacing(7),
}))

const TopNavbar = ({
  topNavVariant,
  isStepper,
  stepData,
  activeTab,
  isCloseIcon,
}: TopNavbarProps) => {
  const [isLogout, setIsLogout] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState()
  const { logout } = useAuth0()

  const handleIcon = useCallback(
    (event?: any) => {
      setIsLogout(!isLogout)
      setAnchorEl(event?.currentTarget)
    },
    [isLogout]
  )

  return (
    <ParentGrid container data-testid="top-nav">
      <StyledImage>
        <ImageComponent source={PocketPay} alt={LOGO_ALT} />
      </StyledImage>
      {isStepper ? (
        <Stepper stepDataArray={stepData} activeTab={activeTab} />
      ) : (
        ''
      )}
      <Grid item>
        {topNavVariant && (
          <StyledChildGrid>
            <StyledBellIconsGrid>
              <StyledBellIconComponent src={bell} alt={BELL_ALT} />
            </StyledBellIconsGrid>
            <StyledAvatarIconsGrid>
              <StyledAvatarIconComponent
                src={Ellipse}
                alt={AVATAR_ALT}
                handleIcon={handleIcon}
              />
              {isLogout ? (
                <ProfileMenu
                  isOpen={isLogout}
                  anchorEl={anchorEl}
                  handleLogOut={logout}
                  sx={{
                    width: '100%',
                    '& .MuiMenu-paper': {
                      width: '100%',
                      marginTop: '-0.5%',
                      maxWidth: '32.375rem',
                    },
                  }}
                />
              ) : (
                ''
              )}
            </StyledAvatarIconsGrid>

            <StyledIcons>
              <TypographyComponent
                variant="caption"
                color={theme.palette.info.main}
              >
                {PERSONA_NAME}
              </TypographyComponent>
            </StyledIcons>
          </StyledChildGrid>
        )}
        {isCloseIcon ? (
          <StyledChildGrid>
            <StyledIcons>
              <IconComponent src={close} alt={CLOSE_ALT} />
            </StyledIcons>
          </StyledChildGrid>
        ) : (
          ''
        )}
      </Grid>
    </ParentGrid>
  )
}

export default TopNavbar
