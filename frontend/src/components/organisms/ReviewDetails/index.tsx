import React, { useCallback, useState } from 'react'
import { Grid, styled, TextField, useTheme } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import HeaderWithLink from '../../molecules/HeaderWithLink'
import ValueConversion from '../../molecules/ValueConversionIcon'
import arrowRight from '../../../../public/assets/Icons/arrowRight.svg'
import ReviewDetail from '../../molecules/ReviewDetails'
import {
  REVIEW_HEADER,
  TRANSFER_DETAILS,
  FEE_AMOUNT,
  AMOUNT_CONVERSION,
  RATE,
  RECIPIENT_ACCOUNT_NUMBER,
  RECIPIENT_ACCOUNT_TYPE,
  RECIPIENT_DETAILS,
  RECIPIENT_EMAIL,
  RECIPIENT_NAME,
  SCHEDULE_DETAILS,
  SENDING,
  NOW,
  EDIT,
  CHANGE,
  ARROW_ALT,
  EMPTYSTRING,
  AMOUNT_CONVERT,
  FEE,
  GURANTEE_RATE,
  AMOUNT,
  NAME,
  ACC_NUM,
  ACC_TYPE,
  EMAIL_LABLE,
  CANCEL_BTN,
  SAVE_BTN,
  DESCRIPTION,
  ARRIVAL,
  ARRIVAL_DATE,
  REPEATS,
  REPEAT_VALUE,
  REVIEW_BUTTON,
} from '../../../utils/constants'
import ButtonComponent from '../../atoms/Button'

interface ReviewDetailsProps {
  transferedAmount: string
  receivedAmount: string
  fee: string
  amountConvert: string
  rate: string
  name: string
  email: string
  accountNumber: string
  accountType: string
  handleReview?: () => void
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '516px',
})

const ParentGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  minWidth: '516px',
}))

const ChildGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  minWidth: '516px',
}))

const StyledPuposeGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}))

const HeaderGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}))

const PurposeGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const PurposeGridValue = styled(Grid)({
  minWidth: '277px',
})

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: theme.palette.info.light,
  },
}))

const StyledContainerGrid = styled(Grid)({
  maxWidth: '516px',
})

const StyledButtonGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  maxWidth: '651px',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}))

const StyledSaveButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
}))

const StyledCancelButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  marginRight: theme.spacing(5),
  border: 'none',
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.light}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    border: 'none',
  },
}))

