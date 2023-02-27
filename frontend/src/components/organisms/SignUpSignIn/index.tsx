import React, { useCallback, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Divider, Grid, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import google from '../../../../public/assets/Icons/google.svg'
import facebook from '../../../../public/assets/Icons/facebook.svg'
import apple from '../../../../public/assets/Icons/apple.svg'
import {
  ALREADY_ACCOUNT,
  AND,
  CREATE_ACCOUNT,
  EMAIL_LABLE,
  EMAIL_PLACEHOLDER,
  LOG_IN_TEXT,
  NEW_TO_POCKETPAY,
  NEXT_BTN,
  OR_LOGIN,
  PASSWORD_LABLE,
  PASSWORD_PLACEHOLDER,
  PRIVACY_POLICIY,
  REGISTERING_ACCEPT,
  REMEMBER_ME,
  SIGN_UP_TEXT,
  TERM_USE,
  TROUBLE_LOGIN,
  WELCOME,
} from '../../../utils/constants'
import HyperlinkTypography from '../../molecules/HyperlinkInfo'
import TextFieldComponent from '../../atoms/InputField'
import { IconsGrid } from '../../molecules/IconsGrid'
import { Password } from '../../atoms/Password/index.stories'
import CheckboxComponent from '../../atoms/Checkbox'
import { useAuth0 } from '@auth0/auth0-react'
import { inputValidator } from '../../../utils/functions'
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../../utils/regex'

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
})

const HeadingBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  '& .MuiGrid-root': {
    maxWidth: '380px',
  },
}))

const InputBox = styled(Box)({
  '& .MuiTextField-root': {
    maxWidth: '516px',
  },
})

const TypoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  marginTop: theme.spacing(8),
}))

const TypoBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginTop: theme.spacing(5),
}))

const StyledTypography = styled(TypographyComponent)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(1),
  textTransform: 'none',
}))

const ButtonBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  maxWidth: '50%',
}))

const NextButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '516px',
  minHeight: '56px',
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))

const StylGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: theme.spacing(5),
}))

const IconBox = styled(Grid)({
  minWidth: '70% !important',
})

const icons = [
  { icon: google, name: 'google' },
  { icon: facebook, name: 'facebook' },
  { icon: apple, name: 'apple' },
]

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(8),
}))

const SignUpSignIn = () => {
  const [isSignIn, setSignup] = useState(true)

  const handleSignUp = useCallback(() => {
    setSignup((isSignIn) => !isSignIn)
  }, [])

  const theme = useTheme()
  const { loginWithRedirect } = useAuth0()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [disable, setDisable] = useState<boolean>(false)

  const validateEmail = (eMail: string) => {
    return inputValidator(eMail, EMAIL_REGEX) ? true : false
  }

  const validatePassword = useCallback(() => {
    return inputValidator(password, PASSWORD_REGEX) ? true : false
  }, [password])

  const handleEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
      setDisable(validateEmail(email))
    },
    [email]
  )

  const handleEmailPass = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
      setDisable(validateEmail(name) && validatePassword())
    },
    [name, validatePassword]
  )

  const handlePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
      setDisable(validateEmail(name) && validatePassword())
    },
    [name, validatePassword]
  )

  return (
    <StyledBox data-testid="sign-in-sign-up">
      {isSignIn ? (
        <>
          <HeadingBox>
            <TypographyComponent
              variant="h1"
              color={theme.palette.text.primary}
            >
              {CREATE_ACCOUNT}
            </TypographyComponent>
          </HeadingBox>
          <InputBox>
            <TextFieldComponent
              placeholder={EMAIL_PLACEHOLDER}
              label={EMAIL_LABLE}
              onChange={handleEmail}
              value={email}
            />
          </InputBox>
          <ButtonBox>
            <NextButton
              variant="contained"
              label={NEXT_BTN}
              textColor={theme.palette.info.contrastText}
              onClick={loginWithRedirect}
              disabled={!disable}
            />
          </ButtonBox>
          <TypoBox>
            <TypographyComponent
              variant="caption"
              color={theme.palette.info.main}
            >
              {OR_LOGIN}
            </TypographyComponent>
          </TypoBox>
          <StylGrid>
            <IconBox>
              <IconsGrid icons={icons} socialIcons={true} />
            </IconBox>
          </StylGrid>
          <TypoBox>
            <StyledTypography
              variant="overline"
              color={theme.palette.info.main}
            >
              {REGISTERING_ACCEPT}
            </StyledTypography>
            <HyperlinkTypography data={TERM_USE}></HyperlinkTypography>
            <StyledTypography
              variant="overline"
              color={theme.palette.info.main}
            >
              {AND}
            </StyledTypography>
            <HyperlinkTypography data={PRIVACY_POLICIY}></HyperlinkTypography>
          </TypoBox>

          <StyledDivider />
          <TypoBox>
            <StyledTypography
              variant="overline"
              color={theme.palette.info.main}
            >
              {ALREADY_ACCOUNT}
            </StyledTypography>
            <HyperlinkTypography
              data={LOG_IN_TEXT}
              handleData={handleSignUp}
            ></HyperlinkTypography>
          </TypoBox>
        </>
      ) : (
        <>
          <HeadingBox>
            <TypographyComponent
              variant="h1"
              color={theme.palette.text.primary}
            >
              {WELCOME}
            </TypographyComponent>
          </HeadingBox>
          <InputBox>
            <TextFieldComponent
              placeholder={EMAIL_PLACEHOLDER}
              label={EMAIL_LABLE}
              onChange={handleEmailPass}
              value={name}
            />
          </InputBox>
          <InputBox sx={{ marginTop: theme.spacing(7) }}>
            <Password
              placeHolder={PASSWORD_PLACEHOLDER}
              fieldName={PASSWORD_LABLE}
              onChange={handlePassword}
              value={password}
            />
          </InputBox>
          <ButtonBox>
            <NextButton
              variant="contained"
              label={LOG_IN_TEXT}
              textColor={theme.palette.info.contrastText}
              onClick={loginWithRedirect}
              disabled={!disable}
            />
          </ButtonBox>
          <TypoBox2>
            <CheckboxComponent
              label={REMEMBER_ME}
              sx={{ fontVariant: 'body3' }}
            />
            <HyperlinkTypography data={TROUBLE_LOGIN} />
          </TypoBox2>
          <TypoBox>
            <TypographyComponent
              variant="caption"
              color={theme.palette.info.main}
            >
              {OR_LOGIN}
            </TypographyComponent>
          </TypoBox>
          <StylGrid>
            <IconBox>
              <IconsGrid icons={icons} socialIcons={true} />
            </IconBox>
          </StylGrid>

          <StyledDivider />
          <TypoBox>
            <StyledTypography
              variant="overline"
              color={theme.palette.info.main}
            >
              {NEW_TO_POCKETPAY}
            </StyledTypography>
            <HyperlinkTypography
              data={SIGN_UP_TEXT}
              handleData={handleSignUp}
            ></HyperlinkTypography>
          </TypoBox>
        </>
      )}
    </StyledBox>
  )
}
export default SignUpSignIn
