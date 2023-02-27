import React, { useCallback, useState } from 'react'
import { Grid, styled } from '@mui/material'
import ButtonComponent from '../../components/atoms/Button'
import CurrencyConversion from '../../components/organisms/CurrencyConversion'
import BasicTemplate from '../../components/templates/BasicTemplate'
import theme from '../../theme/theme'
import {
  BUTTONS,
  EMPTYSTRING,
  PURPOSEOFPOCKETPAY,
  PURPOSE_DETAIL,
  TRANSACTION_SELECT_DATA,
  TRANSACTION_SELECT_TITLE,
  TRANSFER_AMOUNT_STEPPER_DATA,
} from '../../utils/constants'
import CategorySelection from '../../components/organisms/CategorySelection'
import BenificiaryDetails from '../../components/organisms/BenificiaryDetails'
import DropDown from '../../components/molecules/Dropdown'
import PurposeDetailsComponent from '../../components/molecules/PurposeDetails'
import ConfirmBusinessPartner from '../../components/organisms/ConfirmBusinessPartner'
import ReviewDetails from '../../components/organisms/ReviewDetails'
import TransferPaymentMethod from '../../components/organisms/Transfer&PaymentMethod'
import SearchBankDetails from '../../components/organisms/SearchBankDetails'
import LlyodAccountDetail from '../../components/organisms/LlyodAccountDetails'
import { useNavigate } from 'react-router-dom'

const StyledGridTransfer = styled(Grid)({
  width: '516px',
})

const StyledButtonGridTransfer = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '250px',
  width: '651px',
})

const VerificationButtonGridTransfer = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '400px',
  width: '651px',
})

const StyledButtonTransferAmountTemplate = styled(ButtonComponent)(
  ({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    ':disabled': {
      backgroundColor: theme.palette.warning.main,
    },
    minWidth: '135px',
    minHeight: '56px',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
    '& .MuiTypography-root': {
      variant: 'body2',
    },
    marginBottom: theme.spacing(6),
  })
)

const StyledDropdownGridTransfer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(10),
}))

