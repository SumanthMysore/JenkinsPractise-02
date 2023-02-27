import React, { useCallback } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material/styles'
import IconComponent from '../Icon'
import calendar from '../../../../public/assets/Icons/calendar.svg'
import calendar_light from '../../../../public/assets/Icons/calendar_light.svg'
import { IconButton, InputAdornment, useTheme } from '@mui/material'
import { Dayjs } from 'dayjs'
import { IMAGE_ALT } from '../../../utils/constants'

interface DateProps {
  label: string
}

const StyledDatePicker = styled(TextField)(({ theme }) => ({
  ...theme.typography.body2,
  minWidth: '516px',
}))

const DatePickerComponent = ({ label }: DateProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<Dayjs | null>(null)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleChange = useCallback((newValue: Dayjs | null) => {
    setValue(newValue)
    setOpen((prevState) => !prevState)
  }, [])

  const openCalendar = useCallback((event: any) => {
    setOpen((prevState) => !prevState)
    setAnchorEl(event.currentTarget)
  }, [])

  const theme = useTheme()

  const handleRenderInput = useCallback(
    (params: any) => {
      return (
        <StyledDatePicker
          {...params}
          InputLabelProps={{
            style: {
              color: theme.palette.info.light,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={openCalendar}>
                  {open || value !== null ? (
                    <IconComponent src={calendar} alt={IMAGE_ALT} />
                  ) : (
                    <IconComponent src={calendar_light} alt={IMAGE_ALT} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )
    },
    [open, openCalendar, theme.palette.info.light, value]
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleChange}
        open={open}
        inputFormat="DD-MM-YYYY"
        renderInput={handleRenderInput}
        PopperProps={{
          anchorEl: anchorEl,
          placement: 'bottom-end',
          sx: {
            marginTop: theme.spacing(5),
          },
        }}
      />
    </LocalizationProvider>
  )
}
export default DatePickerComponent
