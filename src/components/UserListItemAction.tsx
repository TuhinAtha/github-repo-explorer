import React from 'react'
import { Typography } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export type UserListItemActionProps = {
  hasRepo?: boolean
  isExpanded?: boolean
}

export const UserListItemAction = (
  props: UserListItemActionProps
): JSX.Element => {
  const { isExpanded = false, hasRepo = false } = props
  if (hasRepo) {
    return isExpanded ? (
      <ExpandLessIcon data-testid="expandLessIcon" />
    ) : (
      <ExpandMoreIcon data-testid="expandMoreIcon" />
    )
  }
  return <Typography variant="caption">No repositories</Typography>
}

export default UserListItemAction
