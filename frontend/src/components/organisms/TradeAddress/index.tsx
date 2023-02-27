import React, { useState, useCallback } from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import { HeaderLink } from '../../molecules/HeaderWithLink/index.stories'
import TypographyWithSelection from '../../molecules/TypographyWithSelection'
import ButtonComponent from '../../atoms/Button'
import TypographyComponent from '../../atoms/Typography'
import TextAreaComponent from '../../atoms/TextArea'
import { AddressPopDetails } from '../../molecules/AddressPopup/index.stories'
import {
  TRADE_ADDRESS_BUTTONS,
  TRADE_ADDRESS_DATA,
  TRADE_ADDRESS_HEADER,
  TRADE_ADDRESS_VALUE,
} from '../../../utils/constants'

interface TradeAddressProps {
  handleConfirm: () => void
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
  marginLeft: theme.spacing(40),
}))

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(6),
}))

const StyledButtonGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(10),
}))

const StyledAddingTradeAddressButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '218px',
  minHeight: '56px',
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
  marginBottom: theme.spacing(5),
}))

const StyledConfirmButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '218px',
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

const TradeAddress = ({ handleConfirm }: TradeAddressProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [addressPopUp, setAddressPopUp] = useState<boolean>(false)
  const [popAddress, setPopAddress] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string>('0')

  const handleEdit = useCallback(() => {
    setIsEdit(true)
  }, [])

  const handleText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value)
    },
    []
  )

  const handleTradeAddress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPopAddress(event.target.value)
    },
    []
  )

  const handleRadio = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value)
    },
    []
  )

  const handleSaveTradeAddress = useCallback(() => {
    TRADE_ADDRESS_DATA[parseInt(selectedValue)] = address
    setIsEdit(false)
  }, [address, selectedValue])

  const handleCancelTradeAddress = useCallback(() => {
    setIsEdit(false)
  }, [])

  const handleAddTradeAddress = useCallback(() => {
    setAddressPopUp(true)
  }, [])

  const handleClickTradeAddress = useCallback(() => {
    TRADE_ADDRESS_DATA.push(popAddress)
    setAddressPopUp(false)
  }, [popAddress])

  const theme = useTheme()

  return (
    <StyledGrid container data-testid="trade-address">
      <PurposeDetailsComponent
        title={TRADE_ADDRESS_HEADER[0]}
        value={TRADE_ADDRESS_HEADER[1]}
      />

      {addressPopUp && (
        <AddressPopDetails
          isOpen={addressPopUp}
          title="Add trading address"
          label={`${TRADE_ADDRESS_VALUE[2]} ${parseInt(selectedValue) + 1}`}
          value={popAddress}
          buttonLabel="Add"
          handleChange={handleTradeAddress}
          textcolor="#ffffff"
          handleClick={handleClickTradeAddress}
        />
      )}

      {!isEdit ? (
        <>
          <StyledHeaderGrid>
            <HeaderLink
              title={TRADE_ADDRESS_VALUE[0]}
              value={TRADE_ADDRESS_VALUE[1]}
              handleData={handleEdit}
            />
          </StyledHeaderGrid>

          {TRADE_ADDRESS_DATA.map((data, key) => (
            <TypographyWithSelection
              key={data}
              handleChange={handleRadio}
              checked={key.toString() === selectedValue}
              header={`${TRADE_ADDRESS_VALUE[3]} ${key + 1}`}
              data={data}
              value={key}
            />
          ))}

          <StyledButtonGrid>
            <StyledAddingTradeAddressButton
              label={TRADE_ADDRESS_BUTTONS[0]}
              textColor={theme.palette.primary.main}
              variant="outlined"
              onClick={handleAddTradeAddress}
            />
            <StyledConfirmButton
              label={TRADE_ADDRESS_BUTTONS[1]}
              textColor={theme.palette.info.contrastText}
              variant="contained"
              onClick={handleConfirm}
            />
          </StyledButtonGrid>
        </>
      ) : (
        <>
          <StyledHeaderGrid>
            <TypographyComponent
              variant="caption"
              color={theme.palette.info.light}
            >
              {TRADE_ADDRESS_VALUE[0]}
            </TypographyComponent>
          </StyledHeaderGrid>
          <TextAreaComponent
            label={`${TRADE_ADDRESS_VALUE[2]} ${parseInt(selectedValue) + 1}`}
            helperText="Enter Address"
            value={TRADE_ADDRESS_DATA[parseInt(selectedValue)]}
            handleChange={handleText}
          />
          <StyledButtonGrid>
            <StyledAddingTradeAddressButton
              label={TRADE_ADDRESS_BUTTONS[2]}
              textColor={theme.palette.primary.main}
              variant="outlined"
              onClick={handleCancelTradeAddress}
            />
            <StyledConfirmButton
              label={TRADE_ADDRESS_BUTTONS[3]}
              textColor={theme.palette.info.contrastText}
              variant="contained"
              onClick={handleSaveTradeAddress}
            />
          </StyledButtonGrid>
        </>
      )}
    </StyledGrid>
  )
}

export default TradeAddress
