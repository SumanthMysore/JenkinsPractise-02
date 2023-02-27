import React from 'react'

interface ImageComponentProps {
  source: string
  alt: string
}
const ImageComponent = ({ source, alt }: ImageComponentProps) => {
  return <img src={source} alt={alt} />
}

export default ImageComponent
