import {
  Autocomplete,
  Box,
  InputAdornment,
  Stack,
  styled,
  TextField,
  useTheme,
} from '@mui/material'
import {
  BUSINESS_SEARCH_DATA,
  FOOTER_QUESTION,
  FOOTER_VALUE,
} from '../../../utils/constants'
import React, { useCallback } from 'react'
import IconComponent from '../../atoms/Icon'
import SearchFieldFooter from '../SearchFieldFooter'
import { makeStyles } from '@mui/styles'

interface SearchBoxComponentProps extends React.PropsWithChildren {
  src: string
  alt: string
  placeholder: string
  footerLabel: string
  footerValue: string
  children?: React.ReactNode
  onChange?: (event: any) => void
}

const StyledStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(13),
  maxWidth: '516px',
  maxHeight: '60px',
  Radius: '8px',
  marginLeft: theme.spacing(40),
}))

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-listbox ': {
    margin: theme.spacing(4),
    padding: theme.spacing(2),
    maxWidth: '516px',
    maxHeight: '362px',
  },
}))

const useStyles = makeStyles({
  root: {
    bottom: '0',
    margin: '0',
    padding: '0',
    background: 'white',
    borderTop: '1px solid #E4E4E5',
  },
  node: {
    paddingBottom: '0',
  },
  sub_node: {
    paddingLeft: '16px',
    paddingTop: '16px',
    paddingBttom: '16px',
  },
})

const Listbox = (props: any) => {
  const classes = useStyles()
  return (
    <>
      <ul className={classes.node} {...props}>
        {props.children}
        <li className={classes.root}>
          <Box className={classes.sub_node}>
            <SearchFieldFooter
              question={FOOTER_QUESTION}
              value={FOOTER_VALUE}
            />
          </Box>
        </li>
      </ul>
    </>
  )
}

const SearchBoxComponent = ({
  src,
  alt,
  placeholder,
  onChange,
}: SearchBoxComponentProps) => {
  const theme = useTheme()

  const handleRenderInput = useCallback((params: any) => {
    return (
      <TextField
        {...params}
        placeholder={placeholder}
        InputProps={{
          ...params.InputProps,
          type: 'search',
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ marginRight: theme.spacing(5) }}
            >
              <IconComponent src={src} alt={alt} />
            </InputAdornment>
          ),
        }}
      />
    )
  }, [])
  return (
    <StyledStack>
      <StyledAutocomplete
        freeSolo
        data-testid="searchBox"
        options={BUSINESS_SEARCH_DATA}
        ListboxComponent={Listbox}
        renderInput={handleRenderInput}
        onChange={onChange}
      />
    </StyledStack>
  )
}
export default SearchBoxComponent
