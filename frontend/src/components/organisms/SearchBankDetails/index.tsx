import React, { useCallback, useState } from 'react'
import { Grid, styled } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import {
  CANCEL_SEARCH,
  CANCEL_TRANSFER_BTN_3,
  SEARCH_BANK_DETAILS,
  SEARCH_HEADER,
  SEARCH_PLACEHOLDER,
} from '../../../utils/constants'
import TextFieldComponent from '../../atoms/InputField'
import { TypoWithIcon } from '../../molecules/TypographyWithIcon/index.stories'
import rightArrow from '../../../../public/assets/Icons/chevron-right.svg'
import theme from '../../../theme/theme'
import ButtonComponent from '../../atoms/Button'
import CancelTransactionPopup from '../../molecules/CancelTransactionPopup'

interface SearchBankDetailsProps {
  handleBank?: () => void
  handleYes?: () => void
}

const StyleddGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '516px',
})

const ParentGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(11),
  minWidth: '516px',
}))

const ChildGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  minWidth: '516px',
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  minWidth: '516px',
}))

const StyledButtonGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(8),
}))

const CancelButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '218px',
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

const SearchBankDetails = ({
  handleBank,
  handleYes,
}: SearchBankDetailsProps) => {
  const [searchedValue, setSearchedValue] = useState('')
  const [searchPopUp, setsearchPopUp] = useState(false)

  const handleCancelPopUp = useCallback(() => {
    setsearchPopUp(!searchPopUp)
  }, [searchPopUp])

  const handleSearchPopUp = useCallback(() => {
    setsearchPopUp(false)
  }, [searchPopUp])

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchedValue(event.target.value)
    },
    []
  )

  return (
    <Grid>
      {searchPopUp && (
        <CancelTransactionPopup
          question={CANCEL_SEARCH[0]}
          value={CANCEL_SEARCH[1]}
          isOpen={searchPopUp}
          handleNo={handleSearchPopUp}
          handleYes={handleYes}
        />
      )}

      <StyleddGrid container data-testid="search-bank">
        <ParentGrid>
          <PurposeDetailsComponent
            title={SEARCH_HEADER[0]}
            value={SEARCH_HEADER[1]}
          />
        </ParentGrid>
        <ChildGrid>
          <TextFieldComponent
            placeholder={SEARCH_PLACEHOLDER[0]}
            label={SEARCH_PLACEHOLDER[1]}
            onChange={handleSearch}
            submittedText={searchedValue}
          />
        </ChildGrid>
        {SEARCH_BANK_DETAILS.filter(
          (searchData) =>
            !searchedValue.length ||
            searchData.name
              .toString()
              .toLowerCase()
              .includes(searchedValue.toString().toLowerCase())
        ).map((data) => (
          <StyledGrid
            key={data.name}
            onClick={handleBank}
            data-testid="search-bank-data"
          >
            <TypoWithIcon src={data.icon} arrow={rightArrow}>
              {data.name}
            </TypoWithIcon>
          </StyledGrid>
        ))}
      </StyleddGrid>
      <StyledButtonGrid>
        <CancelButton
          textColor={theme.palette.primary.main}
          variant="outlined"
          label={CANCEL_TRANSFER_BTN_3}
          onClick={handleCancelPopUp}
        />
      </StyledButtonGrid>
    </Grid>
  )
}

export default SearchBankDetails
