import { styled } from '@mui/material/styles'
import { Box, useTheme } from '@mui/material'
import ButtonComponent from '../../atoms/Button'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import {
  CONTINUE_BTN,
  USER_DETAILS_LABEL,
  USER_DETAILS_HEADING,
  DOB_LABLE,
  COUNTRY_DROPDOWN_LABEL,
  COUNTRY_DATA,
  USER_DETAILS_DATA,
  USER_NAME_DATA,
} from '../../../utils/constants'
import TextFieldComponent from '../../atoms/InputField'
import DatePickerComponent from '../../atoms/DatePicker'
import Dropdown from '../../molecules/Dropdown'

interface UserDetailsProps {
  handleUserDetail?: () => void
}

const RootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(80),
  maxWidth: '665px',
}))

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
})

const InputFieldBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  '& .MuiInputBase-input': {
    minWidth: '516px',
  },
}))

const StyledBtnBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  minWidth: '651px',
})

const StyledContinueBtn = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))
const StyledDropdown = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  '& .MuiInputLabel-root': {
    color: theme.palette.info.light,
  },
}))
const StyledDatePickerBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.divider} !important`,
  },
  '& .MuiIconButton-root': {
    color: theme.palette.info.light,
  },
}))

const UserDetails = ({ handleUserDetail }: UserDetailsProps) => {
  const theme = useTheme()

  return (
    <RootBox data-testid="user-details">
      <StyledBox>
        <PurposeDetailsComponent
          title={USER_DETAILS_HEADING}
          value={USER_DETAILS_LABEL}
        />
      </StyledBox>

      <StyledBox>
        {USER_NAME_DATA.map((details) => (
          <InputFieldBox key={details.name}>
            <TextFieldComponent
              placeholder={details.name}
              label={details.name}
            />
          </InputFieldBox>
        ))}

        <StyledDatePickerBox>
          <DatePickerComponent label={DOB_LABLE} />
        </StyledDatePickerBox>

        <StyledDropdown>
          <Dropdown
            placeholder={COUNTRY_DROPDOWN_LABEL}
            data={COUNTRY_DATA}
            currencyData={[]}
            isCurrency={false}
            label={COUNTRY_DROPDOWN_LABEL}
            isLabelText={true}
          />
        </StyledDropdown>

        {USER_DETAILS_DATA.map((details) => (
          <InputFieldBox key={details.name}>
            <TextFieldComponent
              placeholder={details.name}
              label={details.name}
            />
          </InputFieldBox>
        ))}
      </StyledBox>

      <StyledBtnBox>
        <StyledContinueBtn
          variant="contained"
          label={CONTINUE_BTN}
          textColor={theme.palette.info.contrastText}
          onClick={handleUserDetail}
        />
      </StyledBtnBox>
    </RootBox>
  )
}
export default UserDetails
