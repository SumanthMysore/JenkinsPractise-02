import React from 'react'
import { Grid, styled } from '@mui/material'
import PurposeDetailsComponent from '../../molecules/PurposeDetails'
import { SelectingCategory } from '../../../utils/type'
import IconWithTypography from '../../molecules/IconWithTypography'

interface CategorySelectionProps {
  title: string
  subtitle: string
  data: SelectingCategory[]
  handleSendMoney?: () => void
  handleAccountSetup?: () => void
}

const ParentGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}))

const ChildGrid = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(5),
  '&:hover': {
    backgroundColor: theme.palette.warning.contrastText,
    cursor: 'pointer',
  },
}))

const StyledIconWithTypography = styled(IconWithTypography)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}))

const CategorySelection = ({
  title,
  subtitle,
  data,
  handleSendMoney,
  handleAccountSetup,
}: CategorySelectionProps) => {
  return (
    <Grid data-testid="category-selection">
      <PurposeDetailsComponent title={title} value={subtitle} />
      <ParentGrid>
        {data.map((details) => (
          <ChildGrid
            key={details.name}
            onClick={
              details.name === data[0].name
                ? handleSendMoney
                : handleAccountSetup
            }
          >
            <StyledIconWithTypography
              src={details.icon}
              value={details.value}
              atCenter={details.value ? false : true}
            >
              {details.name}
            </StyledIconWithTypography>
          </ChildGrid>
        ))}
      </ParentGrid>
    </Grid>
  )
}

export default CategorySelection
