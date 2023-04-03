import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Search from '../Search'

describe('Components -> Search', () => {
  const handleChange = jest.fn()
  const commonProps = {
    onChange: handleChange,
    placeholder: 'Search'
  }
  it('Should work fine', () => {
    render(<Search value="" {...commonProps} />)
    expect(screen.getByTestId('searchInput')).toBeInTheDocument()
    expect(screen.getByTestId('searchButton')).toBeInTheDocument()
  })

  it('Should display provided value in the input', () => {
    render(<Search value="a" {...commonProps} />)
    expect(screen.getByTestId('searchInput').getAttribute('value')).toEqual('a')
  })

  it('Should trigger handleChange onChange', () => {
    render(<Search value="" {...commonProps} />)
    fireEvent.change(screen.getByTestId('searchInput'), {
      target: { value: 'a' },
    })
    fireEvent.click(screen.getByTestId('searchButton'))
    expect(handleChange).toHaveBeenCalledWith('a')
  })

  it('Should trigger handleChange on Enter keypress', () => {
    render(<Search value="" {...commonProps} />)
    fireEvent.change(screen.getByTestId('searchInput'), {
      target: { value: 'xyz' },
    })
    fireEvent.keyUp(screen.getByTestId('searchInput'), {key: 'A', code: 'keyA'})
    fireEvent.keyUp(screen.getByTestId('searchInput'), {key: 'Enter', code: 'Enter', charCode: 13})
    expect(handleChange).toHaveBeenCalledWith('xyz')
  })
})
