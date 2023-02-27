import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Stepper as MuiStepper, Box } from '@mui/material'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import theme from '../../../theme/theme'
import { STEPS } from '../../../utils/type'

interface StyledStepperProps {
  stepDataArray: STEPS[]
  activeTab: number
}

const StyledLabel = styled(StepLabel)({
  '& .MuiStepLabel-label': {
    fontVariant: 'caption',
  },
  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
    marginTop: '14px',
  },
  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
    color: theme.palette.primary.main,
  },
  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
    color: theme.palette.primary.main,
  },
  '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel': {
    color: theme.palette.info.main,
  },
})

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 1,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.secondary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.secondary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.divider,
    borderTopWidth: 4,
    zIndex: 100,
  },
}))

const QontoStepIconRoot = styled('div')<{
  ownerState: {
    active?: boolean
    completed?: boolean
    optional: string
  }
  className?: string
}>(({ ownerState }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  height: 4,
  alignItems: 'center',
  ...(ownerState.active && {
    color: theme.palette.primary.main,
  }),
  ...(ownerState.completed && {
    color: theme.palette.primary.main,
  }),
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    zIndex: 2,
  },
  '& .QontoStepIcon-line': {
    width: 40,
    height: 4,
    marginTop: 2,
    backgroundColor: theme.palette.text.secondary,
  },
}))

function QontoStepIcon(props: {
  active: boolean
  className: string
  completed: boolean
  optional: string
}) {
  const { active, className, completed, optional } = props
  return (
    <QontoStepIconRoot
      ownerState={{ active, completed, optional }}
      className={className}
    >
      {styles()}
    </QontoStepIconRoot>
  )

  function styles(): React.ReactNode {
    const initialBoxColor = () => {
      if (className === 'Start') return 'none'
      if (active) return theme.palette.secondary.main
      return completed ? theme.palette.secondary.main : theme.palette.divider
    }
    const endBoxColor = () => {
      if (className === 'End') return 'none'
      return completed ? theme.palette.secondary.main : theme.palette.divider
    }
    const initialBoxBorder = () => {
      return className === 'End' ? theme.spacing(1) : 'none'
    }
    const endBoxBorder = () => {
      return className === 'Start' ? theme.spacing(1) : 'none'
    }

    return (
      <Box display={'flex'} width="40px" alignItems={'center'} marginTop="2px">
        {active && (
          <Box zIndex={3} width="40px" position="relative" left="16px">
            <div className="QontoStepIcon-circle" />
          </Box>
        )}
        <Box
          width="40px"
          zIndex={-1}
          display={'flex'}
          position="relative"
          left={active ? '-8px' : '0px'}
        >
          <Box
            sx={{
              width: '20px !important',
              backgroundColor: initialBoxColor(),
              height: theme.spacing(1),
              borderTopRightRadius: initialBoxBorder(),
              borderBottomRightRadius: initialBoxBorder(),
            }}
            zIndex={-1}
          ></Box>
          <Box
            sx={{
              width: '20px !important',
              backgroundColor: endBoxColor(),
              height: theme.spacing(1),
              borderTopLeftRadius: endBoxBorder(),
              borderBottomLeftRadius: endBoxBorder(),
            }}
            zIndex={-1}
          ></Box>
        </Box>
      </Box>
    )
  }
}

export const Stepper = (props: StyledStepperProps) => {
  const { activeTab, stepDataArray } = props

  return (
    <MuiStepper
      alternativeLabel
      activeStep={activeTab}
      connector={<QontoConnector />}
      sx={{ width: '100%', marginTop: '32px' }}
      data-testid="stepper"
    >
      {stepDataArray.map((stepData, index) => {
        const getClassName = () => {
          if (index === 0) return 'Start'
          return index === stepDataArray.length - 1 ? 'End' : ''
        }
        return (
          <Step key={stepData.label}>
            <StyledLabel
              StepIconProps={{
                className: getClassName(),
              }}
              StepIconComponent={QontoStepIcon}
            >
              {stepData.label}
            </StyledLabel>
          </Step>
        )
      })}
    </MuiStepper>
  )
}
