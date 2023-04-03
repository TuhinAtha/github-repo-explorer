import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserListItemAction } from '../UserListItemAction'

describe('Components -> UserListItemAction', () => {
  it('Should work fine with default props', () => {
    render(<UserListItemAction />)
    expect(screen.getByText('No repositories')).toBeInTheDocument()
  })

  it('Should work fine with hasRepo = true', () => {
    render(<UserListItemAction hasRepo />)
    expect(screen.queryByText('No repositories')).not.toBeInTheDocument()
    expect(screen.getByTestId('expandMoreIcon')).toBeInTheDocument()
    expect(screen.queryByTestId('expandLessIcon')).not.toBeInTheDocument()

  })
  it('Should work fine with hasRepo = true and isExpanded = true', () => {
    render(<UserListItemAction hasRepo isExpanded />)
    expect(screen.queryByText('No repositories')).not.toBeInTheDocument()
    expect(screen.queryByTestId('expandMoreIcon')).not.toBeInTheDocument()
    expect(screen.getByTestId('expandLessIcon')).toBeInTheDocument()

  })
})
