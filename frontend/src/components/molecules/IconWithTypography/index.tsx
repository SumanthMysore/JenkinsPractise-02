import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Box, BoxProps, useTheme } from '@mui/material'
import Icon from '../../atoms/Icon'
import TypographyComponenet from '../../atoms/Typography'

interface IconWithTypographyProps extends BoxProps {
  src: string
  children: string
  value?: string
  optional?: string
  atCenter?: boolean
}

const StyledBox = styled(Box)({
  display: 'flex',
  textTransform: 'none',
})

const IconBox = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(3.5),
}))

const TypoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledTypo1 = styled(TypographyComponenet)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

const IconWithTypography = ({
  children,
  src,
  value,
  optional,
  atCenter,
  ...rest
}: IconWithTypographyProps) => {
  const theme = useTheme()
  return (
    <StyledBox
      {...rest}
      data-testid="icon-with-typo"
      sx={atCenter ? { alignItems: 'center' } : { alignItems: 'flex-start' }}
    >
      <IconBox>
        <Icon src={src} alt="icon" />
      </IconBox>

      <TypoBox>
        <StyledTypo1 variant="body2" color={theme.palette.text.primary}>
          {children}
        </StyledTypo1>
        <TypographyComponenet
          variant="caption"
          color={theme.palette.info.light}
        >
          {value}
        </TypographyComponenet>
        <TypographyComponenet
          variant="caption"
          color={theme.palette.info.light}
        >
          {optional}
        </TypographyComponenet>
      </TypoBox>
    </StyledBox>
  )
}

export default IconWithTypography
