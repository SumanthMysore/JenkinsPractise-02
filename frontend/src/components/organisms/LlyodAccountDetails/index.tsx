import React from 'react'
import { Box, styled, useTheme } from '@mui/material'
import {
  ACCOUNT_NO,
  ACCOUNT_NUMBER,
  ADDR_1,
  ADDR_2,
  ADDR_3,
  ADDR_4,
  AMT_SEND,
  BANK_ADDR,
  BANK_DETAILS_DESC,
  BANK_DETAILS_GBP,
  CANCEL_TRANSFER_BTN,
  CONTINUE_BTN,
  CONTINUE_PAY_BTN,
  ENCRYPT_END,
  GBP_100_2,
  IMAGE_ALT,
  LLYOLD_ACC,
  LLYOLD_ACC_NEXT,
  LLYOLD_DESC_1,
  LLYOLD_DESC_2,
  LLYOLD_DESC_3,
  LLYOLD_DESC_4,
  LLYOLD_DESC_5,
  LLYOLD_ONLINE_1,
  LLYOLD_ONLINE_2,
  LLYOLD_ONLINE_3,
  LOGO_ALT,
  NOT_SHARE_LOGIN,
  PAYEE_NAME,
  PAY_MANUALLY_BTN,
  REC_NAME,
  REF_ID,
  SAFE_SECURE,
  SORT_CODE,
  UK_SORT,
  USE_REF,
} from '../../../utils/constants'
import lloyds_icon from '../../../../public/assets/Icons/lloyds.svg'
import lock_icon from '../../../../public/assets/Icons/Lock.svg'
import flag_icon from '../../../../public/assets/Icons/Flag.svg'
import TypographyComponent from '../../atoms/Typography'
import {
  ButtonBox,
  CancelButton,
  ContinueButton,
} from '../Transfer&PaymentMethod'
import Icon from '../../atoms/Icon'
import HyperlinkTypography from '../../molecules/HyperlinkInfo'

interface LlyodProps {
  isNext?: boolean
  handleLloyd?: () => void
  handleContinueLlyod?: () => void
  handleCancelLlyod?: () => void
}

const RootBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
})

const HeadingBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  maxWidth: '516px',
}))

const AccountCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(4),
  maxWidth: '516px',
  minHeight: '596px',
}))

const NextAccountCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(4),
  maxWidth: '516px',
  minHeight: '921px',
}))

const StyledBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
}))

const TypoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  maxWidth: '452px',
  marginBottom: theme.spacing(6),
  marginTop: theme.spacing(12),
}))

const TypoBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '432px',
  marginBottom: theme.spacing(3),
}))

const TypoBox3 = styled(Box)(({ theme }) => ({
  maxWidth: '452px',
  marginBottom: theme.spacing(3),
}))

const SummaryBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})

const TypoBox4 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(10),
}))

const PayMaunallyButton = CancelButton

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(10),
}))

const FlagBox = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.dark}`,
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
}))

const LockBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(5),
  marginLeft: theme.spacing(5),
}))

const LloydBox = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.divider}`,
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const IconBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}))

