import React, { useCallback, useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Step,
  StepLabel,
  Stepper,
  useTheme,
} from '@mui/material'
import chevronDown from '../../../../public/assets/Icons/chevron-down.svg'
import arrowUpRight from '../../../../public/assets/Icons/arrow-up-right.svg'
import help from '../../../../public/assets/Icons/help-circle.svg'
import share from '../../../../public/assets/Icons/share.svg'
import steppar from '../../../../public/assets/Images/Horizontal stepper.svg'
import Illustration from '../../../../public/assets/Images/Illustration.svg'
import EmailCopy from '../../../../public/assets/Images/Email_copy.svg'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import IconComponent from '../../atoms/Icon'
import {
  CANCELLED,
  CANCEL_TRANSFER_BTN_3,
  DETAIL_TAB,
  GENERAL,
  IMAGE_ALT,
  MONEY_REFUNDED,
  PERSONA_NAME,
  REC_NAME,
  REFUND_DESC,
  SENDING,
  SETUP_BY,
  SHARE_LABEL,
  SHARE_TITLE,
  TRANSFER_NUM,
  TRANSFER_NUM_ID,
  UPDATE_TAB,
  VERICAL_STEPPER,
  YOU,
} from '../../../utils/constants'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import ImageComponent from '../../atoms/Image'
import ConfirmationPopupComponent from '../../molecules/ConfirmationPopup'
import CancelTransferDropdown from '../CancelTransferDropdown'

interface AccordianProps {
  amtSentInGBP: string
  amtSentInEUR: string
}

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',

  '& .MuiAccordion-root': {
    boxShadow: 'none',
    width: '82.5vw',
  },
})

const AccordianHead = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '8px',
  paddingBottom: '8px',
})

const ArrowBox = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.warning.light,
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(5),
}))

const TypoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledBox1 = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  minHeight: '79px',
  justifyContent: 'space-between',
}))

const TabBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  marginLeft: theme.spacing(9),
}))

const UpdateTab = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
  marginRight: theme.spacing(6),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
}))

const DetailTab = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
}))

const RightBox1 = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const GeneralBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.warning.light,
  border: `1px solid ${theme.palette.divider}`,
  minWidth: '116px',
  minHeight: '46px',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(5),
}))

const IconBox = styled(Box)(({ theme }) => ({
  minWidth: '24px',
  minHeight: '24px',
  marginRight: theme.spacing(5),
  cursor: 'pointer',
}))

const DetailBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(9),
}))

const InformationBox = styled(Box)(({ theme }) => ({
  maxWidth: '421px',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(10),
}))

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(6),
}))

const TransferStatus = styled(Box)({
  minWidth: '421px',
  display: 'flex',
  alignItems: 'center',
})

const ImageBox = styled(Box)(({ theme }) => ({
  maxHeight: '155px',
  marginRight: theme.spacing(9),
  marginLeft: theme.spacing(9),
}))

const StyledLabel = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    ...theme.typography.caption,
    fontVariant: 'caption',
  },
  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
    marginTop: 0,
  },
  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
    color: theme.palette.text.primary,
  },
  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
    color: theme.palette.primary.main,
  },
  '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel': {
    color: theme.palette.info.light,
  },
}))

const StepperConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 0,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.divider,
    borderTopWidth: 4,
    zIndex: 250,
    minHeight: 0,
  },
}))

const QontoStepIconRoot = styled('div')<{
  ownerState: {
    active?: boolean
    completed?: boolean
    optional: string
  }
  className?: string
}>(({ ownerState, theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
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
    height: 10,
    marginTop: 0,
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
    ></QontoStepIconRoot>
  )
}

const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
})

const CancelButton = styled(ButtonComponent)(({ theme }) => ({
  minWidth: '216px',
  minHeight: '56px',
  marginRight: theme.spacing(9),
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px ${theme.palette.secondary.light}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    border: 'none',
  },
  border: 'none',
}))

