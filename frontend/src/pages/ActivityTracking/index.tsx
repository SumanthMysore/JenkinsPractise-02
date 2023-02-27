import React, { useCallback } from 'react'
import { Grid, styled } from '@mui/material'
import CategorySelection from '../../components/organisms/CategorySelection'
import {
  ACTIVITY_SELECT_TITLE,
  ACTIVITY_SELECT_DATA,
  EMPTYSTRING,
} from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import BasicTemplate from '../../components/templates/BasicTemplate'

const StyledGrid = styled(Grid)({
  minWidth: '516px',
})

const ActivityTracking = () => {
  const navigate = useNavigate()

  const goToTransfer = useCallback(() => navigate('/transfer'), [navigate])
  const goToAccountSelection = useCallback(
    () => navigate('/account'),
    [navigate]
  )
  return (
    <Grid container data-testid="activity-selection">
      <BasicTemplate
        dataContainer={
          <StyledGrid>
            <CategorySelection
              title={ACTIVITY_SELECT_TITLE}
              subtitle={EMPTYSTRING}
              data={ACTIVITY_SELECT_DATA}
              handleSendMoney={goToTransfer}
              handleAccountSetup={goToAccountSelection}
            />
          </StyledGrid>
        }
        isStepper={false}
        stepData={[]}
        activeTab={0}
        isBackButtonVisible={true}
        isCloseIcon={false}
      />
    </Grid>
  )
}

export default ActivityTracking
