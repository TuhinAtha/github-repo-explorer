import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import UsersPage from '../UsersPage'
import useFetchUsersQuery, {
  UsersQueryProps,
} from '../../hooks/queries/useFetchUsersQuery'
import Users from '../../models/Users'
import { SearchProps } from '../../components/Search'

const mockedUsersQuery = useFetchUsersQuery as jest.Mock<unknown>

jest.mock('../../hooks/queries/useFetchusersQuery')
jest.mock(
  '../../components/UserList',
  () =>
    ({ searchText }: { searchText: string }) =>
      <div data-testid="userList" data-search={searchText} />
)
jest.mock('../../components/Search', () => (props: SearchProps) => (
  <input data-testid="search" onChange={(e) => props.onChange(e.target.value)} />
))

describe('Pages -> UsersPage', () => {
  const users: Users = {
    incomplete_results: true,
    items: [
      {
        login: 'user1',
      },
      {
        login: 'user2',
      },
    ],
    total_count: 1,
  }

  beforeEach(() => {
    mockedUsersQuery.mockImplementation(({ q }: UsersQueryProps) => {
      return {
        isFetching: false,
        data: users,
      }
    })
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should work fine', () => {
    render(<UsersPage />)
    expect(screen.getByTestId('search')).toBeInTheDocument()
    expect(screen.getByTestId('userList')).toBeEmptyDOMElement()
    expect(mockedUsersQuery).toHaveBeenCalledWith({ q: '' })
    fireEvent.change(screen.getByTestId('search'), {target: { value: 'username'}})
    expect(mockedUsersQuery).toHaveBeenCalledWith({ q: 'username' })
  })
})
