import React from 'react'
import { Radio, RadioProps } from '@mui/material'

interface RadioComponentProps extends RadioProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  value?: string | number
}
const RadioComponent = ({
  handleChange,
  checked,
  value,
}: RadioComponentProps) => {
  return (
    <Radio
      data-testid="radio"
      onChange={handleChange}
      checked={checked}
      value={value}
      sx={{
        '& .MuiSvgIcon-root': {
          fontSize: 20,
        },
      }}
    ></Radio>
  )
}

export default RadioComponent
