import React, { useCallback } from 'react'
import { Box, styled, useTheme } from '@mui/material'
import HomeScreen from '../../components/templates/HomeScreen'
import ImageWithTypography from '../../components/molecules/ImageWithTypography'
import Empty_state from '../../../public/assets/Images/Empty_state.svg'
import { useNavigate } from 'react-router-dom'
import { DASHBOARD_IMAGE_DATA } from '../../utils/constants'

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
  width: '82.5vw',
  height: '70vh',
  backgroundColor: theme.palette.info.contrastText,
}))

const LandingPage = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const routingPage = useCallback(() => navigate('/activity'), [navigate])

  return (
    <Box data-testid="landing-page">
      <HomeScreen
        isTxnDone={false}
        handleSendMoney={routingPage}
        dataContainer={
          <StyledBox>
            <Box sx={{ marginTop: theme.spacing(25.5) }}>
              <ImageWithTypography
                image={Empty_state}
                data={DASHBOARD_IMAGE_DATA}
              />
            </Box>
          </StyledBox>
        }
      />
    </Box>
  )
}

export default LandingPage
