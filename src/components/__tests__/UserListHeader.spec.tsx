import React from 'react'
import { UserListHeader } from '../UserListHeader'
import { render, screen } from '@testing-library/react'
import { AxiosError } from 'axios'

describe('Components -> UserListHeader', () => {
  const searchText = 'xyz'

  it('Should work fine with default props', () => {
    render(<UserListHeader />)
    expect(screen.getByTestId('userListHeader')).toBeInTheDocument()
    expect(screen.queryByTestId('userListHeaderText')).not.toBeInTheDocument()
  })

  it('Should work fine with a searchText and isFetching = true', () => {
    render(<UserListHeader searchText={searchText} isFetching />)
    expect(screen.getByTestId('userListHeaderText')).toBeInTheDocument()
    expect(screen.getByTestId('userListHeaderText')).toHaveTextContent(
      `Loading users for "${searchText}"`
    )
  })

  it('Should work fine with a searchText, isFetching = false and hasReults = true', () => {
    render(
      <UserListHeader searchText={searchText} isFetching={false} hasReults />
    )
    expect(screen.getByTestId('userListHeaderText')).toBeInTheDocument()
    expect(screen.getByTestId('userListHeaderText')).toHaveTextContent(
      `Showing users for "${searchText}"`
    )
  })

  it('Should work fine with a searchText, isFetching = false and hasReults = false', () => {
    render(<UserListHeader searchText={searchText} />)
    expect(screen.getByTestId('userListHeaderText')).toBeInTheDocument()
    expect(screen.getByTestId('userListHeaderText')).toHaveTextContent(
      `No users found for "xyz"`
    )
  })

  it('Should work fine with only a searchText', () => {
    render(<UserListHeader searchText={searchText} />)
    expect(screen.getByTestId('userListHeaderText')).toBeInTheDocument()
    expect(screen.getByTestId('userListHeaderText')).toHaveTextContent(
      `No users found for "xyz"`
    )
  })

  it('Should work fine with a searchText, isError = ture', () => {
    render(<UserListHeader searchText={searchText} isError error={new AxiosError("Some error message")} />)
    expect(screen.getByTestId('userListHeaderText')).toBeInTheDocument()
    expect(screen.getByTestId('userListHeaderText')).toHaveTextContent(
      'Some error message'
    )
  })
})
