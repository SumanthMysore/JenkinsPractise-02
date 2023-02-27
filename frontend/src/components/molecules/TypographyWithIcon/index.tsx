import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'
import Icon from '../../atoms/Icon'
import TypographyComponenet from '../../atoms/Typography'

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  cursor: 'pointer',
})

const StyledBox2 = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const IconBox = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(3.5),
}))

const TypoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledTypo1 = styled(TypographyComponenet)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}))

interface TypographyWithIconProps extends BoxProps {
  src?: string
  arrow: string
  children: string
}

const TypographyWithIcon = ({
  children,
  src,
  arrow,
  ...rest
}: TypographyWithIconProps) => {
  return (
    <StyledBox {...rest} data-testid="typo-with-icon">
      <StyledBox2>
        <IconBox>{src && <Icon src={src} alt="bank-icon" />} </IconBox>

        <TypoBox>
          <StyledTypo1 variant="caption">{children}</StyledTypo1>
        </TypoBox>
      </StyledBox2>

      <Icon src={arrow} alt="arrow-icon" />
    </StyledBox>
  )
}

export default TypographyWithIcon
