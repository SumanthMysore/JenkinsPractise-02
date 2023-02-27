import { Box, Dialog, styled, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'

interface ConversionPopupComponentProps {
  isOpen: boolean
  title: string
  buttonLabel: string
  handleButton?: () => void
}
const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: '564px',
  minHeight: '335px',
  borderRadius: theme.spacing(4),
  backgroundColor: theme.palette.info.contrastText,
}))
const StyledTypoBox = styled(Box)({
  maxWidth: '402px',
  maxHeight: '64px',
})
const StyledTypography = styled(TypographyComponent)(({ theme }) => ({
  marginTop: theme.spacing(15),
  marginLeft: theme.spacing(10),
}))
const StyledButton = styled(ButtonComponent)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
  minWidth: '135px',
  minHeight: '56px',
  backgroundColor: theme.palette.primary.main,
}))
const StyledButtonBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(53.5),
  marginTop: theme.spacing(32.75),
  marginBottom: theme.spacing(6),
}))

const ConversionPopupComponent = ({
  isOpen,
  title,
  buttonLabel,
  handleButton,
}: ConversionPopupComponentProps) => {
  const theme = useTheme()
  return (
    <Dialog open={isOpen} data-testid="conversionPopup">
      <StyledBox>
        <StyledTypoBox>
          <StyledTypography variant="body1" color={theme.palette.info.main}>
            {title}
          </StyledTypography>
        </StyledTypoBox>
        <StyledButtonBox>
          <StyledButton
            label={buttonLabel}
            textColor={theme.palette.info.contrastText}
            onClick={handleButton}
          ></StyledButton>
        </StyledButtonBox>
      </StyledBox>
    </Dialog>
  )
}

export default ConversionPopupComponent
