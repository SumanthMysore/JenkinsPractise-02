import React from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import { DropdownDataDetails } from '../../../utils/type'
import IconComponent from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'

interface DropdownDataProps {
  icon: DropdownDataDetails
}
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
}))

const ValueGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledIconComponent = styled(IconComponent)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
}))

const StyledTypographyComponent = styled(TypographyComponent)(({ theme }) => ({
  marginLeft: theme.spacing(6),
}))

const DropdownData = ({ icon }: DropdownDataProps) => {
  const theme = useTheme()
  return (
    <StyledGrid container data-testid="dropdown-data">
      <>
        <StyledGrid key={icon.name}>
          {icon.image && (
            <StyledIconComponent src={icon.image} alt={icon.name} />
          )}

          <ValueGrid>
            <StyledTypographyComponent
              variant="body2"
              color={theme.palette.text.primary}
            >
              {icon.name}
            </StyledTypographyComponent>

            <StyledTypographyComponent
              variant="caption"
              color={theme.palette.info.light}
            >
              {icon.value}
            </StyledTypographyComponent>
          </ValueGrid>
        </StyledGrid>

        <TypographyComponent variant="body2" color={theme.palette.info.main}>
          {icon.currency}
        </TypographyComponent>
      </>
    </StyledGrid>
  )
}

export default DropdownData
