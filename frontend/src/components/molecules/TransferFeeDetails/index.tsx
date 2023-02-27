import React from 'react'
import { Divider, Grid, styled } from '@mui/material'
import theme from '../../../theme/theme'
import TypographyComponent from '../../atoms/Typography'
import { Box } from '@mui/system'
import IconComponent from '../../atoms/Icon'

interface TransferFeeComponentProps {
  title: string
  value: string
  from?: string
  icon: string
  valueColor?: string
  handleIcon?: () => void
}
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '512px',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}))

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

const StyledDivider = styled(Divider)(({ theme }) => ({
  minWidth: '30%',
  maxWidth: '245px',
  display: 'flex',
  flexGrow: 2,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}))

const TransferFeeComponent = ({
  title,
  value,
  from,
  icon,
  valueColor,
  handleIcon,
}: TransferFeeComponentProps) => {
  return (
    <StyledGrid>
      <TypographyComponent variant="subtitle1" color={theme.palette.info.light}>
        {title}
      </TypographyComponent>
      <StyledDivider />
      <StyledBox>
        <TypographyComponent
          variant="subtitle1"
          color={valueColor}
          sx={{ marginRight: theme.spacing(1) }}
        >
          {from} {value}
        </TypographyComponent>
        <IconComponent src={icon} alt="info icon" handleIcon={handleIcon} />
      </StyledBox>
    </StyledGrid>
  )
}

export default TransferFeeComponent
