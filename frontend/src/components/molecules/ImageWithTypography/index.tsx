import React from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import ImageComponent from '../../atoms/Image'
import { IMAGE_ALT } from '../../../utils/constants'
import TypographyComponent from '../../atoms/Typography'

interface ImageWithTypographyProps {
  image: string
  data: string
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const StyledImageComponent = styled(Grid)(({ theme }) => ({
  maxWidth: '178px',
  maxHeight: '183px',
  marginBottom: theme.spacing(10),
}))

const ImageWithTypography = ({ image, data }: ImageWithTypographyProps) => {
  const theme = useTheme()
  return (
    <StyledGrid data-testid="image-typography">
      <StyledImageComponent>
        <ImageComponent source={image} alt={IMAGE_ALT} />
      </StyledImageComponent>
      {data.split('\n').map((i) => (
        <TypographyComponent
          className="display-linebreak"
          variant="body1"
          color={theme.palette.info.main}
          key="data"
        >
          {i}
        </TypographyComponent>
      ))}
    </StyledGrid>
  )
}

export default ImageWithTypography
