import React from 'react'
import {
  CircularProgress,
  Collapse,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import User from '../models/User'
import useFetchReposQuery from '../hooks/queries/useFetchReposQuery'
import RepoList from './RepoList'
import UserListItemAction from './UserListItemAction'

export type UserListItemProps = {
  user: User
  isExpanded?: boolean
  onExpand: (userId: string) => void
}

export const UserListItem = (props: UserListItemProps): JSX.Element => {
  const { user, isExpanded = false, onExpand } = props

  const {
    isFetching,
    isError,
    error,
    data: repos,
  } = useFetchReposQuery({ username: user.login })

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const userId = e.currentTarget.dataset.userId
    if (userId) {
      onExpand(userId)
    }
  }

  const disabled = !repos?.length

  return (
    <>
      <ListItemButton
        data-testid="userListItem"
        data-user-id={user.login}
        divider
        disabled={disabled}
        sx={{
          background: (theme) => theme.palette.grey[50],
          '&.Mui-disabled': {
            opacity: 'unset',
          },
        }}
        onClick={handleClick}
      >
        <ListItemText disableTypography>
          <Typography data-testid="userName" variant="subtitle1">
            {user.login}
          </Typography>
        </ListItemText>
        {isError && (
          <Typography color="error">{error.message}</Typography>
        )}
        {isFetching ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <UserListItemAction
            hasRepo={Boolean(repos?.length)}
            isExpanded={isExpanded}
          />
        )}
      </ListItemButton>
      {Boolean(repos?.length) && (
        <Collapse
          data-testid="repoListContainer"
          in={isExpanded}
          timeout="auto"
          unmountOnExit
        >
          <RepoList repos={repos} />
        </Collapse>
      )}
    </>
  )
}

export default UserListItem
