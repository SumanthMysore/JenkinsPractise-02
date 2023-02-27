import React, { useCallback, useState } from 'react'
import { StandardTextFieldProps, styled, TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import eye from '../../../../public/assets/Icons/eye.svg'
import eyeOff from '../../../../public/assets/Icons/eye-off.svg'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TypographyComponent from '../Typography'
import IconComponent from '../Icon'

interface PasswordFieldProps extends StandardTextFieldProps {
  placeHolder: string
  fieldName: string
  value?: string
  isLogin?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const StyledTextField = styled(TextField)(({ theme }) => ({
  overflowWrap: 'normal',
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.divider} !important`,
    borderRadius: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    ...theme.typography.body2,
    color: theme.palette.text.primary,
  },

  '& .MuiOutlinedInput-input': {
    padding: 0,
  },
  '& .MuiOutlinedInput-root': {
    padding: '20px 21px 16px 18px',
    ...theme.typography.caption,
  },
  '& .MuiFormLabel-root': {
    ...theme.typography.caption,
    marginTop: theme.spacing(1),
    color: `${theme.palette.info.light} !important`,
  },
  '& .Mui-focused': {
    color: `${theme.palette.primary.main} !important`,
    borderRadius: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.primary.main} !important`,
  },
  '& .MuiInputLabel-shrink': {
    color: `${theme.palette.info.main}`,
    ...theme.typography.caption,
    marginTop: '2px',
    border: 'none !important',
  },
}))

const PasswordFieldComponent = ({
  placeHolder,
  fieldName,
  value,
  isLogin,
  onChange
}: PasswordFieldProps) => {
  const [password, showPassword] = useState<boolean>(false)
  const [label, setLabelName] = useState<string>('')
  const [icon, setIcon] = useState<boolean>(!isLogin)

  const handlePassword = useCallback(() => {
    showPassword(!password)
  }, [password])

  const handleFocus = useCallback(() => {
    isLogin && setIcon(true)
  }, [isLogin])

  return (
    <FormControl variant="outlined" fullWidth>
      <StyledTextField
        data-testid="outlined-adornment-password"
        placeholder={placeHolder}
        label={label}
        defaultValue={value}
        onFocus={handleFocus}
        type={password ? 'text' : 'password'}
        onChange={onChange}
        InputProps={{
          onClick: () => {
            setLabelName(fieldName)
          },
          endAdornment: icon && (
            <InputAdornment position="end">
              <IconButton
                onClick={handlePassword}
                edge="end"
                data-testid="visibility"
              >
                {password ? (
                  <IconComponent src={eye} alt="Visible" />
                ) : (
                  <IconComponent src={eyeOff} alt="Invisible" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        <TypographyComponent variant="body1">{placeHolder}</TypographyComponent>
      </StyledTextField>
    </FormControl>
  )
}

export default PasswordFieldComponent