const LloydBox2 = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.divider}`,
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const StyledTypography = styled(TypographyComponent)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

const LlyodAccountDetail = ({
  isNext,
  handleLloyd,
  handleContinueLlyod,
  handleCancelLlyod,
}: LlyodProps) => {
  const theme = useTheme()

  return (
    <RootBox data-testid="llyod-account-detail">
      {!isNext ? (
        <>
          <HeadingBox>
            <TypographyComponent
              variant="h1"
              color={theme.palette.text.primary}
            >
              {LLYOLD_ACC}
            </TypographyComponent>
          </HeadingBox>
          <AccountCard>
            <StyledBox>
              <TypoBox>
                <TypographyComponent
                  variant="subtitle1"
                  color={theme.palette.info.main}
                >
                  {LLYOLD_DESC_1}

                  <span style={{ color: theme.palette.text.primary }}>
                    {LLYOLD_DESC_2}
                  </span>

                  <span>{LLYOLD_DESC_3}</span>

                  <span style={{ color: theme.palette.text.primary }}>
                    {LLYOLD_DESC_4}
                  </span>

                  <span>{LLYOLD_DESC_5}</span>
                </TypographyComponent>
              </TypoBox>

              <TypographyComponent
                variant="body1"
                color={theme.palette.text.primary}
                sx={{ marginBottom: theme.spacing(4) }}
              >
                {SAFE_SECURE}
              </TypographyComponent>

              <TypoBox2>
                <TypographyComponent
                  variant="subtitle1"
                  color={theme.palette.info.main}
                >
                  <ul
                    style={{
                      paddingInlineStart: theme.spacing(7),
                      marginBlock: 0,
                    }}
                  >
                    <li>{ENCRYPT_END}</li>
                  </ul>
                </TypographyComponent>
              </TypoBox2>

              <TypoBox2>
                <TypographyComponent
                  variant="subtitle1"
                  color={theme.palette.info.main}
                >
                  <ul
                    style={{
                      paddingInlineStart: theme.spacing(7),
                      marginBlock: 0,
                    }}
                  >
                    <li>{NOT_SHARE_LOGIN}</li>
                  </ul>
                </TypographyComponent>
              </TypoBox2>

              <IconBox>
                <FlagBox>
                  <Icon src={flag_icon} alt={IMAGE_ALT} />
                </FlagBox>
                <LockBox>
                  <Icon src={lock_icon} alt={IMAGE_ALT} />
                </LockBox>
                <LloydBox>
                  <Icon src={lloyds_icon} alt={IMAGE_ALT} />
                </LloydBox>
              </IconBox>

              <ButtonBox>
                <ContinueButton
                  textColor={theme.palette.info.contrastText}
                  variant="contained"
                  label={CONTINUE_PAY_BTN}
                  onClick={handleLloyd}
                />
                <PayMaunallyButton
                  textColor={theme.palette.primary.main}
                  variant="outlined"
                  label={PAY_MANUALLY_BTN}
                />
              </ButtonBox>
            </StyledBox>
          </AccountCard>
        </>
      ) : (
        <>
          <HeadingBox>
            <TypographyComponent
              variant="h1"
              color={theme.palette.text.primary}
            >
              {LLYOLD_ACC_NEXT}
            </TypographyComponent>
          </HeadingBox>

          <NextAccountCard>
            <StyledBox>
              <IconBox2>
                <LloydBox2>
                  <Icon src={lloyds_icon} alt={IMAGE_ALT} />
                </LloydBox2>
              </IconBox2>

              <TypoBox3>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.primary}
                >
                  {BANK_DETAILS_GBP}
                </TypographyComponent>
              </TypoBox3>

              <TypoBox3 sx={{ marginBottom: theme.spacing(6.75) }}>
                <TypographyComponent
                  variant="caption"
                  color={theme.palette.info.main}
                >
                  {BANK_DETAILS_DESC}
                </TypographyComponent>
              </TypoBox3>

              <SummaryBox>
                <TypoBox4>
                  <StyledTypography
                    variant="caption"
                    color={theme.palette.info.light}
                  >
                    {PAYEE_NAME}
                  </StyledTypography>
                  <TypographyComponent
                    variant="body2"
                    color={theme.palette.text.primary}
                  >
                    {REC_NAME}
                  </TypographyComponent>
                </TypoBox4>

                <TypoBox4>
                  <StyledTypography
                    variant="caption"
                    color={theme.palette.info.light}
                  >
                    {USE_REF}
                  </StyledTypography>
                  <TypographyComponent
                    variant="body2"
                    color={theme.palette.text.primary}
                  >
                    {REF_ID}
                  </TypographyComponent>
                </TypoBox4>
              </SummaryBox>

              <SummaryBox>
                <TypoBox4>
                  <StyledTypography
                    variant="caption"
                    color={theme.palette.info.light}
                  >
                    {AMT_SEND}
                  </StyledTypography>
                  <TypographyComponent
                    variant="body2"
                    color={theme.palette.text.primary}
                  >
                    {GBP_100_2}
                  </TypographyComponent>
                </TypoBox4>

                <TypoBox4>
                  <StyledTypography
                    variant="caption"
                    color={theme.palette.info.light}
                  >
                    <span style={{ marginRight: '1.6rem' }}>{UK_SORT}</span>
                  </StyledTypography>
                  <TypographyComponent
                    variant="body2"
                    color={theme.palette.text.primary}
                  >
                    {SORT_CODE}
                  </TypographyComponent>
                </TypoBox4>
              </SummaryBox>

              <SummaryBox>
                <TypoBox4>
                  <StyledTypography
                    variant="caption"
                    color={theme.palette.info.light}
                  >
                    {ACCOUNT_NO}
                  </StyledTypography>
                  <TypographyComponent
                    variant="body2"
                    color={theme.palette.text.primary}
                  >
                    {ACCOUNT_NUMBER}
                  </TypographyComponent>
                </TypoBox4>
              </SummaryBox>

              <SummaryBox>
                <TypoBox4>
                  <StyledTypography
                    variant="caption"
                    color={theme.palette.info.light}
                  >
                    {BANK_ADDR}
                  </StyledTypography>
                  <TypographyComponent
                    variant="body2"
                    color={theme.palette.text.primary}
                  >
                    {LOGO_ALT} <br />
                    {ADDR_1} <br />
                    {ADDR_2} <br />
                    {ADDR_3} <br />
                    {ADDR_4}
                  </TypographyComponent>
                </TypoBox4>
              </SummaryBox>

              <TypoBox2>
                <TypographyComponent
                  variant="subtitle1"
                  color={theme.palette.info.main}
                >
                  {LLYOLD_ONLINE_1}
                  <span>
                    <HyperlinkTypography data={LLYOLD_ONLINE_2} />
                  </span>
                  <span> {LLYOLD_ONLINE_3}</span>
                </TypographyComponent>
              </TypoBox2>

              <ButtonBox>
                <ContinueButton
                  textColor={theme.palette.info.contrastText}
                  variant="contained"
                  label={CONTINUE_BTN}
                  onClick={handleContinueLlyod}
                />
                <CancelButton
                  textColor={theme.palette.primary.main}
                  variant="outlined"
                  label={CANCEL_TRANSFER_BTN}
                  onClick={handleCancelLlyod}
                />
              </ButtonBox>
            </StyledBox>
          </NextAccountCard>
        </>
      )}
    </RootBox>
  )
}
export default LlyodAccountDetail
