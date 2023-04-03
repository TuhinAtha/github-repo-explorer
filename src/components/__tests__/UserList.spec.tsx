import React from 'react'
import { UserList } from '../UserList'
import User from '../../models/User'
import { fireEvent, render, screen } from '@testing-library/react'
import { UserListItemProps } from '../UserListItem'

jest.mock('../UserListItem', () => (props: UserListItemProps) => (
  <div
    data-testid="userListItem"
    data-expanded={props.isExpanded}
    onClick={() => props.onExpand(props.user.login)}
  />
))

describe('Components -> UserList', () => {
  const users: User[] = [
    {
      login: 'user1',
    },
    {
      login: 'user2',
    }
  ]

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should work fine with default props', () => {
    render(<UserList />)
    expect(screen.getByTestId('userList')).toBeEmptyDOMElement()
  })

  it('Should work fine with users', () => {
    render(<UserList users={users} />)
    expect(screen.getByTestId('userList')).not.toBeEmptyDOMElement()
    expect(screen.getAllByTestId('userListItem')).toHaveLength(2)
    fireEvent.click(screen.getAllByTestId('userListItem')[0])
    expect(screen.getAllByTestId('userListItem')[0].dataset.expanded).toBe("true")
    expect(screen.getAllByTestId('userListItem')[1].dataset.expanded).toBe("false")
    fireEvent.click(screen.getAllByTestId('userListItem')[0])
    expect(screen.getAllByTestId('userListItem')[0].dataset.expanded).toBe("false")
    expect(screen.getAllByTestId('userListItem')[1].dataset.expanded).toBe("false")
  })
})
