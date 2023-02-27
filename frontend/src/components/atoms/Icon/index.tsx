import React from 'react'

interface IconProps {
  src: string
  alt: string
  width?: string
  height?: string
  handleIcon?: () => void
}

const IconComponent = ({ src, alt, width, height, handleIcon }: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={handleIcon}
    />
  )
}

export default IconComponent
