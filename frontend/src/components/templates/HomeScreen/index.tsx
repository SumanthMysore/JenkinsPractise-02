import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'
import TopNavbar from '../../molecules/TopNavbar'
import SideNav from '../../organisms/SideNav'
import TypographyComponent from '../../atoms/Typography'
import { HOME_LABEL, SENDMONEY_BTN } from '../../../utils/constants'
import theme from '../../../theme/theme'
import ButtonComponent from '../../atoms/Button'

interface BasicProps {
  dataContainer: React.ReactNode
  isTxnDone: boolean
  handleSendMoney?: () => void
}

const RootBox = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
})

const FormGrid = styled(Grid)({
  display: 'flex',
})

const SideGrid = styled(Grid)({
  height: 'fill-parent',
  display: 'flex',
  flexDirection: 'row',
})
const MiddleGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
  height: 'fill-parent',
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(5),
}))
const SendMoneyBtn = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '159px',
  minHeight: '56px',
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.main}`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))
const ContianerBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const StyleGrid = styled(Grid)({
  display: 'flex',
  marginLeft: theme.spacing(2),
  marginBottom: theme.spacing(12.5),
  width: '100%',
})
const MiddleBox = styled(Box)({
  width: '100%',
  backgroundColor: theme.palette.warning.light,
  padding: theme.spacing(7),
})

const HomeScreen = ({
  dataContainer,
  isTxnDone,
  handleSendMoney,
}: BasicProps) => {
  return (
    <RootBox data-testid="home-screen">
      <FormGrid item sm={7}>
        <TopNavbar
          topNavVariant={true}
          isStepper={false}
          stepData={[]}
          activeTab={0}
          isCloseIcon={false}
        />
      </FormGrid>

      <FormGrid>
        <SideGrid item sm={7}>
          <SideNav isTxnDone={isTxnDone} />
        </SideGrid>

        <MiddleBox>
          <MiddleGrid item>
            <TypographyComponent
              variant="h1"
              color={theme.palette.text.primary}
            >
              {HOME_LABEL}
            </TypographyComponent>
            <SendMoneyBtn
              label={SENDMONEY_BTN}
              textColor={theme.palette.info.contrastText}
              variant="contained"
              onClick={handleSendMoney}
            />
          </MiddleGrid>
          <StyleGrid item sm={7}>
            <ContianerBox>{dataContainer}</ContianerBox>
          </StyleGrid>
        </MiddleBox>
      </FormGrid>
    </RootBox>
  )
}

export default HomeScreen
