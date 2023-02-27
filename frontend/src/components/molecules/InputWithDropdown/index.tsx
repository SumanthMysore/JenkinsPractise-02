import * as React from 'react'
import {
  Divider,
  FormControl,
  InputAdornment,
  TextField,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { COUNTRYREGISTRATION } from '../../../utils/constants'
import DropDown from '../Dropdown'
import { useCallback, useState } from 'react'

interface DropdownProps {
  placeholder: string
  isCurrency: boolean
  mobileNumber?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  amount?: string
  handleValue?: (event: number) => void
  defaultValue?: number
}

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: theme.spacing(7),
  m: theme.spacing(0.125),
  marginLeft: theme.spacing(2),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    ...theme.typography.caption,
    color: `${theme.palette.info.light} !important`,
  },
  '& .MuiOutlinedInput-root': {
    ...theme.typography.caption,
  },
  '& .MuiInputBase-input': {
    ...theme.typography.body2,
  },
}))

const InputWithDropdown = ({
  placeholder,
  isCurrency,
  mobileNumber,
  handleChange,
  value,
  handleValue,
  amount,
  defaultValue,
}: DropdownProps) => {
  const [anchorEl, setAnchorEl] = useState()
  const theme = useTheme()
  const handleTextField = useCallback(
    (event: any) => setAnchorEl(event?.currentTarget),
    [anchorEl]
  )
  return (
    <FormControl fullWidth data-testid="input-with-dropdown">
      {isCurrency ? (
        <StyledTextField
          fullWidth
          id="outlined-select-currency"
          label={placeholder}
          placeholder={placeholder}
          onChange={handleChange}
          onClick={handleTextField}
          value={amount !== undefined && parseInt(amount) === 0 ? '' : amount}
          InputProps={{
            type: 'search',
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  color: 'inherit !important',
                  minWidth: '120px',
                  marginTop: theme.spacing(2),
                  ...theme.typography.body2,
                }}
              >
                <DropDown
                  placeholder={value}
                  handleValue={handleValue}
                  data={[]}
                  currencyData={COUNTRYREGISTRATION}
                  isCurrency={true}
                  label={placeholder}
                  isLabelText={false}
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                  defaultValue={defaultValue}
                />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <StyledTextField
          fullWidth
          label={placeholder}
          defaultValue={mobileNumber}
          onChange={handleChange}
          onClick={handleTextField}
          InputProps={{
            type: 'search',
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  marginTop: theme.spacing(2),
                  color: 'inherit !important',
                  minWidth: '68px !important',
                  ...theme.typography.body2,
                }}
              >
                <DropDown
                  placeholder={placeholder}
                  data={[]}
                  handleValue={handleValue}
                  currencyData={COUNTRYREGISTRATION}
                  isCurrency={false}
                  label={placeholder}
                  isLabelText={false}
                  defaultValue={defaultValue}
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                />
                <StyledDivider orientation="vertical" />
              </InputAdornment>
            ),
          }}
        />
      )}
    </FormControl>
  )
}
export default InputWithDropdown
