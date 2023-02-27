import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import SearchBoxComponent from '../../molecules/SearchBox'
import icon from '../../../../public/assets/Icons/search.svg'
import {
  BUSINESS_SEARCH_ALT,
  BUSINESS_SEARCH_HEADER,
  BUSINESS_SEARCH_LABEL,
  BUSINESS_SEARCH_PLACEHOLDER,
  FOOTER_QUESTION,
  FOOTER_VALUE,
} from '../../../utils/constants'

interface BusinessSearchProps {
  onChange?: (event: any) => void
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '516px',
  maxHeight: '368px',
  marginLeft: theme.spacing(40),
}))

const InputBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(13),
}))

const BusinessSearch = ({ onChange }: BusinessSearchProps) => {
  return (
    <Box data-testid="business-search">
      <StyledBox>
        <PurposeDetailsComponent
          title={BUSINESS_SEARCH_HEADER}
          value={BUSINESS_SEARCH_LABEL}
        />
      </StyledBox>
      <InputBox>
        <SearchBoxComponent
          src={icon}
          alt={BUSINESS_SEARCH_ALT}
          placeholder={BUSINESS_SEARCH_PLACEHOLDER}
          footerLabel={FOOTER_QUESTION}
          footerValue={FOOTER_VALUE}
          onChange={onChange}
        />
      </InputBox>
    </Box>
  )
}
export default BusinessSearch
