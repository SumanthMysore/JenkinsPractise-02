import { styled } from '@mui/material/styles'
import { Box, Grid, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import {
  BENIFICIRY_DETAIL,
  EMAIL_LABLE,
  ACCOUNT_NO,
  FIRST_NAME,
  CONTINUE_BTN,
  LAST_NAME,
  IFSC,
  RECEIPENT_DETAIL,
  CHECKBOX_TEXT,
  ACCOUNT_TYPE,
  ACCOUNT_LABEL,
  ACCOUNT_PLACEHOLDER,
} from '../../../utils/constants'
import TextFieldComponent from '../../atoms/InputField'
import CheckboxComponent from '../../atoms/Checkbox'
import DropDown from '../../molecules/Dropdown'
import { useCallback, useEffect, useState } from 'react'
import {
  createAccount,
  createUser,
  getAllAccounts,
  getAllUsers,
} from '../../../api'
import { Account, User } from '../../../utils/type'

interface BenificiaryDetailsProps {
  handleChange?: () => void
}

const StyledGrid = styled(Grid)({
  marginLeft: '100px',
})

interface BenificiaryDetailsProps {
  handleChange?: () => void
}
const RootBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
})

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
})
const StyledCheckBox = styled(Box)(({ theme }) => ({
  '& .MuiTypography-root': { color: theme.palette.info.main },
}))

const InputBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
}))

const ButtonBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  minWidth: '651px',
})

const ContinueButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))
const StyledDropdownBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  '& .MuiInputLabel-root': {
    color: theme.palette.info.light,
  },
}))
const StyledDropdown = styled(DropDown)({
  bottom: 'auto',
  top: '100%',
})

const BenificiaryDetails = ({ handleChange }: BenificiaryDetailsProps) => {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [acc, setAcc] = useState('')
  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [accType, setAccType] = useState('')

  const [userLength, setUserLength] = useState<User[]>([])
  const [accLength, setAccLength] = useState<Account[]>([])

  const handleEmail = useCallback(
    (event: any) => setEmail(event.target.value),
    []
  )

  const handleAccount = useCallback(
    (event: any) => setAcc(event.target.value),
    []
  )

  const handleLname = useCallback(
    (event: any) => setLname(event.target.value),
    []
  )

  const handleFname = useCallback(
    (event: any) => setFname(event.target.value),
    []
  )

  const handleIFSC = useCallback(
    (event: any) => setIfsc(event.target.value),
    []
  )

  const handleAccType = useCallback((event: any) => {
    setAccType(event.name)
  }, [])

  useEffect(() => {
    getAllUsers().then((res) => setUserLength(res))
    getAllAccounts().then((res) => setAccLength(res))
  }, [])

  const handleData = () => {
    createAccount({
      account_number: acc,
      ifsc_number: ifsc,
      id: accLength.length + 1,
      account_type: accType,
      balance: 0,
      created_at: '',
    })

    createUser({
      email: email,
      first_name: fName,
      last_name: lName,
      id: userLength.length + 1,
      address_id: 0,
      account_id: accLength.length + 1,
      date_of_birth: '',
      mobile_number: '',
      password: '',
      created_at: '',
    })
  }

  return (
    <StyledGrid>
      <RootBox>
        <StyledBox data-testid="benificiary-details">
          <TypographyComponent variant="h1" color={theme.palette.text.primary}>
            {BENIFICIRY_DETAIL}
          </TypographyComponent>

          <InputBox>
            <TextFieldComponent
              placeholder={EMAIL_LABLE}
              onChange={handleEmail}
              label={EMAIL_LABLE}
            />
          </InputBox>

          <StyledCheckBox>
            <CheckboxComponent label={CHECKBOX_TEXT}/>
          </StyledCheckBox>

          <InputBox>
            <TypographyComponent
              variant="subtitle1"
              color={theme.palette.text.primary}
            >
              {RECEIPENT_DETAIL}
            </TypographyComponent>
          </InputBox>

          <InputBox>
            <TextFieldComponent
              placeholder={ACCOUNT_NO}
              onChange={handleAccount}
              label={ACCOUNT_NO}
            />
          </InputBox>

          <InputBox>
            <TextFieldComponent
              placeholder={FIRST_NAME}
              onChange={handleFname}
              label={FIRST_NAME}
            />
          </InputBox>

          <InputBox>
            <TextFieldComponent
              placeholder={LAST_NAME}
              onChange={handleLname}
              label={LAST_NAME}
            />
          </InputBox>

          <InputBox>
            <TextFieldComponent
              placeholder={IFSC}
              onChange={handleIFSC}
              label={IFSC}
            />
          </InputBox>

          <StyledDropdownBox>
            <StyledDropdown
              placeholder={ACCOUNT_PLACEHOLDER}
              data={ACCOUNT_TYPE}
              currencyData={[]}
              isCurrency={false}
              label={ACCOUNT_LABEL}
              isLabelText={true}
              onChange={handleAccType}
            />
          </StyledDropdownBox>
        </StyledBox>
      </RootBox>
      <ButtonBox onClick={handleChange}>
        <ContinueButton
          variant="contained"
          label={CONTINUE_BTN}
          textColor={theme.palette.info.contrastText}
          onClick={handleData}
        />
      </ButtonBox>
    </StyledGrid>
  )
}
export default BenificiaryDetails
