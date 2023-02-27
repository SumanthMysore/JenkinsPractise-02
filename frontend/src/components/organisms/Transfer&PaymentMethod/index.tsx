import React, { useCallback } from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  Divider,
  InputAdornment,
  TextField,
  useTheme,
} from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import {
  ACC_NUM,
  ACC_TYPE,
  AMOUNT_CONV,
  AMOUNT_CONVERT,
  CANCEL_TRANSFER_BTN,
  CARD_PLACEHOLDER,
  CARD_SELECT_DATA,
  CHOOSE_TRANSFER,
  COMPLETE_BTN,
  CONFIRM_PURCHASE,
  CONTINUE_PAY_BTN,
  EMAIL_LABLE,
  EUR_VISA,
  EXPIRT_DATE,
  FEE,
  GBP_100,
  GURANTEE_RATE,
  IMAGE_ALT,
  LAST_DIGIT,
  NAME,
  NEW_CARD,
  PAY_CARD,
  PURCHASE_DETAIL,
  RECEVIED_AMOUNT,
  RECIPIENT_DETAIL,
  REC_ACC_NUM,
  REC_ACC_TYPE,
  REC_EMAIL,
  REC_NAME,
  SAVED_CARD,
  SHOULD_ARRIVE,
  STEP1,
  STEP2,
  TRANSFER_AMOUNT,
  TRANSFER_DETAIL,
  TRAN_AMT_CONV,
  TRAN_FEE,
  TRAN_RATE,
} from '../../../utils/constants'
import IconWithTypography from '../../molecules/IconWithTypography'
import card_icon_2 from '../../../../public/assets/Icons/credit-card-2.svg'
import visa_icon from '../../../../public/assets/Icons/visa.svg'
import lloyds_icon from '../../../../public/assets/Icons/lloyds.svg'
import arrowRight from '../../../../public/assets/Icons/arrowRight.svg'
import RadioComponent from '../../atoms/Radio'
import ValueConversion from '../../molecules/ValueConversionIcon'
import ReviewDetail from '../../molecules/ReviewDetails'
import ButtonComponent from '../../atoms/Button'
import IconComponent from '../../atoms/Icon'
import { Icon } from '../../atoms/Icon/index.stories'

interface TransferProps {
  handleComplete?: () => void
  handleCancelPay?: () => void
  handleBankDetail?: () => void
}
const RootBox = styled(Box)({
  display: 'flex',
})

const LeftSideBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '474px',
  minHeight: '650px',
})

const RightSideBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '474px',
  minHeight: '650px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(4),
  marginLeft: theme.spacing(6),
}))

const HeadingBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}))

const TabBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: theme.spacing(4),
}))

const SaveCardBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
}))

const NewCardBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}))

const OptionsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4),
  '&:hover': {
    backgroundColor: theme.palette.divider,
    cursor: 'pointer',
  },
}))

const CardOptionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  marginBottom: theme.spacing(5),
  paddingLeft: theme.spacing(5),
}))

const CardInput = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(10.5),
}))

const CardDetail = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(4),
}))

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(12),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
}))

const StyledReviewDetail = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}))

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(10),
}))

export const ContinueButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '218px',
  minHeight: '56px',
  marginBottom: theme.spacing(5),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
}))

export const CancelButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '218px',
  minHeight: '56px',
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

const ConfirmPurchaseBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(4),
  minWidth: '474px',
  minHeight: '395px',
}))

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '474px',
  maxHeight: '72px',
  justifyContent: 'space-between',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(8),
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const LloydBox = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.divider}`,
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: theme.spacing(8),
  marginBottom: theme.spacing(2),
}))

const VisaBox = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(8),
  width: '24px',
  height: '24px',
}))

const PurchaseDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const TypoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  maxWidth: '308px',
  marginBottom: theme.spacing(3),
}))

const ButtonBox2 = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  marginTop: theme.spacing(4.5),
}))

const CompleteButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
}))

const TransferPaymentMethod = ({
  handleComplete,
  handleCancelPay,
  handleBankDetail,
}: TransferProps) => {
  const theme = useTheme()
  const fonStyle = theme.typography.body2

  const [selectedValue, setSelectedValue] = React.useState('c')
  const [isDebit, setCard] = React.useState(false)
  const [isConfirm, setConfirmation] = React.useState(false)

  const radioHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value)
    },
    []
  )

  const cardPayHandle = useCallback(() => {
    if (selectedValue === 'a') {
      setCard(!isDebit)
      setSelectedValue('e')
    }
    selectedValue === 'e' && setConfirmation(!isConfirm)
  }, [isConfirm, isDebit, selectedValue])

  return (
    <RootBox data-testid="transfer-payment-method">
      {isConfirm ? (
        <LeftSideBox>
          <TypographyComponent
            variant="h1"
            color={theme.palette.text.primary}
            sx={{ marginBottom: theme.spacing(5) }}
          >
            {PAY_CARD}
          </TypographyComponent>
          <ConfirmPurchaseBox>
            <IconBox>
              <LloydBox>
                <Icon src={lloyds_icon} alt={IMAGE_ALT} />
              </LloydBox>
              <VisaBox sx={{ marginRight: theme.spacing(8) }}>
                <Icon src={visa_icon} alt={IMAGE_ALT} />
              </VisaBox>
            </IconBox>
            <PurchaseDetails>
              <TypographyComponent
                variant="body1"
                color={theme.palette.text.primary}
                sx={{ marginBottom: theme.spacing(2) }}
              >
                {CONFIRM_PURCHASE}
              </TypographyComponent>
              <TypoBox>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.info.main}
                >
                  <span style={{ color: theme.palette.text.primary }}>
                    {GBP_100}
                  </span>
                  {PURCHASE_DETAIL}
                  <span style={{ color: theme.palette.text.primary }}>
                    9313
                  </span>
                </TypographyComponent>
              </TypoBox>
              <TypoBox>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.info.main}
                >
                  {STEP1}
                </TypographyComponent>
              </TypoBox>
              <TypoBox>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.info.main}
                >
                  {STEP2}
                </TypographyComponent>
              </TypoBox>
              <ButtonBox2>
                <CompleteButton
                  label={COMPLETE_BTN}
                  textColor={theme.palette.info.contrastText}
                  variant="contained"
                  onClick={handleComplete}
                />
              </ButtonBox2>
            </PurchaseDetails>
          </ConfirmPurchaseBox>
        </LeftSideBox>
      ) : isDebit ? (
        <LeftSideBox>
          <HeadingBox>
            <TypographyComponent
              variant="h1"
              color={theme.palette.text.primary}
            >
              {PAY_CARD}
            </TypographyComponent>
          </HeadingBox>
          <TabBox>
            <SaveCardBox>
              <TypographyComponent
                variant="subtitle1"
                color={theme.palette.primary.main}
              >
                {SAVED_CARD}
              </TypographyComponent>
            </SaveCardBox>

            <NewCardBox>
              <TypographyComponent
                variant="subtitle1"
                color={theme.palette.info.main}
              >
                {NEW_CARD}
              </TypographyComponent>
            </NewCardBox>
          </TabBox>
          <Divider sx={{ marginBottom: theme.spacing(10.75) }} />
          <CardOptionBox>
            <RadioComponent
              checked={selectedValue === 'e'}
              value="e"
              handleChange={radioHandle}
            />
            <CardInput>
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.primary}
              >
                {EUR_VISA}
              </TypographyComponent>
              <CardDetail>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.info.main}
                >
                  {LAST_DIGIT}
                </TypographyComponent>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.text.primary}
                  sx={{
                    marginRight: theme.spacing(1),
                    marginLeft: theme.spacing(1),
                  }}
                >
                  9313
                </TypographyComponent>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.info.main}
                >
                  {EXPIRT_DATE}
                </TypographyComponent>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.text.primary}
                  sx={{ marginLeft: theme.spacing(1) }}
                >
                  09/25
                </TypographyComponent>
              </CardDetail>
              <TextField
                placeholder={CARD_PLACEHOLDER}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconComponent src={card_icon_2} alt={IMAGE_ALT} />
                    </InputAdornment>
                  ),
                  style: { ...fonStyle },
                }}
              />
            </CardInput>
          </CardOptionBox>
          <CardOptionBox>
            <RadioComponent
              value="f"
              handleChange={radioHandle}
              checked={selectedValue === 'f'}
            />
            <CardInput>
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.primary}
              >
                {EUR_VISA}
              </TypographyComponent>
              <CardDetail>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.info.main}
                >
                  {LAST_DIGIT}
                </TypographyComponent>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.text.primary}
                  sx={{
                    marginRight: theme.spacing(1),
                    marginLeft: theme.spacing(1),
                  }}
                >
                  3253
                </TypographyComponent>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.info.main}
                >
                  {EXPIRT_DATE}
                </TypographyComponent>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.text.primary}
                  sx={{ marginLeft: theme.spacing(1) }}
                >
                  02/27
                </TypographyComponent>
              </CardDetail>
              <TextField
                placeholder={CARD_PLACEHOLDER}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconComponent src={card_icon_2} alt={IMAGE_ALT} />
                    </InputAdornment>
                  ),
                  style: { ...fonStyle },
                }}
              />
            </CardInput>
          </CardOptionBox>
        </LeftSideBox>
      ) : (
        <LeftSideBox>
          <HeadingBox>
            <TypographyComponent
              variant="h1"
              color={theme.palette.text.primary}
            >
              {CHOOSE_TRANSFER}
            </TypographyComponent>
          </HeadingBox>

          {CARD_SELECT_DATA.map((data) => (
            <>
              <TypographyComponent
                variant="caption"
                color={theme.palette.info.main}
                sx={{ marginBottom: theme.spacing(3) }}
              >
                {data.typo}
              </TypographyComponent>
              <OptionsBox key={data.val}>
                <IconWithTypography
                  optional={SHOULD_ARRIVE}
                  src={data.icon}
                  value={data.value}
                  atCenter={true}
                >
                  {data.text}
                </IconWithTypography>
                <RadioComponent
                  handleChange={radioHandle}
                  checked={selectedValue === data.val}
                  value={data.val}
                />
              </OptionsBox>
            </>
          ))}
        </LeftSideBox>
      )}

      <RightSideBox>
        <StyledBox>
          <TypographyComponent
            variant="caption"
            color={theme.palette.info.light}
          >
            {TRANSFER_DETAIL}
          </TypographyComponent>
          <Box sx={{ marginTop: theme.spacing(4) }}>
            <ValueConversion
              transferedAmount={TRANSFER_AMOUNT}
              receivedAmount={RECEVIED_AMOUNT}
              logo={arrowRight}
              name={AMOUNT_CONV}
            />
          </Box>
          <StyledReviewDetail>
            <ReviewDetail title={FEE + ':'} value={TRAN_FEE} />
          </StyledReviewDetail>
          <StyledReviewDetail>
            <ReviewDetail title={AMOUNT_CONVERT + ':'} value={TRAN_AMT_CONV} />
          </StyledReviewDetail>
          <StyledReviewDetail sx={{ marginBottom: theme.spacing(10) }}>
            <ReviewDetail title={GURANTEE_RATE + ':'} value={TRAN_RATE} />
          </StyledReviewDetail>

          <TypographyComponent
            variant="caption"
            color={theme.palette.info.light}
          >
            {RECIPIENT_DETAIL}
          </TypographyComponent>
          <StyledReviewDetail>
            <ReviewDetail title={NAME + ':'} value={REC_NAME} />
          </StyledReviewDetail>
          <StyledReviewDetail>
            <ReviewDetail title={EMAIL_LABLE + ':'} value={REC_EMAIL} />
          </StyledReviewDetail>
          <StyledReviewDetail>
            <ReviewDetail title={ACC_NUM + ':'} value={REC_ACC_NUM} />
          </StyledReviewDetail>
          <StyledReviewDetail>
            <ReviewDetail title={ACC_TYPE + ':'} value={REC_ACC_TYPE} />
          </StyledReviewDetail>
          {!isConfirm && (
            <ButtonBox>
              <ContinueButton
                textColor={theme.palette.info.contrastText}
                variant="contained"
                label={CONTINUE_PAY_BTN}
                onClick={
                  selectedValue === 'c' ? handleBankDetail : cardPayHandle
                }
              />
              <CancelButton
                textColor={theme.palette.primary.main}
                variant="outlined"
                label={CANCEL_TRANSFER_BTN}
                onClick={handleCancelPay}
              />
            </ButtonBox>
          )}
        </StyledBox>
      </RightSideBox>
    </RootBox>
  )
}
export default TransferPaymentMethod