const AccordianComponent = ({ amtSentInGBP, amtSentInEUR }: AccordianProps) => {
  const [isCancel, setCancel] = useState(false)
  const [cancelPopup, setCancelPopup] = useState(false)
  const [isShare, setShare] = useState(false)

  const handleChange = useCallback(() => {
    setCancelPopup(!cancelPopup)
  }, [cancelPopup])

  const handleCancelPopup = useCallback(() => {
    setCancel(!isCancel)
    handleChange()
  }, [handleChange, isCancel])

  const handleShareIcon = useCallback(() => {
    setShare(!isShare)
  }, [isShare])

  const theme = useTheme()
  return (
    <StyledBox data-testid="accordian">
      <CancelTransferDropdown
        isOpen={cancelPopup}
        handleDialogClose={handleChange}
        handleClick={handleCancelPopup}
      />
      <Accordion>
        <AccordionSummary
          expandIcon={<IconComponent src={chevronDown} alt={IMAGE_ALT} />}
          sx={{ marginRight: theme.spacing(5) }}
        >
          <AccordianHead>
            <ArrowBox>
              <IconComponent src={arrowUpRight} alt={IMAGE_ALT} />
            </ArrowBox>

            <TypoBox>
              <TypographyComponent
                variant="body1"
                color={theme.palette.text.primary}
              >
                {REC_NAME}
              </TypographyComponent>
              {isCancel ? (
                <TypographyComponent
                  variant="caption"
                  color={theme.palette.info.main}
                >
                  {CANCELLED}
                </TypographyComponent>
              ) : (
                <TypographyComponent
                  variant="caption"
                  color={theme.palette.info.main}
                >
                  {SENDING.slice(0, -1)}
                </TypographyComponent>
              )}
            </TypoBox>

            <TypoBox
              sx={{
                position: 'absolute',
                alignItems: 'flex-end',
                marginLeft: '92%',
              }}
            >
              <TypographyComponent
                variant="caption"
                color={theme.palette.text.primary}
              >
                {amtSentInGBP}
              </TypographyComponent>

              <TypographyComponent
                variant="caption"
                color={theme.palette.info.main}
              >
                {amtSentInEUR}
              </TypographyComponent>
            </TypoBox>
          </AccordianHead>
        </AccordionSummary>

        <AccordionDetails>
          <StyledBox1>
            <TabBox>
              <UpdateTab>
                <TypographyComponent
                  variant="caption"
                  color={theme.palette.primary.main}
                >
                  {UPDATE_TAB}
                </TypographyComponent>
              </UpdateTab>

              <DetailTab>
                <TypographyComponent
                  variant="caption"
                  color={theme.palette.info.main}
                >
                  {DETAIL_TAB}
                </TypographyComponent>
              </DetailTab>
            </TabBox>

            <RightBox1>
              <GeneralBox>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.text.primary}
                >
                  {GENERAL}
                </TypographyComponent>
                <IconComponent src={chevronDown} alt={IMAGE_ALT} />
              </GeneralBox>
              <IconBox>
                <IconComponent
                  src={share}
                  alt={'share_icon'}
                  handleIcon={handleShareIcon}
                />
              </IconBox>
              <IconBox>
                <IconComponent src={help} alt={IMAGE_ALT} />
              </IconBox>
            </RightBox1>
          </StyledBox1>

          <ConfirmationPopupComponent
            isOpen={isShare}
            title={SHARE_TITLE}
            label={SHARE_LABEL}
            source={Illustration}
            alt={IMAGE_ALT}
            source1={EmailCopy}
            alt1={IMAGE_ALT}
            handleChange={handleShareIcon}
          />

          <DetailBox>
            <InformationBox>
              <InfoBox>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.info.main}
                >
                  {SETUP_BY}:
                </TypographyComponent>

                <TypographyComponent
                  variant="body2"
                  color={theme.palette.text.primary}
                >
                  {PERSONA_NAME + YOU}
                </TypographyComponent>
              </InfoBox>

              <InfoBox>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.info.main}
                >
                  {TRANSFER_NUM}:
                </TypographyComponent>

                <TypographyComponent
                  variant="body2"
                  color={theme.palette.text.primary}
                >
                  {TRANSFER_NUM_ID}
                </TypographyComponent>
              </InfoBox>
            </InformationBox>

            {isCancel ? (
              <TypoBox>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.primary}
                  sx={{ marginBottom: theme.spacing(7) }}
                >
                  {MONEY_REFUNDED}
                </TypographyComponent>

                <TypographyComponent
                  variant="subtitle1"
                  color={theme.palette.info.main}
                >
                  {REFUND_DESC}
                </TypographyComponent>
              </TypoBox>
            ) : (
              <>
                <TransferStatus>
                  <Stepper
                    orientation="vertical"
                    alternativeLabel
                    connector={<StepperConnector />}
                    activeStep={2}
                  >
                    {VERICAL_STEPPER.map((step, index) => {
                      const getClassName = () => {
                        if (index === 0) return 'Start'
                        return index === VERICAL_STEPPER.length - 1 ? 'End' : ''
                      }
                      return (
                        <Step key={step.label[0]}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              minWidth: '148px',
                            }}
                          >
                            <StyledLabel
                              StepIconProps={{
                                className: getClassName(),
                              }}
                              StepIconComponent={QontoStepIcon}
                            >
                              {step.label[0]}
                            </StyledLabel>
                          </Box>
                        </Step>
                      )
                    })}
                  </Stepper>

                  <ImageBox>
                    <ImageComponent source={steppar} alt={IMAGE_ALT} />
                  </ImageBox>

                  <Stepper
                    orientation="vertical"
                    alternativeLabel
                    connector={<StepperConnector />}
                    activeStep={2}
                  >
                    {VERICAL_STEPPER.map((step, index) => {
                      const getClassName = () => {
                        if (index === 0) return 'Start'
                        return index === VERICAL_STEPPER.length - 1 ? 'End' : ''
                      }
                      return (
                        <Step key={step.label[0]}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                            }}
                          >
                            <StyledLabel
                              StepIconProps={{
                                className: getClassName(),
                              }}
                              StepIconComponent={QontoStepIcon}
                            >
                              {step.label[1]}
                            </StyledLabel>
                          </Box>
                        </Step>
                      )
                    })}
                  </Stepper>
                </TransferStatus>

                <ButtonBox>
                  <CancelButton
                    textColor={theme.palette.primary.main}
                    variant="outlined"
                    label={CANCEL_TRANSFER_BTN_3}
                    onClick={handleChange}
                  />
                </ButtonBox>
              </>
            )}
          </DetailBox>
        </AccordionDetails>
      </Accordion>
    </StyledBox>
  )
}
export default AccordianComponent
