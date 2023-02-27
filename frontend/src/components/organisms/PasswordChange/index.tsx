import { styled } from '@mui/material/styles'
import { Grid, useTheme } from '@mui/material'
import ButtonComponent from '../../atoms/Button'
import {
  CONTINUE_BTN,
  EMPTYSTRING,
  PASSWORD_DETAIL,
  PASSWORD_LABLE,
  PASSWORD_PLACEHOLDER,
} from '../../../utils/constants'
import PasswordFieldComponent from '../../atoms/Password'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'

interface PasswordChangeProp {
  handleContinuePassword?: () => void
  handlePassword?: (event: any) => void
  isValidPass?: boolean
}

const GridStyled = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(25),
}))

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '516px',
  minHeight: '650px',
})

const ButtonGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
})

const StyledPasswordField = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(8),
}))

const ContinueButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))

const PasswordChange = ({
  handleContinuePassword,
  handlePassword,
  isValidPass,
}: PasswordChangeProp) => {
  const theme = useTheme()

  return (
    <GridStyled container>
      <StyledGrid data-testid="password-change">
        <PurposeDetailsComponent title={PASSWORD_DETAIL} value={EMPTYSTRING} />
        <StyledPasswordField>
          <PasswordFieldComponent
            placeHolder={PASSWORD_PLACEHOLDER}
            fieldName={PASSWORD_LABLE}
            onChange={handlePassword}
          />
        </StyledPasswordField>
      </StyledGrid>
      <ButtonGrid>
        <ContinueButton
          variant="contained"
          label={CONTINUE_BTN}
          textColor={theme.palette.info.contrastText}
          onClick={handleContinuePassword}
          disabled={isValidPass}
        />
      </ButtonGrid>
    </GridStyled>
  )
}
export default PasswordChange
