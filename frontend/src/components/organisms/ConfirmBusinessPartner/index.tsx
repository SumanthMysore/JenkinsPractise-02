import { styled } from '@mui/material/styles'
import { Box, IconButton, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import TextFieldComponent from '../../atoms/InputField'
import DropDown from '../../molecules/Dropdown'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import DatePickerComponent from '../../atoms/DatePicker'
import closeIcon from '../../../../public/assets/Icons/close.svg'
import plusIcon from '../../../../public/assets/Icons/plus.svg'
import {
  FIRST_NAME,
  CONTINUE_BTN,
  LAST_NAME,
  DOB_LABLE,
  BUSINESS_DIRECTORS_TEXT,
  BUSINESS_SHAREHOLDER_TEXT,
  BUSINESS_SHAREHOLDER_LABEL,
  COUNTRY_DROPDOWN_LABEL,
  BUSINESS_DIRECTORS_LABEL,
  COUNTRY_DATA,
  BUSINESS_DIRECTORS_DETAIL,
  ADD_DIRECTOR_TEXT,
  ADD_SHAREHOLDER_TEXT,
} from '../../../utils/constants'
import { useCallback, useState } from 'react'
import IconComponent from '../../atoms/Icon'
import IconWithTypography from '../../molecules/IconWithTypography'

interface ConfirmPartnerProps {
  handleShareHolder?: () => void
  handleDirector?: () => void
  isNext?: boolean
}

const RootBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '665px',
})

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '515px',
})
const StyledDropdown = styled(DropDown)({
  bottom: 'auto',
  top: '100%',
})

const InputBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
}))
const TextBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}))
const LabelBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(10),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '515px',
}))

const BtnBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  minWidth: '651px',
})

const ContinueBtn = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))
const DropdownBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  '& .MuiInputLabel-root': {
    color: theme.palette.info.light,
  },
}))
const StyledDatePicker = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.divider} !important`,
  },
  '& .MuiIconButton-root': {
    color: theme.palette.info.light,
  },
}))
const StyledIconWithTypography = styled(IconWithTypography)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
  },
}))

const inputData = () => {
  return (
    <StyledBox>
      <InputBox>
        <TextFieldComponent placeholder={FIRST_NAME} label={FIRST_NAME} />
      </InputBox>

      <InputBox>
        <TextFieldComponent placeholder={LAST_NAME} label={LAST_NAME} />
      </InputBox>

      <StyledDatePicker>
        <DatePickerComponent label={DOB_LABLE} />
      </StyledDatePicker>
      <DropdownBox>
        <StyledDropdown
          placeholder={COUNTRY_DROPDOWN_LABEL}
          data={COUNTRY_DATA}
          currencyData={[]}
          isCurrency={false}
          label={COUNTRY_DROPDOWN_LABEL}
          isLabelText={true}
        />
      </DropdownBox>
    </StyledBox>
  )
}

const ConfirmBusinessPartner = ({
  handleShareHolder,
  handleDirector,
  isNext,
}: ConfirmPartnerProps) => {
  const theme = useTheme()
  const [directorFields, setDirectorFields] = useState([{ inputData }])
  const [ownerFields, setOwnerFields] = useState([{ inputData }])

  const handleAddDirectorFields = useCallback(() => {
    setDirectorFields([...directorFields, { inputData }])
  }, [directorFields])

  const handleAddOwnerFields = useCallback(() => {
    setOwnerFields([...ownerFields, { inputData }])
  }, [ownerFields])

  const handleRemoveDirectorFields = useCallback(
    (index: number) => {
      const list = [...directorFields]
      list.splice(index, 1)
      setDirectorFields(list)
    },
    [directorFields]
  )
  const handleRemoveOwnerFields = useCallback(
    (index: number) => {
      const list = [...ownerFields]
      list.splice(index, 1)
      setOwnerFields(list)
    },
    [ownerFields]
  )

  return (
    <Box data-testid="confirm-business-partner">
      {!isNext && (
        <RootBox>
          <StyledBox>
            <PurposeDetailsComponent
              title={BUSINESS_DIRECTORS_DETAIL}
              value={BUSINESS_DIRECTORS_TEXT}
            />
          </StyledBox>

          {directorFields.map((element, index) => (
            <Box key={element + String(index)}>
              <LabelBox>
                <TypographyComponent
                  variant="subtitle1"
                  color={theme.palette.text.primary}
                >
                  {`${BUSINESS_DIRECTORS_LABEL} ${index + 1}`}
                </TypographyComponent>

                {index ? (
                  <IconButton onClick={() => handleRemoveDirectorFields(index)}>
                    <IconComponent src={closeIcon} alt="Close" />
                  </IconButton>
                ) : null}
              </LabelBox>

              {element.inputData()}

              {directorFields.length - 1 === index &&
                directorFields.length < 3 && (
                  <TextBox>
                    <IconButton
                      color="primary"
                      onClick={handleAddDirectorFields}
                    >
                      <StyledIconWithTypography src={plusIcon}>
                        {ADD_DIRECTOR_TEXT}
                      </StyledIconWithTypography>
                    </IconButton>
                  </TextBox>
                )}
            </Box>
          ))}
          <BtnBox>
            <ContinueBtn
              variant="contained"
              label={CONTINUE_BTN}
              textColor={theme.palette.info.contrastText}
              onClick={handleDirector}
            />
          </BtnBox>
        </RootBox>
      )}

      {isNext && (
        <RootBox>
          <StyledBox>
            <PurposeDetailsComponent
              title={BUSINESS_DIRECTORS_DETAIL}
              value={BUSINESS_SHAREHOLDER_TEXT}
            />
          </StyledBox>
          {ownerFields.map((element, index) => (
            <Box key={element + String(index)}>
              <LabelBox>
                <TypographyComponent
                  variant="subtitle1"
                  color={theme.palette.text.primary}
                >
                  {`${BUSINESS_SHAREHOLDER_LABEL} ${index + 1}`}
                </TypographyComponent>

                {index ? (
                  <IconButton onClick={() => handleRemoveOwnerFields(index)}>
                    <IconComponent src={closeIcon} alt="Close" />
                  </IconButton>
                ) : null}
              </LabelBox>

              {element.inputData()}

              {ownerFields.length - 1 === index && ownerFields.length < 3 && (
                <TextBox>
                  <IconButton color="primary" onClick={handleAddOwnerFields}>
                    <StyledIconWithTypography src={plusIcon}>
                      {ADD_SHAREHOLDER_TEXT}
                    </StyledIconWithTypography>
                  </IconButton>
                </TextBox>
              )}
            </Box>
          ))}
          <BtnBox>
            <ContinueBtn
              variant="contained"
              label={CONTINUE_BTN}
              textColor={theme.palette.info.contrastText}
              onClick={handleShareHolder}
            />
          </BtnBox>
        </RootBox>
      )}
    </Box>
  )
}
export default ConfirmBusinessPartner
