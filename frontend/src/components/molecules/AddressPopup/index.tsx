import { Box, Dialog, styled, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import TextAreaComponent from '../../atoms/TextArea'
import ButtonComponent from '../../atoms/Button'

interface AddressPopupComponentProps {
  isOpen: boolean
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  textcolor: string
  title: string
  label: string
  value: string
  buttonLabel: string
  handleClick?: () => void
}

const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: '564px',
  minHeight: '306px',
  borderRadius: theme.spacing(4),
  backgroundColor: theme.palette.info.contrastText,
}))

const StyledTypography = styled(TypographyComponent)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginLeft: theme.spacing(6),
}))

const StyledTextArea = styled(TextAreaComponent)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginLeft: theme.spacing(6),
  minWidth: '516px',
  minHeight: '98px',
}))

const StyledButton = styled(ButtonComponent)(({ theme }) => ({
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
  minWidth: '135px',
  minHeight: '56px',
  backgroundColor: theme.palette.primary.main,
}))

const StyledButtonBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(53.5),
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(6),
}))

const AddressPopupComponent = ({
  isOpen,
  handleChange,
  textcolor,
  title,
  label,
  value,
  buttonLabel,
  handleClick,
}: AddressPopupComponentProps) => {
  const theme = useTheme()
  return (
    <Dialog open={isOpen} onClose={handleChange} data-testid="addressPopup">
      <StyledBox>
        <StyledTypography variant="body1" color={theme.palette.text.primary}>
          {title}
        </StyledTypography>

        <StyledTextArea
          label={label}
          helperText={''}
          value={value}
          defaultValue={value}
          handleChange={handleChange}
        ></StyledTextArea>

        <StyledButtonBox>
          <StyledButton
            label={buttonLabel}
            textColor={textcolor}
            onClick={handleClick}
          ></StyledButton>
        </StyledButtonBox>
      </StyledBox>
    </Dialog>
  )
}

export default AddressPopupComponent
