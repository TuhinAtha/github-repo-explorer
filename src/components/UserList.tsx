import React, { useState } from 'react'
import { List } from '@mui/material'
import User from '../models/User'
import UserListItem from './UserListItem'

export type UserListProps = {
  users?: User[]
}

export const UserList = (props: UserListProps): JSX.Element => {
  const { users = [] } = props

  const [expandedUserId, setExpandedUserId] = useState<string | null>(null)

  const handleExpand = (userId: string) => {
    setExpandedUserId(expandedUserId === userId ? null : userId)
  }

  return (
    <List data-testid="userList">
      {users.map((user) => {
        return (
          <UserListItem
            key={user.login}
            user={user}
            isExpanded={expandedUserId === user.login}
            onExpand={handleExpand}
          />
        )
      })}
    </List>
  )
}

export default UserList
