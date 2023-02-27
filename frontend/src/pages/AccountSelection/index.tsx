import React, { useCallback, useEffect, useState } from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import BasicTemplate from '../../components/templates/BasicTemplate'
import {
  ACCOUNT_SELECTION_STEPPER_DATA,
  ACCOUNT_SELECT_DATA,
  ACCOUNT_SELECT_TITLE,
  ACCOUNT_SELECT_VALUE,
  BUTTONS,
  COUNTRYREGISTRATION,
  EMPTYSTRING,
  SELECT_COUNTRY_DATA,
} from '../../utils/constants'
import CategorySelection from '../../components/organisms/CategorySelection'
import DropDown from '../../components/molecules/Dropdown'
import PurposeDetailsComponent from '../../components/molecules/PurposeDetails'
import ButtonComponent from '../../components/atoms/Button'
import MobileNumberVerification from '../../components/organisms/MobileVerfication'
import PasswordChange from '../../components/organisms/PasswordChange'
import { useNavigate } from 'react-router-dom'
import { User } from '../../utils/type'
import { getUsersById, updateUser } from '../../api'
import { PASSWORD_REGEX } from '../../utils/regex'

const StyledGridAccount = styled(Grid)({
  minWidth: '516px',
})

const StyledDropdownGridAccount = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(8),
}))

const ButtonGridAccount = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '420px',
  width: '126%',
})

const StyledButtonAccount = styled(ButtonComponent)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
  ':disabled': {
    backgroundColor: theme.palette.warning.main,
  },
  minWidth: '135px',
  minHeight: '56px',
  backgroundColor: theme.palette.primary.main,
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  marginBottom: theme.spacing(6),
}))

const AccountSelection = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const [accountType, setAccountType] = useState<boolean>(true)
  const [selectCountry, setSelectCountry] = useState<boolean>(false)
  const [isCountry, setCountry] = useState<boolean>(true)
  const [mobileNumber, setMobileNumber] = useState<boolean>(false)
  const [password, setPassword] = useState<boolean>(false)

  const navigate = useNavigate()

  const handlePreviousTabAccount = useCallback(() => {
    if (activeTab === 1) {
      setActiveTab(0)
      navigate('/signup')
    }
    if (activeTab === 2) {
      setActiveTab(1)
      setSelectCountry(false)
      setAccountType(true)
    }
    if (activeTab === 3) {
      setActiveTab(2)
      setMobileNumber(false)
      setSelectCountry(true)
    }
    if (activeTab === 4) {
      setActiveTab(3)
      setPassword(false)
      setMobileNumber(true)
    }
  }, [activeTab, navigate])

  const handleSelection = useCallback(() => {
    setAccountType(false)
    setActiveTab(2)
    setSelectCountry(true)
  }, [])

  const countryChange = useCallback(() => setCountry(!isCountry), [isCountry])

  const handleCountry = useCallback(() => {
    setSelectCountry(false)
    setActiveTab(3)
    setMobileNumber(true)
  }, [])

  const handleMobileVerfication = useCallback(() => {
    setMobileNumber(false)
    setActiveTab(4)
    setPassword(true)
  }, [])

  const [user, setUser] = useState<User>()

  useEffect(() => {
    const check = () => {
      getUsersById(2).then((res) => {
        if (res !== undefined) {
          setUser(res)
        }
      })
    }
    check()
  }, [])

  const [pass, setPass] = useState('')
  const [isValidPass, setValidPass] = useState(false)
  const savePassword = useCallback(
    (event: any) => {
      setValidPass(!PASSWORD_REGEX.test(event.target.value))
      setPass(event.target.value)
    },

    []
  )

  const theme = useTheme()
  const goToBusinessSelsction = useCallback(() => {
    navigate('/business')
    if (user !== undefined) {
      setUser && setUser({ ...user, password: pass })
      updateUser({ ...user, password: pass }, 2)
    }
  }, [navigate, pass, user])

  return (
    <Grid container>
      <BasicTemplate
        dataContainer={
          <Grid data-testid="account-selection">
            {accountType && (
              <StyledGridAccount data-testid="select-account">
                <CategorySelection
                  title={ACCOUNT_SELECT_TITLE}
                  subtitle={ACCOUNT_SELECT_VALUE}
                  data={ACCOUNT_SELECT_DATA}
                  handleAccountSetup={handleSelection}
                />
              </StyledGridAccount>
            )}
            {selectCountry && (
              <Grid item>
                <StyledGridAccount>
                  <PurposeDetailsComponent
                    title={SELECT_COUNTRY_DATA[0]}
                    value={EMPTYSTRING}
                  />
                  <StyledDropdownGridAccount>
                    <DropDown
                      placeholder={SELECT_COUNTRY_DATA[1]}
                      data={COUNTRYREGISTRATION}
                      currencyData={[]}
                      isCurrency={false}
                      label={SELECT_COUNTRY_DATA[2]}
                      isLabelText={true}
                      onChange={countryChange}
                    />
                  </StyledDropdownGridAccount>
                </StyledGridAccount>
                <ButtonGridAccount>
                  <StyledButtonAccount
                    label={BUTTONS[0]}
                    textColor={theme.palette.info.contrastText}
                    onClick={handleCountry}
                    disabled={isCountry}
                  />
                </ButtonGridAccount>
              </Grid>
            )}

            {mobileNumber && (
              <MobileNumberVerification
                handleSubmit={handleMobileVerfication}
                user={user}
                setUser={setUser}
              />
            )}

            {password && (
              <PasswordChange
                handleContinuePassword={goToBusinessSelsction}
                handlePassword={savePassword}
                isValidPass={!isValidPass}
              />
            )}
          </Grid>
        }
        isStepper={true}
        stepData={ACCOUNT_SELECTION_STEPPER_DATA}
        activeTab={activeTab}
        isBackButtonVisible={true}
        handleIcon={handlePreviousTabAccount}
        isCloseIcon={false}
      />
    </Grid>
  )
}

export default AccountSelection