const ReviewDetails = (props: ReviewDetailsProps) => {
  const {
    transferedAmount,
    receivedAmount,
    fee,
    amountConvert,
    rate,
    name,
    email,
    accountNumber,
    accountType,
    handleReview,
  } = props

  const [transferDetails, setTransferDetails] = useState<boolean>(false)
  const [businessDetails, setBusinessDetails] = useState<boolean>(false)

  const handleTransferDetails = useCallback(() => {
    setTransferDetails(!transferDetails)
  }, [])

  const handleCancelTransferDetails = useCallback(() => {
    setTransferDetails(false)
  }, [])

  const handleSaveTransferDetails = useCallback(() => {
    setTransferDetails(false)
  }, [])

  const handleBusinessDetails = useCallback(() => {
    setBusinessDetails(!businessDetails)
  }, [])

  const handleSaveBusinessDetails = useCallback(() => {
    setBusinessDetails(false)
  }, [])

  const handleCancelBusinessDetails = useCallback(() => {
    setBusinessDetails(false)
  }, [])

  const theme = useTheme()

  return (
    <StyledGrid data-testid="review-details">
      <ParentGrid>
        <PurposeDetailsComponent
          title={REVIEW_HEADER[0]}
          value={REVIEW_HEADER[1]}
        />
      </ParentGrid>

      {!transferDetails && !businessDetails && (
        <StyledContainerGrid>
          <ParentGrid>
            <HeaderGrid>
              <HeaderWithLink
                title={TRANSFER_DETAILS}
                value={EDIT}
                handleData={handleTransferDetails}
              />
            </HeaderGrid>
            <ChildGrid>
              <ValueConversion
                transferedAmount={transferedAmount}
                receivedAmount={receivedAmount}
                logo={arrowRight}
                name={ARROW_ALT}
              />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail title={FEE_AMOUNT} value={fee} />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail title={AMOUNT_CONVERSION} value={amountConvert} />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail title={RATE} value={rate} />
            </ChildGrid>
          </ParentGrid>
          <ParentGrid>
            <HeaderGrid>
              <HeaderWithLink
                title={RECIPIENT_DETAILS}
                value={CHANGE}
                handleData={handleBusinessDetails}
              />
            </HeaderGrid>
            <ChildGrid>
              <ReviewDetail title={RECIPIENT_NAME} value={name} />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail title={RECIPIENT_EMAIL} value={email} />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail
                title={RECIPIENT_ACCOUNT_NUMBER}
                value={accountNumber}
              />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail
                title={RECIPIENT_ACCOUNT_TYPE}
                value={accountType}
              />
            </ChildGrid>
          </ParentGrid>
          <ParentGrid>
            <HeaderGrid>
              <HeaderWithLink title={SCHEDULE_DETAILS} value={EDIT} />
            </HeaderGrid>
            <ChildGrid>
              <ReviewDetail title={SENDING} value={NOW} />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail title={ARRIVAL} value={ARRIVAL_DATE} />
            </ChildGrid>
            <ChildGrid>
              <ReviewDetail title={REPEATS} value={REPEAT_VALUE} />
            </ChildGrid>
          </ParentGrid>
          <PurposeGrid>
            <PurposeGridValue>
              <StyledPuposeGrid>
                {DESCRIPTION.split('\n').map((i) => (
                  <PurposeDetailsComponent
                    title={EMPTYSTRING}
                    value={i}
                    key={i}
                  />
                ))}
              </StyledPuposeGrid>
              <StyledPuposeGrid>
                <StyledSaveButton
                  label={REVIEW_BUTTON}
                  textColor={theme.palette.info.contrastText}
                  variant="contained"
                  onClick={handleReview}
                />
              </StyledPuposeGrid>
            </PurposeGridValue>
          </PurposeGrid>
        </StyledContainerGrid>
      )}

      {transferDetails && (
        <Grid data-testid="transfer-details">
          <StyledContainerGrid>
            <ParentGrid>
              <HeaderWithLink title={TRANSFER_DETAILS} value={EMPTYSTRING} />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField
                fullWidth
                label={AMOUNT}
                defaultValue={receivedAmount}
              />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField
                fullWidth
                disabled
                label={FEE}
                defaultValue={fee}
              />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField
                fullWidth
                disabled
                label={AMOUNT_CONVERT}
                defaultValue={amountConvert}
              />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField
                fullWidth
                disabled
                label={GURANTEE_RATE}
                defaultValue={rate}
              />
            </ParentGrid>
          </StyledContainerGrid>

          <StyledButtonGrid>
            <StyledCancelButton
              label={CANCEL_BTN}
              textColor={theme.palette.primary.main}
              variant="outlined"
              onClick={handleCancelTransferDetails}
            />
            <StyledSaveButton
              label={SAVE_BTN}
              textColor={theme.palette.info.contrastText}
              variant="contained"
              onClick={handleSaveTransferDetails}
            />
          </StyledButtonGrid>
        </Grid>
      )}

      {businessDetails && (
        <Grid data-testid="business-details">
          <StyledContainerGrid>
            <ParentGrid>
              <HeaderWithLink title={RECIPIENT_DETAILS} value={EMPTYSTRING} />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField fullWidth label={NAME} defaultValue={name} />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField
                fullWidth
                label={EMAIL_LABLE}
                defaultValue={email}
              />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField
                fullWidth
                label={ACC_NUM}
                defaultValue={accountNumber}
              />
            </ParentGrid>
            <ParentGrid>
              <StyledTextField
                fullWidth
                label={ACC_TYPE}
                defaultValue={accountType}
              />
            </ParentGrid>
          </StyledContainerGrid>
          <StyledButtonGrid>
            <StyledCancelButton
              label={CANCEL_BTN}
              textColor={theme.palette.primary.main}
              variant="outlined"
              onClick={handleCancelBusinessDetails}
            />
            <StyledSaveButton
              label={SAVE_BTN}
              textColor={theme.palette.info.contrastText}
              variant="contained"
              onClick={handleSaveBusinessDetails}
            />
          </StyledButtonGrid>
        </Grid>
      )}
    </StyledGrid>
  )
}

export default ReviewDetails
