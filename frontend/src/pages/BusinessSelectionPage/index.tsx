import { useCallback, useState } from 'react'
import { Grid, styled } from '@mui/material'
import BasicTemplate from '../../components/templates/BasicTemplate'
import { BUSINESS_SELECTION_STEPPER_DATA } from '../../utils/constants'
import BusinessSearch from '../../components/organisms/BusinessSearch'
import BusinessConfirmation from '../../components/organisms/BusinessConfirmation'
import TradeAddress from '../../components/organisms/TradeAddress'
import MultiDropdownSelection from '../../components/organisms/MultiDropdown'
import UserDetails from '../../components/organisms/UserDetails'
import { useNavigate } from 'react-router-dom'

const StyledBusinessSearchGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(22),
}))

const BusinessSelection = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [businessName, setBusinessName] = useState<string>('')
  const [businessSearch, setBusinessSearch] = useState<boolean>(true)
  const [userDetails, setUserDetails] = useState<boolean>(false)
  const [confirmBusiness, setConfirmBusiness] = useState<boolean>(false)
  const [tradeAddress, setTradeAddress] = useState<boolean>(false)
  const [businessSelection, setBusinessSelection] = useState<boolean>(false)
  const [backTrack, setBackTrack] = useState<boolean>(false)

  const handlePreviousTab = useCallback(() => {
    setActiveTab(0)
    setConfirmBusiness(false)
    setBackTrack(false)
    setBusinessSearch(true)
  }, [])

  const handleBusinessSearch = useCallback(() => {
    setBusinessSearch(false)
    setBackTrack(true)
    setConfirmBusiness(true)
  }, [])

  const handleUserDetails = useCallback(() => {
    setBusinessSelection(false)
    setActiveTab(2)
    setBackTrack(false)
    setUserDetails(true)
  }, [])

  const handleTradeAddress = useCallback(() => {
    setConfirmBusiness(false)
    setActiveTab(0)
    setBackTrack(false)
    setTradeAddress(true)
  }, [])

  const handleBusinessSelection = useCallback(() => {
    setTradeAddress(false)
    setActiveTab(1)
    setBackTrack(false)
    setBusinessSelection(true)
  }, [])

  const handleBusinessConfirm = useCallback(
    (event: any) => {
      setBackTrack(false)
      setBusinessName((event.target as HTMLElement).innerHTML)
      handleBusinessSearch()
    },
    [handleBusinessSearch]
  )
  const navigate = useNavigate()
  const goToLandinPage = useCallback(() => navigate('/'), [navigate])
  return (
    <Grid container data-testid="business-selection">
      <BasicTemplate
        dataContainer={
          <Grid>
            {businessSearch && (
              <StyledBusinessSearchGrid>
                <BusinessSearch onChange={handleBusinessConfirm} />
              </StyledBusinessSearchGrid>
            )}

            {confirmBusiness && (
              <BusinessConfirmation
                businessSelectedName={businessName}
                onClick={handleTradeAddress}
              />
            )}

            {tradeAddress && (
              <StyledBusinessSearchGrid>
                <TradeAddress handleConfirm={handleBusinessSelection} />
              </StyledBusinessSearchGrid>
            )}

            {businessSelection && (
              <StyledBusinessSearchGrid>
                <MultiDropdownSelection onClick={handleUserDetails} />
              </StyledBusinessSearchGrid>
            )}

            {userDetails && (
              <StyledBusinessSearchGrid>
                <UserDetails handleUserDetail={goToLandinPage} />
              </StyledBusinessSearchGrid>
            )}
          </Grid>
        }
        isStepper={true}
        stepData={BUSINESS_SELECTION_STEPPER_DATA}
        activeTab={activeTab}
        isBackButtonVisible={backTrack}
        handleIcon={handlePreviousTab}
        isCloseIcon={false}
      />
    </Grid>
  )
}

export default BusinessSelection
