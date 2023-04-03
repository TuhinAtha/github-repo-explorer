import React from 'react'
import { CircularProgress, Stack, Typography } from '@mui/material'
import { AxiosError } from 'axios'

export type UserListHeaderProps = {
  searchText?: string
  isFetching?: boolean
  isError?: boolean
  error?: AxiosError | null
  hasReults?: boolean
}

export const UserListHeader = (props: UserListHeaderProps): JSX.Element => {
  const {
    searchText = '',
    isFetching = false,
    hasReults = false,
    isError = false,
    error = null,
  } = props
  let text = ''
  if (searchText) {
    if (isError) {
      text = `Error: "${error?.message}"`
    } else if (isFetching) {
      text = `Loading users for "${searchText}"`
    } else {
      if (hasReults) {
        text = `Showing users for "${searchText}"`
      } else {
        text = `No users found for "${searchText}"`
      }
    }
  }

  return (
    <Stack
      data-testid="userListHeader"
      direction="row"
      spacing={1}
      alignItems="center"
    >
      {isFetching && <CircularProgress size={20} color="inherit" />}
      {text && (
        <Typography
          data-testid="userListHeaderText"
          sx={{ px: 0 }}
          color={isError ? 'error' : 'textSecondary'}
        >
          {text}
        </Typography>
      )}
    </Stack>
  )
}

export default UserListHeader
