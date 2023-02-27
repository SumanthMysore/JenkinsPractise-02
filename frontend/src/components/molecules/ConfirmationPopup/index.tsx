import { Box, Dialog, styled } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../theme/theme'
import ImageComponent from '../../atoms/Image'

interface ConfirmationPopupComponentProps {
  isOpen: boolean
  title: string
  label: string
  source: string
  alt: string
  source1: string
  alt1: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const StyledIllustrationImg = styled(Box)(({ theme }) => ({
  minWidth: '175px',
  minHeight: '126px',
  marginTop: theme.spacing(10),
  marginLeft: theme.spacing(46.75),
  marginRight: theme.spacing(46.5),
}))
const StyledEmailCopyImg = styled(Box)(({ theme }) => ({
  minWidth: '160px',
  minHeight: '96px',
  marginTop: theme.spacing(10),
  marginLeft: theme.spacing(48.5),
  marginRight: theme.spacing(48.5),
}))
const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: '548px',
  minHeight: '524px',
  borderRadius: theme.spacing(4),
  backgroundColor: theme.palette.info.contrastText,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))
const StyledTypography = styled(TypographyComponent)(({ theme }) => ({
  marginTop: theme.spacing(22.5),
  marginLeft: theme.spacing(46.75),
  marginRight: theme.spacing(46.5),
}))
const StyledTypography1 = styled(TypographyComponent)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginLeft: theme.spacing(9.75),
  marginRight: theme.spacing(9.75),
}))

const ConfirmationPopupComponent = ({
  isOpen,
  title,
  label,
  source,
  alt,
  source1,
  alt1,
  handleChange,
}: ConfirmationPopupComponentProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleChange}
      data-testid="confirmationPopup"
    >
      <StyledBox>
        <StyledTypography variant="body1" color={theme.palette.text.primary}>
          {title}
        </StyledTypography>

        <StyledIllustrationImg>
          <ImageComponent source={source} alt={alt}></ImageComponent>
        </StyledIllustrationImg>

        <StyledEmailCopyImg>
          <ImageComponent source={source1} alt={alt1}></ImageComponent>
        </StyledEmailCopyImg>

        <StyledTypography1 variant="subtitle1" color={theme.palette.info.main}>
          {label}
        </StyledTypography1>
      </StyledBox>
    </Dialog>
  )
}

export default ConfirmationPopupComponent
