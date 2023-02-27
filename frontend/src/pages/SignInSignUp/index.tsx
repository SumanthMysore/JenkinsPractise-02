import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import SignUpSignIn from '../../components/organisms/SignUpSignIn'
import BasicTemplate from '../../components/templates/BasicTemplate'

const RootBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(41),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const SignInSignUpPage = () => {
  return (
    <Box data-testid="signIn-page">
      <BasicTemplate
        dataContainer={
          <RootBox>
            <SignUpSignIn />
          </RootBox>
        }
        isStepper={false}
        stepData={[]}
        activeTab={0}
        isBackButtonVisible={false}
        isCloseIcon={false}
      />
    </Box>
  )
}

export default SignInSignUpPage