const TransferAmount = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isCurrencyConversion, setIsCurrencyConversion] =
    useState<boolean>(true)
  const [isYou, setIsYou] = useState<boolean>(false)
  const [isRecipient, setIsRecipient] = useState<boolean>(false)
  const [isVerification, setIsVerification] = useState<boolean>(false)
  const [isDirector, setIsDirector] = useState<boolean>(false)
  const [isShareholder, setIsShareholder] = useState<boolean>(false)
  const [isReview, setIsReview] = useState<boolean>(false)
  const [isPay, setIsPay] = useState<boolean>(false)
  const [isSearchBank, setIsSearchBank] = useState<boolean>(false)
  const [isLloydAccount, setIsLloydAccount] = useState<boolean>(false)
  const [isLloydAccountSummary, setIsLloydAccountSummary] =
    useState<boolean>(false)
  const navigate = useNavigate()

  const handlePreviousTab = useCallback(() => {
    if (activeTab === 0) navigate('/activity')
    if (activeTab === 1) {
      setActiveTab(0)
      setIsYou(false)
      setIsCurrencyConversion(true)
    }
    if (activeTab === 2) {
      setActiveTab(1)
      setIsRecipient(false)
      setIsYou(true)
    }
    if (activeTab === 3) {
      if (isVerification === true) {
        setActiveTab(2)
        setIsVerification(false)
        setIsRecipient(true)
      }
      if (isDirector === true) {
        setIsDirector(false)
        setIsVerification(true)
      }
      if (isShareholder === true) {
        setIsShareholder(false)
        setIsDirector(true)
      }
    }
    if (activeTab === 4) {
      setActiveTab(3)
      setIsReview(false)
      setIsShareholder(true)
    }

    if (activeTab === 5) {
      if (isPay === true) {
        setActiveTab(4)
        setIsPay(false)
        setIsReview(true)
      }
      if (isSearchBank === true) {
        setIsSearchBank(false)
        setIsPay(true)
      }
      if (isLloydAccount === true) {
        setIsLloydAccount(false)
        setIsSearchBank(true)
      }
      if (isLloydAccountSummary === true) {
        setIsLloydAccountSummary(false)
        setIsLloydAccount(true)
      }
    }
  }, [
    activeTab,
    navigate,
    isVerification,
    isDirector,
    isShareholder,
    isPay,
    isSearchBank,
    isLloydAccount,
    isLloydAccountSummary,
  ])

  const handleCurrency = useCallback(() => {
    setIsCurrencyConversion(false)
    setActiveTab(1)
    setIsYou(true)
  }, [])

  const handleSelection = useCallback(() => {
    setIsYou(false)
    setActiveTab(2)
    setIsRecipient(true)
  }, [])

  const handleRecipient = useCallback(() => {
    setIsRecipient(false)
    setActiveTab(3)
    setIsVerification(true)
  }, [])

  const handleVerification = useCallback(() => {
    setIsVerification(false)
    setIsDirector(true)
  }, [])

  const handleDirector = useCallback(() => {
    setIsDirector(false)
    setIsShareholder(true)
  }, [])

  const handleShareholder = useCallback(() => {
    setIsShareholder(false)
    setActiveTab(4)
    setIsReview(true)
  }, [])

  const handleReview = useCallback(() => {
    setIsReview(false)
    setActiveTab(5)
    setIsPay(true)
  }, [])

  const handleTransferBankDetail = useCallback(() => {
    setIsPay(false)
    setIsSearchBank(true)
  }, [])

  const handleBank = useCallback(() => {
    setIsSearchBank(false)
    setIsLloydAccount(true)
  }, [])

  const handleLloyd = useCallback(() => {
    setIsLloydAccount(false)
    setIsLloydAccountSummary(true)
  }, [])

  const goToHomePage = useCallback(() => navigate('/home'), [navigate])
  const goToLandingPage = useCallback(() => navigate('/'), [navigate])

  return (
    <Grid container>
      <BasicTemplate
        dataContainer={
          <Grid data-testid="transfer-amount">
            {isCurrencyConversion && (
              <Grid>
                <StyledGridTransfer>
                  <CurrencyConversion />
                </StyledGridTransfer>
                <StyledButtonGridTransfer>
                  <StyledButtonTransferAmountTemplate
                    label={BUTTONS[0]}
                    textColor={theme.palette.info.contrastText}
                    onClick={handleCurrency}
                  />
                </StyledButtonGridTransfer>
              </Grid>
            )}

            {isYou && (
              <StyledGridTransfer>
                <CategorySelection
                  title={TRANSACTION_SELECT_TITLE}
                  subtitle={EMPTYSTRING}
                  data={TRANSACTION_SELECT_DATA}
                  handleAccountSetup={handleSelection}
                />
              </StyledGridTransfer>
            )}

            {isRecipient && (
              <BenificiaryDetails handleChange={handleRecipient} />
            )}

            {isVerification && (
              <Grid item>
                <StyledGridTransfer>
                  <PurposeDetailsComponent
                    title={PURPOSE_DETAIL[0]}
                    value={PURPOSE_DETAIL[1]}
                  />
                  <StyledDropdownGridTransfer>
                    <DropDown
                      placeholder={PURPOSE_DETAIL[2]}
                      data={PURPOSEOFPOCKETPAY}
                      currencyData={[]}
                      isCurrency={false}
                      label={PURPOSE_DETAIL[2]}
                      isLabelText={true}
                    />
                  </StyledDropdownGridTransfer>
                </StyledGridTransfer>
                <VerificationButtonGridTransfer>
                  <StyledButtonTransferAmountTemplate
                    label={BUTTONS[0]}
                    textColor={theme.palette.info.contrastText}
                    onClick={handleVerification}
                  />
                </VerificationButtonGridTransfer>
              </Grid>
            )}

            {isDirector && (
              <ConfirmBusinessPartner
                isNext={false}
                handleDirector={handleDirector}
              />
            )}

            {isShareholder && (
              <ConfirmBusinessPartner
                isNext={true}
                handleShareHolder={handleShareholder}
              />
            )}
            {isReview && (
              <ReviewDetails
                //will change the data after mockserver implementation
                transferedAmount="114.68 EUR"
                receivedAmount="100.00 GBP"
                fee="00.00 GBP"
                amountConvert="77.74 GBP"
                rate="1 GBP = 1.14 EUR"
                name="Mario Gabriel"
                email="mario.gabriel@gmail.com"
                accountNumber="21363738391910"
                accountType="Checking"
                handleReview={handleReview}
              />
            )}

            {isPay && (
              <TransferPaymentMethod
                handleBankDetail={handleTransferBankDetail}
                handleComplete={goToHomePage}
                handleCancelPay={goToLandingPage}
              />
            )}

            {isSearchBank && (
              <SearchBankDetails
                handleBank={handleBank}
                handleYes={goToLandingPage}
              />
            )}

            {isLloydAccount && (
              <LlyodAccountDetail isNext={false} handleLloyd={handleLloyd} />
            )}

            {isLloydAccountSummary && (
              <LlyodAccountDetail
                isNext={true}
                handleContinueLlyod={goToHomePage}
                handleCancelLlyod={goToLandingPage}
              />
            )}
          </Grid>
        }
        isStepper={true}
        stepData={TRANSFER_AMOUNT_STEPPER_DATA}
        activeTab={activeTab}
        isBackButtonVisible={true}
        handleIcon={handlePreviousTab}
        isCloseIcon={true}
      />
    </Grid>
  )
}

export default TransferAmount
