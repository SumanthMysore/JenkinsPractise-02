import { StandardTextFieldProps, styled, TextField } from '@mui/material'

interface TextAreaComponentProps extends StandardTextFieldProps {
  label: string
  helperText: string
  value: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInputField = styled(TextField)(({ theme }) => ({
  fontVariant: 'body2',
  borderRadius: theme.spacing(2),

  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.divider} !important`,
    borderRadius: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    ...theme.typography.body2,
    color: theme.palette.text.primary,
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
}))

const TextAreaComponent = ({
  value,
  label,
  helperText,
  handleChange,
  ...testAreaProps
}: TextAreaComponentProps) => {
  return (
    <StyledInputField
      {...testAreaProps}
      data-testid="textArea"
      label={label}
      multiline
      minRows={3}
      maxRows={4}
      placeholder={helperText}
      defaultValue={value}
      onChange={handleChange}
    />
  )
}

export default TextAreaComponent
