import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export type SearchProps = {
  value: string
  placeholder: string
  onChange: (newValue: string) => void
}

export const Search = (props: SearchProps): JSX.Element => {
  const { value, placeholder, onChange } = props
  const [stateValue, setStateValue] = useState<string>('')

  useEffect(() => {
    setStateValue(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateValue(e.target.value.trim())
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }

  const handleSearchClick = () => {
    onChange(stateValue)
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={8} lg={10}>
        <TextField
          value={stateValue}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          fullWidth
          placeholder={placeholder}
          inputProps={{
            'data-testid': 'searchInput',
          }}
        />
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
        <Button
          fullWidth
          variant="contained"
          data-testid="searchButton"
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  )
}

export default Search
