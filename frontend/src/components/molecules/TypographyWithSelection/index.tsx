import React from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import RadioComponent from '../../atoms/Radio'
import TypographyComponent from '../../atoms/Typography'

interface TypographyWithSelectionProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  data: string
  header: string
  value?: string | number
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: theme.spacing(10),
}))

const StyledTypographyComponent = styled(TypographyComponent)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))

const ParentGrid = styled(Grid)(({ theme }) => ({
  minWidth: theme.spacing(104),
  minHeight: theme.spacing(18),
  marginLeft: theme.spacing(8),
}))

const TypographyWithSelection = ({
  handleChange,
  checked,
  data,
  header,
  value,
}: TypographyWithSelectionProps) => {
  const theme = useTheme()
  return (
    <StyledGrid data-testid="typography-selection">
      <RadioComponent
        checked={checked}
        handleChange={handleChange}
        value={value}
      />
      <ParentGrid>
        <StyledTypographyComponent
          variant="body2"
          color={theme.palette.info.main}
        >
          {header}
        </StyledTypographyComponent>
        <TypographyComponent variant="body2" color={theme.palette.text.primary}>
          {data}
        </TypographyComponent>
      </ParentGrid>
    </StyledGrid>
  )
}

export default TypographyWithSelection
