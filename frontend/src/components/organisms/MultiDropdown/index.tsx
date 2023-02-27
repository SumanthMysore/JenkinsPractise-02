import { styled } from '@mui/material/styles'
import { Box, useTheme } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import {
  ACCOUNT_CATEGORY,
  ACCOUNT_SUBCATEGORY,
  BUSINESS_SEARCH_ALT,
  BUSINESS_SIZE,
  BUSINESS_SIZE_PLACEHOLDER,
  CATEGORY_PLACEHOLDER,
  CONTINUE_BTN,
  MULTI_DROPDOWN_HEADER,
  MULTI_DROPDOWN_LABEL,
  SUBCATEGORY_PLACEHOLDER,
} from '../../../utils/constants'
import Dropdown from '../../molecules/Dropdown'
import React, { useCallback } from 'react'
import ButtonComponent from '../../atoms/Button'

interface MultiDropdownProps {
  onClick?: (event: any) => void
}
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: theme.spacing(70),
}))

const TypoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '448px',
  marginBottom: theme.spacing(13),
}))

const StyledDropdownBox = styled(Box)(({ theme }) => ({
  maxWidth: '516px',
  marginBottom: theme.spacing(7),
}))
const BtnBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(40),
  marginLeft: theme.spacing(187),
}))

const ContinueBtn = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))

const MultiDropdownSelection = ({ onClick }: MultiDropdownProps) => {
  const theme = useTheme()
  const [selected, setSelected] = React.useState('')

  const changeSelectOptionHandler = useCallback(
    (event: any) => setSelected(event.name),
    []
  )

  return (
    <Box data-testid="multi-dropdown">
      <StyledBox>
        <TypoBox>
          <PurposeDetailsComponent
            title={MULTI_DROPDOWN_HEADER}
            value={MULTI_DROPDOWN_LABEL}
          />
        </TypoBox>
        <StyledDropdownBox>
          <Dropdown
            placeholder={BUSINESS_SEARCH_ALT}
            data={ACCOUNT_CATEGORY}
            currencyData={[]}
            isCurrency={false}
            label={CATEGORY_PLACEHOLDER}
            isLabelText={true}
            onChange={changeSelectOptionHandler}
          />
        </StyledDropdownBox>

        {selected === ACCOUNT_CATEGORY[2].name && (
          <>
            <StyledDropdownBox>
              <Dropdown
                placeholder={SUBCATEGORY_PLACEHOLDER}
                data={ACCOUNT_SUBCATEGORY}
                defaultValue={ACCOUNT_SUBCATEGORY[0]}
                currencyData={[]}
                isCurrency={false}
                label={SUBCATEGORY_PLACEHOLDER}
                isLabelText={true}
              />
            </StyledDropdownBox>
            <StyledDropdownBox>
              <Dropdown
                placeholder={BUSINESS_SIZE_PLACEHOLDER}
                data={BUSINESS_SIZE}
                defaultValue={BUSINESS_SIZE[0]}
                currencyData={[]}
                isCurrency={false}
                label={BUSINESS_SIZE_PLACEHOLDER}
                isLabelText={true}
              />
            </StyledDropdownBox>
          </>
        )}
        {selected !== ACCOUNT_CATEGORY[2].name && (
          <>
            <StyledDropdownBox>
              <Dropdown
                placeholder={SUBCATEGORY_PLACEHOLDER}
                data={ACCOUNT_SUBCATEGORY}
                defaultValue={null}
                currencyData={[]}
                isCurrency={false}
                label={SUBCATEGORY_PLACEHOLDER}
                isLabelText={true}
              />
            </StyledDropdownBox>
            <StyledDropdownBox>
              <Dropdown
                placeholder={BUSINESS_SIZE_PLACEHOLDER}
                data={BUSINESS_SIZE}
                defaultValue={null}
                currencyData={[]}
                isCurrency={false}
                label={BUSINESS_SIZE_PLACEHOLDER}
                isLabelText={true}
              />
            </StyledDropdownBox>
          </>
        )}
      </StyledBox>
      <BtnBox>
        <ContinueBtn
          variant="contained"
          label={CONTINUE_BTN}
          textColor={theme.palette.info.contrastText}
          onClick={onClick}
        />
      </BtnBox>
    </Box>
  )
}
export default MultiDropdownSelection
