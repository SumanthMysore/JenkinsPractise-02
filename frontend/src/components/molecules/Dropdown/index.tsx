import React, { useCallback } from 'react'
import {
  Autocomplete,
  Box,
  FormControl,
  Grid,
  Menu,
  MenuItem,
  PopoverOrigin,
  styled,
  TextField,
  useTheme,
} from '@mui/material'
import DropdownData from '../DropdownData'
import { DropdownDataCountry, DropdownDataDetails } from '../../../utils/type'
import ImageComponent from '../../atoms/Image'
import IconComponent from '../../atoms/Icon'
import chevronDown from '../../../../public/assets/Icons/chevron-down.svg'

export interface DropdownProps {
  placeholder: string
  data: DropdownDataDetails[]
  currencyData: DropdownDataCountry[]
  isCurrency: boolean
  label: string
  isLabelText: boolean
  handleValue?: (event: number) => void
  anchorOrigin?: PopoverOrigin
  anchorEl?: Element
  defaultValue?: any
  onChange?: (event: any) => void
  isCard?: boolean
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(4),
}))

const ParentGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
})

const DropDown = (props: DropdownProps) => {
  const theme = useTheme()

  const {
    placeholder,
    data,
    currencyData,
    isCurrency,
    label,
    isLabelText,
    handleValue,
    anchorOrigin,
    anchorEl,
    defaultValue,
    onChange,
    isCard,
  } = props

  const [labelvalue, setLabelValue] = React.useState(placeholder)
  const [item, setItem] = React.useState<boolean>(false)
  const [val, setVal] = React.useState(
    defaultValue !== undefined ? defaultValue : 0
  )

  const handleselect = useCallback(() => {
    setItem(true)
  }, [])

  const handleChange = useCallback(
    (key: number) => {
      setVal(key)
      setItem(false)
      handleValue !== undefined && handleValue(key)
    },
    [handleValue]
  )

  const handleFocus = useCallback(() => {
    setLabelValue(label)
  }, [label])

  const handleRender = useCallback(
    (props: any, option: DropdownDataDetails) => {
      return (
        <Box component="li" {...props}>
          <DropdownData
            icon={{
              image: option.image,
              name: option.name,
              value: option.value,
            }}
          />
        </Box>
      )
    },
    []
  )

  const handleRenderInput = useCallback(
    (params: any) => {
      const check = [0, undefined, null]
      return (
        <TextField
          {...params}
          label={labelvalue}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                <span style={{ marginRight: theme.spacing(9) }}>
                  {check.includes(val) || isNaN(val) || !isCard
                    ? ''
                    : `xxxx xxxx ${val}`}
                </span>
                <IconComponent src={chevronDown} alt="chevron-down" />
              </React.Fragment>
            ),
          }}
        />
      )
    },
    [isCard, labelvalue, theme, val]
  )

  const handleCardChange = useCallback((_event: any, index: any) => {
    const tepVal =
      index !== undefined ? parseInt(index?.value?.split(' ')[2]) : 0
    setVal(tepVal)
  }, [])

  const handleOnChange = useCallback(
    (event: any, index: any) => {
      onChange !== undefined && onChange(index)
    },
    [onChange]
  )

  const handleOption = useCallback((option: DropdownDataDetails) => {
    return option.name
  }, [])

  return (
    <Grid>
      {isLabelText ? (
        <FormControl fullWidth data-testid="dropdown-text">
          <Autocomplete
            data-testid="dropdown-id"
            id="dropdown-data-text-id"
            options={data}
            defaultValue={defaultValue}
            getOptionLabel={handleOption}
            renderOption={handleRender}
            renderInput={handleRenderInput}
            onFocus={handleFocus}
            onChange={isCard ? handleCardChange : handleOnChange}
          />
        </FormControl>
      ) : (
        <FormControl fullWidth data-testid="dropdown-icon">
          <Grid container data-testid="click-data" onClick={handleselect}>
            <Grid item>
              <ImageComponent
                source={currencyData[val].image}
                alt={currencyData[val].name}
              />
            </Grid>
            {isCurrency && (
              <StyledGrid item>{currencyData[val].currency}</StyledGrid>
            )}
            <ParentGrid>
              <IconComponent src={chevronDown} alt="chevron-down" />
            </ParentGrid>
          </Grid>

          {item && (
            <>
              <Menu
                id="dropdown-id"
                open={item}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                sx={{
                  width: '100%',
                  '& .MuiMenu-paper': {
                    width: '100%',
                    marginTop: '-0.5%',
                    maxWidth: '32.375rem',
                  },
                }}
              >
                <MenuItem disabled>{placeholder}</MenuItem>
                {currencyData.map((name, key) => (
                  <MenuItem
                    value={key}
                    key={name.name}
                    onClick={() => handleChange(key)}
                  >
                    <DropdownData icon={name} />
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </FormControl>
      )}
    </Grid>
  )
}

export default DropDown
