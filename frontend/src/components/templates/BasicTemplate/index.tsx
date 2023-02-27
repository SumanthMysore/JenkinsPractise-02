import React from 'react'
import { Grid, styled, ThemeProvider, useTheme } from '@mui/material'
import TopNavbar from '../../molecules/TopNavbar'
import { STEPS } from '../../../utils/type'
import { ARROW_ALT } from '../../../utils/constants'
import IconComponent from '../../atoms/Icon'
import arrowRight from '../../../../public/assets/Icons/arrowRight.svg'

interface BasicTemplateProps {
  dataContainer: React.ReactNode
  isStepper: boolean
  stepData: STEPS[]
  activeTab: number
  isBackButtonVisible: boolean
  handleIcon?: () => void
  isCloseIcon: boolean
}

const ParentGrid = styled(Grid)({
  overflowWrap: 'anywhere',
})

const StyledIcon = styled(Grid)(({ theme }) => ({
  marginTop: '4%',
  marginLeft: '17%',
  marginBottom: theme.spacing(6),
  cursor: 'pointer',
}))

const ChildGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'fill-parent',
})

const BasicTemplate = (props: BasicTemplateProps) => {
  const {
    dataContainer,
    isStepper,
    stepData,
    activeTab,
    isBackButtonVisible,
    handleIcon,
    isCloseIcon,
  } = props
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <ParentGrid container data-testid="basic-template">
        <ChildGrid item>
          <TopNavbar
            topNavVariant={false}
            isStepper={isStepper}
            stepData={stepData}
            activeTab={activeTab}
            isCloseIcon={isCloseIcon}
          />
        </ChildGrid>
        {isBackButtonVisible ? (
          <StyledIcon>
            <IconComponent
              src={arrowRight}
              alt={ARROW_ALT}
              handleIcon={handleIcon}
            />
          </StyledIcon>
        ) : (
          ''
        )}
        <ChildGrid item>
          <Grid>{dataContainer}</Grid>
        </ChildGrid>
      </ParentGrid>
    </ThemeProvider>
  )
}

export default BasicTemplate
