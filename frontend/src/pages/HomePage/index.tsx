import React, { useCallback } from 'react'
import { Box, styled } from '@mui/material'
import { Accordian } from '../../components/organisms/Accordian/index.stories'
import HomeScreen from '../../components/templates/HomeScreen'
import { GBP_100_3, TRANSFER_AMOUNT } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
  width: '82.5vw',
  backgroundColor: theme.palette.info.contrastText,
}))

const HomePage = () => {
  const navigate = useNavigate()
  const goToTransfer = useCallback(() => navigate('/activity'), [navigate])

  return (
    <Box data-testid="home-page">
      <HomeScreen
        isTxnDone={true}
        handleSendMoney={goToTransfer}
        dataContainer={
          <StyledBox>
            <Accordian
              amtSentInGBP={GBP_100_3}
              amtSentInEUR={TRANSFER_AMOUNT}
            />
          </StyledBox>
        }
      />
    </Box>
  )
}

export default HomePage
