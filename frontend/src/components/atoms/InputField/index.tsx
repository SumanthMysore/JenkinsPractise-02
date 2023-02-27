import React, { useCallback, useState } from 'react'
import { StandardTextFieldProps } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import TypographyComponent from '../Typography'
import { StyledTextField } from '../Password'

interface TextFieldProps extends StandardTextFieldProps {
  placeholder: string
  label: string
  value?: string
  submittedText?: string
}

const TextFieldComponent = ({
  placeholder,
  label,
  value,
  onChange,
  submittedText,
}: TextFieldProps) => {
  const [labelText, setLabelText] = useState<string>('')

  const inputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value === '') {
        setLabelText('')
      }
      onChange !== undefined && onChange(event)
    },
    [onChange]
  )
  const inputFocus = useCallback(() => setLabelText(label), [label])
  const inputBlur = useCallback(() => setLabelText(''), [])

  return (
    <FormControl variant="outlined" fullWidth>
      <StyledTextField
        data-testid="inputText"
        placeholder={placeholder}
        label={labelText}
        defaultValue={value}
        onChange={inputChange}
        onFocus={inputFocus}
        onBlur={inputBlur}
        value={submittedText}
      >
        <TypographyComponent variant="body2">{placeholder}</TypographyComponent>
      </StyledTextField>
    </FormControl>
  )
}

export default TextFieldComponent
