import { styled } from '@mui/material/styles'
import { Box, BoxProps, Divider, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import {
  TEAM_LABEL,
  BALANCE_LABEL,
  JARS_LABEL,
  ADD_JAR,
  HOME_LABEL,
  SIDENAV_DETAILS1,
  SIDENAV_DETAILS2,
  SIDENAV_DETAILS3,
} from '../../../utils/constants'
import IconWithTypography from '../../molecules/IconWithTypography'
import homeIcon from '../../../../public/assets/Icons/home2.svg'
import teamIcon from '../../../../public/assets/Icons/team.svg'
import addIcon from '../../../../public/assets/Icons/add.svg'
import ChipComponent from '../../atoms/Chip'

interface SideNavProps extends BoxProps {
  isTxnDone: boolean
}

const RootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '230px',
  maxHeight: '768px',
  flexDirection: 'column',
  '& .MuiTypography-root': {
    ...theme.typography.caption,
  },
}))

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5.5),
  marginLeft: theme.spacing(8),
  '& .MuiTypography-root ': {
    color: theme.palette.info.main,
  },
}))

const StyledBoxTxn = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5.5),
  marginLeft: theme.spacing(5),
  '& .MuiTypography-root ': {
    color: theme.palette.info.main,
  },
}))

const TeamBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5.5),
  marginLeft: theme.spacing(8),
  display: 'flex',
  '& .MuiTypography-root ': {
    color: theme.palette.info.main,
  },
}))

const ChipBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(5),
}))

const EmailBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5.5),
  marginLeft: theme.spacing(8),
  '& .MuiTypography-root ': {
    color: theme.palette.primary.main,
  },
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(5),
}))

const SideNav = ({ isTxnDone }: SideNavProps) => {
  const theme = useTheme()
  return (
    <RootBox data-testid="side-nav">
      <EmailBox>
        <IconWithTypography src={homeIcon} atCenter={true}>
          {HOME_LABEL}
        </IconWithTypography>
      </EmailBox>

      {SIDENAV_DETAILS1.map((details) => (
        <StyledBox key={details.name}>
          <IconWithTypography src={details.icon} atCenter={true}>
            {details.name}
          </IconWithTypography>
        </StyledBox>
      ))}

      <TeamBox>
        <IconWithTypography src={teamIcon}>{TEAM_LABEL}</IconWithTypography>
        <ChipBox>
          <ChipComponent label={'New'}></ChipComponent>
        </ChipBox>
      </TeamBox>

      {SIDENAV_DETAILS2.map((details) => (
        <StyledBox key={details.name}>
          <IconWithTypography src={details.icon}>
            {details.name}
          </IconWithTypography>
        </StyledBox>
      ))}

      {isTxnDone && (
        <StyledBoxTxn>
          <Divider variant="fullWidth" />

          <StyledBoxTxn>
            <TypographyComponent
              variant="caption"
              color={theme.palette.info.main}
            >
              {BALANCE_LABEL}
            </TypographyComponent>
          </StyledBoxTxn>

          {SIDENAV_DETAILS3.map((details) => (
            <StyledBoxTxn key={details.name}>
              <IconWithTypography src={details.icon}>
                {details.name}
              </IconWithTypography>
            </StyledBoxTxn>
          ))}

          <StyledDivider />
          <StyledBoxTxn>
            <TypographyComponent
              variant="caption"
              color={theme.palette.info.main}
            >
              {JARS_LABEL}
            </TypographyComponent>
          </StyledBoxTxn>
          <StyledBoxTxn>
            <IconWithTypography src={addIcon}>{ADD_JAR}</IconWithTypography>
          </StyledBoxTxn>
        </StyledBoxTxn>
      )}
    </RootBox>
  )
}
export default SideNav
