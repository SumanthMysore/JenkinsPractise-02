import { Box, Dialog, styled, useTheme } from '@mui/material'
import {
  ACCOUNT_OPTION_PLACEHOLDER,
  ACCOUNT_SELECTION_PLACEHOLDER,
  CANCEL_TRANSFER_BTN_2,
  CANCEL_TRANSFER_ID,
  EMPTYSTRING,
  REFUND_MONEY,
  SELECTACCOUNT,
  SELECTACCOUNTOPTION,
} from '../../../utils/constants'
import { ButtonBox, ContinueButton } from '../Transfer&PaymentMethod'
import TypographyComponent from '../../atoms/Typography'
import Dropdown from '../../molecules/Dropdown'
import { useCallback, useState } from 'react'

interface CancelTransferDropdownProps {
  isOpen: boolean
  handleDialogClose?: () => void
  handleClick?: () => void
}

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(4),
  minWidth: '564px',
  minHeight: '335px',
  backgroundColor: theme.palette.info.contrastText,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(6),
  marginTop: theme.spacing(6),
}))

const HeadingBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}))

const SelectionBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginRight: theme.spacing(6),

  '& .MuiInputBase-input': {
    ...theme.typography.body2,
  },
}))

const OptionSelect = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(6),
  marginTop: theme.spacing(8),
  '& .MuiInputBase-input': {
    ...theme.typography.body2,
  },
}))

const CancelTransferDropdown = ({
  isOpen,
  handleDialogClose,
  handleClick,
}: CancelTransferDropdownProps) => {
  const theme = useTheme()
  const [isOption, setOption] = useState(false)
  const [isBtn, setBtn] = useState(false)

  const optionEnabled = useCallback(() => setOption(true), [])
  const enableButton = useCallback(() => setBtn(true), [])

  return (
    <Box data-testid="cancel-transfer-dropdown">
      <Dialog open={isOpen} onClose={handleDialogClose}>
        <StyledBox>
          <HeadingBox>
            <TypographyComponent
              variant="body1"
              color={theme.palette.text.primary}
            >
              {CANCEL_TRANSFER_ID}
            </TypographyComponent>
          </HeadingBox>

          <TypographyComponent
            variant="caption"
            color={theme.palette.info.main}
          >
            {REFUND_MONEY}
          </TypographyComponent>
          <SelectionBox
            onClick={optionEnabled}
            data-testid="select-account-box"
          >
            <Dropdown
              placeholder={ACCOUNT_SELECTION_PLACEHOLDER}
              data={SELECTACCOUNT}
              currencyData={[]}
              isCurrency={false}
              label={EMPTYSTRING}
              isLabelText={true}
            />
          </SelectionBox>

          <OptionSelect onClick={enableButton} data-testid="select-option-box">
            {isOption && (
              <Dropdown
                placeholder={ACCOUNT_OPTION_PLACEHOLDER}
                data={SELECTACCOUNTOPTION}
                currencyData={[]}
                isCurrency={false}
                label={ACCOUNT_OPTION_PLACEHOLDER}
                isLabelText={true}
                isCard={true}
              />
            )}
          </OptionSelect>
          {isBtn && (
            <ButtonBox>
              <ContinueButton
                textColor={theme.palette.info.contrastText}
                variant="contained"
                label={CANCEL_TRANSFER_BTN_2}
                sx={{ marginBottom: theme.spacing(6) }}
                onClick={handleClick}
              />
            </ButtonBox>
          )}
        </StyledBox>
      </Dialog>
    </Box>
  )
}

export default CancelTransferDropdown
