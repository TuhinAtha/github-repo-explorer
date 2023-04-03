import React from 'react'
import { UserListItem } from '../UserListItem'
import User from '../../models/User'
import { fireEvent, render, screen } from '@testing-library/react'
import useFetchReposQuery, {
  ReposQueryProps,
} from '../../hooks/queries/useFetchReposQuery'
import Repo from '../../models/Repo'

const mockedUseReposQuery = useFetchReposQuery as jest.Mock<unknown>

jest.mock('../../hooks/queries/useFetchReposQuery')

describe('Components -> UserListItem', () => {
  const handleExpand = jest.fn()
  const user: User = {
    login: 'cricbuzz',
  }
  const repos: Repo[] = [
    {
      name: 'Repository name',
      description: 'Some description',
      stargazers_count: 80,
    },
  ]

  beforeEach(() => {
    mockedUseReposQuery.mockImplementation(({ username }: ReposQueryProps) => {
      return {
        isFetching: false,
        data: repos,
      }
    })
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should work fine', () => {
    render(<UserListItem user={user} onExpand={handleExpand} />)
    expect(useFetchReposQuery).toHaveBeenCalledWith({ username: user.login })
    const listItem = screen.getByTestId('userListItem')
    expect(listItem).toBeInTheDocument()
    expect(screen.getByTestId('userName')).toBeInTheDocument()
    expect(screen.queryByTestId('repoListContainer')).not.toBeInTheDocument()
    fireEvent.click(listItem)
    expect(handleExpand).toHaveBeenCalledWith('cricbuzz')
  })

  it('Should work fine in expanded mode', () => {
    render(<UserListItem user={user} onExpand={handleExpand} isExpanded />)
    expect(screen.getByTestId('repoListContainer')).toBeInTheDocument()
  })
})
