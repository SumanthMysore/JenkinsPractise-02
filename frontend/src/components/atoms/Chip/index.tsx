import React from 'react'
import { Chip, ChipProps } from '@mui/material'
import { styled } from '@mui/material/styles'

interface IChipProps extends ChipProps {
  label: string
}

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: '63px',
  height: '26px',
  border: 'none',
  '& .MuiChip-label': {
    ...theme.typography.caption,
  },
}))

const ChipComponent = ({ label, ...rest }: IChipProps) => {
  return (
    <StyledChip
      data-testid="chip"
      label={label}
      color="primary"
      {...rest}
      variant="outlined"
    />
  )
}

export default ChipComponent
