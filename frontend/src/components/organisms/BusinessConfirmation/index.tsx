import React, { useCallback, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, TextField, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import {
  BUSINESS_DETAIL,
  BUSINESS_DETAIL_SUB,
  BUZ_DETAIL,
  BUZ_NAME,
  CANCEL_BTN,
  CONFIRM_BTN,
  EDIT_BTN_TEXT,
  REG_ADDR,
  REG_NUM,
  SAVE_BTN,
  ZENTECH_ADDRESS,
  ZENTECH_BUSINESS,
  ZENTECH_REGISTRATION_NUMBER,
} from '../../../utils/constants'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import HyperlinkTypography from '../../molecules/HyperlinkInfo'
import TextAreaComponent from '../../atoms/TextArea'

interface BusinessConfirmationProps {
  businessSelectedName?: string
  onClick?: (event: any) => void
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(40),
}))

const HeadingBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  '& .MuiGrid-root': {
    maxWidth: '380px',
  },
}))

const EditBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(5),
  maxWidth: '516px',
}))

const BuzDetailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(10),
  maxWidth: '516px',
  maxHeight: '60px',
}))

const InputBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  '& .MuiInputBase-input': {
    minWidth: '516px',
    paddingTop: theme.spacing(5),
  },
}))

const AddressBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  '& .MuiInputBase-input': {
    minWidth: '516px',
  },
}))

const DetailTypography = styled(TypographyComponent)(({ theme }) => ({
  marginTop: theme.spacing(3),
}))

const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(15),
  maxWidth: '100%',
}))

const SaveButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))

const CancelButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginRight: theme.spacing(5),
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.light}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    border: 'none',
  },
  border: 'none',
}))

const BusinessConfirmation = ({
  businessSelectedName,
  onClick,
}: BusinessConfirmationProps) => {
  const [isEdit, setEdit] = useState(true)

  const theme = useTheme()
  const [businessName, setBusinessName] = useState(businessSelectedName)
  const [regNumber, setRegNumber] = useState(ZENTECH_REGISTRATION_NUMBER)
  const [regAddress, setRegAddress] = useState(ZENTECH_ADDRESS)

  const handleBusiness = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setBusinessName(event.target.value),
    []
  )
  const handleRegistration = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setRegNumber(event.target.value),
    []
  )
  const handleAddress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setRegAddress(event.target.value),
    []
  )

  const handleEdit = useCallback(() => setEdit((prevEdit) => !prevEdit), [])

  const handleCancel = useCallback(() => {
    setEdit(true)
    setBusinessName(businessSelectedName)
    setRegNumber(ZENTECH_REGISTRATION_NUMBER)
    setRegAddress(ZENTECH_ADDRESS)
  }, [businessSelectedName])

  return (
    <StyledBox data-testid="business-confirmation">
      <HeadingBox>
        <PurposeDetailsComponent
          title={BUSINESS_DETAIL}
          value={BUSINESS_DETAIL_SUB}
        />
      </HeadingBox>

      <EditBox>
        <TypographyComponent variant="caption" color={theme.palette.info.light}>
          {BUZ_DETAIL}
        </TypographyComponent>
        {isEdit && (
          <HyperlinkTypography
            data={EDIT_BTN_TEXT}
            handleData={handleEdit}
          ></HyperlinkTypography>
        )}
      </EditBox>

      {isEdit ? (
        <>
          <BuzDetailBox>
            <TypographyComponent
              variant="body2"
              color={theme.palette.info.main}
            >
              {BUZ_NAME}:
            </TypographyComponent>
            <DetailTypography
              variant="body2"
              color={theme.palette.text.primary}
            >
              {businessName}
            </DetailTypography>
          </BuzDetailBox>
          <BuzDetailBox>
            <TypographyComponent
              variant="body2"
              color={theme.palette.info.main}
            >
              {REG_NUM}:
            </TypographyComponent>
            <DetailTypography
              variant="body2"
              color={theme.palette.text.primary}
            >
              {regNumber}
            </DetailTypography>
          </BuzDetailBox>
          <BuzDetailBox>
            <TypographyComponent
              variant="body2"
              color={theme.palette.info.main}
            >
              {REG_ADDR}:
            </TypographyComponent>
            <DetailTypography
              variant="body2"
              color={theme.palette.text.primary}
            >
              {regAddress}
            </DetailTypography>
          </BuzDetailBox>
          <ButtonBox>
            <SaveButton
              data-testid="save-button"
              variant="contained"
              label={CONFIRM_BTN}
              textColor={theme.palette.info.contrastText}
              onClick={onClick}
            />
          </ButtonBox>
        </>
      ) : (
        <Box data-testid="business-confirmation-edit">
          <InputBox>
            <TextField
              placeholder={ZENTECH_BUSINESS}
              label={BUZ_NAME}
              value={businessName}
              onChange={handleBusiness}
            />
          </InputBox>

          <InputBox>
            <TextField
              placeholder={ZENTECH_REGISTRATION_NUMBER}
              label={REG_NUM}
              value={regNumber}
              onChange={handleRegistration}
            />
          </InputBox>

          <AddressBox>
            <TextAreaComponent
              placeholder={ZENTECH_ADDRESS}
              label={REG_ADDR}
              value={regAddress}
              helperText={REG_ADDR}
              handleChange={handleAddress}
            />
          </AddressBox>

          <ButtonBox>
            <CancelButton
              data-testid="cancel-btn"
              label={CANCEL_BTN}
              textColor={theme.palette.primary.main}
              variant="outlined"
              onClick={handleCancel}
            ></CancelButton>

            <SaveButton
              data-testid="save-btn"
              variant="contained"
              label={SAVE_BTN}
              textColor={theme.palette.info.contrastText}
              onClick={handleEdit}
            />
          </ButtonBox>
        </Box>
      )}
    </StyledBox>
  )
}
export default BusinessConfirmation
