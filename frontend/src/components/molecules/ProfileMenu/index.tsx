import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Box, BoxProps, Menu, Divider, Grid } from '@mui/material'
import user from '../../../../public/assets/Icons/user.svg'
import settings from '../../../../public/assets/Icons/settings.svg'
import help from '../../../../public/assets/Icons/help-circle.svg'
import logout from '../../../../public/assets/Icons/logout.svg'
import IconWithTypography from '../IconWithTypography'
import {
  DETAIL_MENU,
  HELP_MENU,
  LOG_OUT_MENU,
  SETTINGS_MENU,
  USER_ID_MENU,
  USER_MENU,
} from '../../../utils/constants'
import PurposeDetailsComponent from '../PurposeDetails'

interface ProfileMenuProps extends BoxProps {
  isOpen: boolean
  anchorEl?: any
  handleLogOut?: () => void
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledDialog = styled(Menu)({
  minWidth: '230px',
  minHeight: '309px',
  '& .MuiMenu-paper': {
    minWidth: '230px',
    minHeight: '309px',
  },
})

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  textTransform: 'none',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
}))

const StyledBox1 = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(5),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}))

const StyledBox2 = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(5),
  cursor: 'pointer',
}))

const TypoBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}))

const ProfileMenu = ({
  isOpen,
  anchorEl,
  handleLogOut,
  ...rest
}: ProfileMenuProps) => {
  return (
    <StyledGrid data-testid="profile-menu">
      <StyledDialog open={isOpen} anchorEl={anchorEl}>
        <StyledBox {...rest}>
          <StyledBox1>
            <PurposeDetailsComponent title={USER_MENU} value={USER_ID_MENU} />
          </StyledBox1>
          <Divider />
          <StyledBox2>
            <TypoBox>
              <IconWithTypography src={user}>{DETAIL_MENU}</IconWithTypography>
            </TypoBox>
            <TypoBox>
              <IconWithTypography src={settings}>
                {SETTINGS_MENU}
              </IconWithTypography>
            </TypoBox>
            <TypoBox>
              <IconWithTypography src={help}>{HELP_MENU}</IconWithTypography>
            </TypoBox>
            <TypoBox onClick={handleLogOut}>
              <IconWithTypography src={logout}>
                {LOG_OUT_MENU}
              </IconWithTypography>
            </TypoBox>
          </StyledBox2>
        </StyledBox>
      </StyledDialog>
    </StyledGrid>
  )
}

export default ProfileMenu
