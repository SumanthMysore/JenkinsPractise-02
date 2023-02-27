import React, { useCallback, useState } from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import { BUTTONS, MOBILENUMBER_SELECTION } from '../../../utils/constants'
import InputWithDropdown from '../../molecules/InputWithDropdown'
import ButtonComponent from '../../atoms/Button'
import TextFieldComponent from '../../atoms/InputField'
import HyperlinkTypography from '../../molecules/HyperlinkInfo'
import TypographyWithIcon from '../../molecules/TypographyWithIcon'
import rightArrow from '../../../../public/assets/Icons/chevron-right.svg'
import { VALID_CODE, VALID_MOBILENUMBER } from '../../../utils/regex'
import { updateUser } from '../../../api'
import { User } from '../../../utils/type'

interface MobileVerficationProps {
  handleSubmit?: () => void
  setUser?: (user: User) => void
  user?: User
}
const GridStyle = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40.688rem',
  justifyContent: 'space-between',
  marginLeft: '150px',
})

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
})

const StyledTypographyGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '516px',
})

const ParentGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(13),
}))

const ChildGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(11),
}))

const StyledInputWithDropdown = styled(InputWithDropdown)({
  '& .MuiPopover-root': {
    mariginTop: '11%',
  },
})

const ButtonGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: '380px',
  width: '651px',
})

const StyledButtonGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: '350px',
  width: '651px',
})

const StyledButtonMobile = styled(ButtonComponent)(({ theme }) => ({
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

const StyledHyperlinkTypographyGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(5),
}))

const MobileVerification = ({
  handleSubmit,
  setUser,
  user,
}: MobileVerficationProps) => {
  const [value, setValue] = useState<boolean>(true)
  const [redirect, setRedirect] = useState<boolean>(false)
  const [mobileNumber, setMobileNumber] = useState<string>(
    user?.mobile_number ? user.mobile_number : '+44 020 7947 62020'
  )
  const [disable, setDisabled] = useState<boolean>(false)
  const [code, setCode] = useState<boolean>(true)

  const handleValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMobileNumber(event.target.value)
      setDisabled(
        !VALID_MOBILENUMBER.test(event.target.value.replace(/\s/g, ''))
      )
    },
    []
  )

  const handleResetCode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCode(!VALID_CODE.test(event.target.value))
    },
    []
  )

  const handleChange = useCallback(() => {
    setValue((value) => !value)
    if (user !== undefined) {
      setUser && setUser({ ...user, mobile_number: mobileNumber })
      updateUser({ ...user, mobile_number: mobileNumber }, 2)
    }
  }, [mobileNumber, setUser, user])

  const handleAuthentication = useCallback(() => {
    setRedirect((redirect) => !redirect)
  }, [])

  const handleCode = useCallback(() => {
    setValue((value) => !value)
    setRedirect((redirect) => !redirect)
  }, [])

  const theme = useTheme()

  return (
    <Grid data-testid="2-factor-authentication">
      {value ? (
        <GridStyle>
          <StyledGrid container>
            <Grid item>
              <PurposeDetailsComponent
                title={MOBILENUMBER_SELECTION[0]}
                value={MOBILENUMBER_SELECTION[1]}
              />
            </Grid>
            <ParentGrid item>
              <StyledInputWithDropdown
                placeholder={MOBILENUMBER_SELECTION[10]}
                isCurrency={false}
                value={MOBILENUMBER_SELECTION[9]}
                handleChange={handleValue}
                mobileNumber={mobileNumber}
              />
            </ParentGrid>
          </StyledGrid>
          <ButtonGrid>
            <StyledButtonMobile
              disabled={disable}
              label={BUTTONS[0]}
              textColor={theme.palette.info.contrastText}
              onClick={handleChange}
            />
          </ButtonGrid>
        </GridStyle>
      ) : (
        <Grid>
          {redirect ? (
            <StyledTypographyGrid container>
              <Grid item>
                <PurposeDetailsComponent
                  title={MOBILENUMBER_SELECTION[5]}
                  value={`${MOBILENUMBER_SELECTION[3]} ${mobileNumber}`}
                />
              </Grid>
              <ParentGrid item>
                <ChildGrid>
                  <TypographyWithIcon arrow={rightArrow}>
                    {MOBILENUMBER_SELECTION[6]}
                  </TypographyWithIcon>
                </ChildGrid>
                <TypographyWithIcon arrow={rightArrow}>
                  {MOBILENUMBER_SELECTION[7]}
                </TypographyWithIcon>
              </ParentGrid>
              <StyledHyperlinkTypographyGrid>
                <HyperlinkTypography
                  handleData={handleCode}
                  data={MOBILENUMBER_SELECTION[8]}
                />
              </StyledHyperlinkTypographyGrid>
            </StyledTypographyGrid>
          ) : (
            <GridStyle>
              <StyledGrid container>
                <Grid item>
                  <PurposeDetailsComponent
                    title={MOBILENUMBER_SELECTION[2]}
                    value={`${MOBILENUMBER_SELECTION[3]} ${mobileNumber}`}
                  />
                </Grid>
                <ParentGrid item>
                  <TextFieldComponent
                    placeholder={MOBILENUMBER_SELECTION[11]}
                    label={MOBILENUMBER_SELECTION[2]}
                    onChange={handleResetCode}
                  />
                </ParentGrid>
                <StyledHyperlinkTypographyGrid>
                  <HyperlinkTypography
                    handleData={handleAuthentication}
                    data={MOBILENUMBER_SELECTION[4]}
                  />
                </StyledHyperlinkTypographyGrid>
              </StyledGrid>
              <StyledButtonGrid>
                <StyledButtonMobile
                  disabled={code}
                  label={BUTTONS[1]}
                  textColor={theme.palette.info.contrastText}
                  onClick={handleSubmit}
                />
              </StyledButtonGrid>
            </GridStyle>
          )}
        </Grid>
      )}
    </Grid>
  )
}

export default MobileVerification
