import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, BoxProps, Dialog, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import { NO_BTN, YES_BTN } from '../../../utils/constants'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(4),
  minWidth: '564px',
  minHeight: '335px',
  flexDirection: 'column',
  alignItems: 'center',
}))

const ButtonBox = styled(Box)({
  display: 'flex',
})

const YesButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginRight: theme.spacing(5),
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))

const NoButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.light}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    border: 'none',
  },
  border: 'none',
}))

const QuestionTypography = styled(TypographyComponent)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(6.5),
  marginTop: theme.spacing(13),
}))

const ValueTypography = styled(TypographyComponent)(({ theme }) => ({
  color: theme.palette.info.main,
  marginBottom: theme.spacing(26.25),
}))

interface CancelTransactionPopupProps extends BoxProps {
  question: string
  value: string
  isOpen: boolean
  handleYes?: () => void
  handleNo?: () => void
}

const CancelTransactionPopup = ({
  question,
  value,
  isOpen,
  handleYes,
  handleNo,
}: CancelTransactionPopupProps) => {
  const theme = useTheme()
  return (
    <Box data-testid="search-field-footer">
      <Dialog open={isOpen}>
        <StyledBox>
          <QuestionTypography variant="h1">{question}</QuestionTypography>
          <ValueTypography variant="body1">{value}</ValueTypography>
          <ButtonBox>
            <YesButton
              label={YES_BTN}
              textColor={theme.palette.info.contrastText}
              variant="contained"
              onClick={handleYes}
            />
            <NoButton
              label={NO_BTN}
              textColor={theme.palette.primary.main}
              variant="outlined"
              onClick={handleNo}
            />
          </ButtonBox>
        </StyledBox>
      </Dialog>
    </Box>
  )
}
export default CancelTransactionPopup
