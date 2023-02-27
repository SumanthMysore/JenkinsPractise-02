import React, { useCallback, useEffect, useState } from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import {
  CONVERSION_DIALOG,
  COUNTRYREGISTRATION,
  CURRENCY_CONVERSION_DETAILS,
  CURRENCY_EXCHANGE_VALUES,
} from '../../../utils/constants'
import InputWithDropdown from '../../molecules/InputWithDropdown'
import TransferFeeComponent from '../../molecules/TransferFeeDetails'
import info from '../../../../public/assets/Icons/Info.svg'
import downRate from '../../../../public/assets/Icons/Down.svg'
import ConversionPopupComponent from '../../molecules/ConversionPopup'

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '512px',
})

const ParentGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}))

const ChildGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(7),
}))

const TypographyGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  minWidth: '512px',
}))

const CurrencyConversion = () => {
  const [sentAmount, setSentAmount] = useState<number>(0)
  const [sentDropdown, setSentDropdown] = useState(
    COUNTRYREGISTRATION[1].unitValue
  )
  const [receivedDropdown, setReceivedDropdown] = useState(
    COUNTRYREGISTRATION[0].unitValue
  )
  const [receivedAmount, setReceivedAmount] = useState(0)
  const [openPop, setOpenPop] = useState(false)

  const handleIcon = useCallback(() => {
    setOpenPop(!openPop)
  }, [openPop])

  const handlePopUp = useCallback(() => {
    setOpenPop(false)
  }, [openPop])

  const handleSentAmount = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSentAmount(parseInt(event.target.value))
    },
    [sentAmount]
  )

  useEffect(() => {
    handleReceivedAmount()
  }, [sentAmount, sentDropdown, receivedDropdown])

  const handleSendDropdown = useCallback(
    (index: number) => {
      setSentDropdown(COUNTRYREGISTRATION[index].unitValue)
    },
    [sentDropdown]
  )

  const handleReceiveDropdown = useCallback(
    (index: number) => {
      setReceivedDropdown(COUNTRYREGISTRATION[index].unitValue)
    },
    [sentDropdown, receivedDropdown, sentAmount]
  )

  const handleReceivedAmount = useCallback(() => {
    const amount = ((sentAmount * sentDropdown) / receivedDropdown).toFixed(3)
    setReceivedAmount(parseFloat(amount))
  }, [sentAmount, sentDropdown, receivedDropdown])

  const theme = useTheme()

  return (
    <StyledGrid data-testid="currency-conversion">
      {openPop && (
        <ConversionPopupComponent
          isOpen={openPop}
          title={CONVERSION_DIALOG[0]}
          buttonLabel={CONVERSION_DIALOG[1]}
          handleButton={handlePopUp}
        />
      )}

      <ParentGrid>
        <PurposeDetailsComponent
          title={CURRENCY_CONVERSION_DETAILS[0]}
          value={CURRENCY_CONVERSION_DETAILS[8]}
        />
      </ParentGrid>

      <ChildGrid>
        <InputWithDropdown
          placeholder={CURRENCY_CONVERSION_DETAILS[1]}
          isCurrency={true}
          handleValue={handleSendDropdown}
          value={CURRENCY_CONVERSION_DETAILS[6]}
          handleChange={handleSentAmount}
          defaultValue={1}
        />
      </ChildGrid>

      <ChildGrid>
        <InputWithDropdown
          placeholder={CURRENCY_CONVERSION_DETAILS[2]}
          isCurrency={true}
          amount={receivedAmount.toString()}
          handleValue={handleReceiveDropdown}
          value={CURRENCY_CONVERSION_DETAILS[6]}
          defaultValue={0}
        />
      </ChildGrid>

      <TypographyGrid>
        <TransferFeeComponent
          title={CURRENCY_CONVERSION_DETAILS[3]}
          from={CURRENCY_CONVERSION_DETAILS[7]}
          value={CURRENCY_EXCHANGE_VALUES[0]}
          valueColor={theme.palette.info.light}
          icon={info}
        />
      </TypographyGrid>

      <TypographyGrid>
        <TransferFeeComponent
          title={CURRENCY_CONVERSION_DETAILS[4]}
          value={CURRENCY_EXCHANGE_VALUES[1]}
          valueColor={theme.palette.primary.main}
          icon={downRate}
          handleIcon={handleIcon}
        />
      </TypographyGrid>

      <TypographyGrid>
        <TransferFeeComponent
          title={CURRENCY_CONVERSION_DETAILS[5]}
          value={CURRENCY_EXCHANGE_VALUES[2]}
          icon={info}
          valueColor={theme.palette.info.light}
        />
      </TypographyGrid>
    </StyledGrid>
  )
}

export default CurrencyConversion
