import React from 'react'
import { render, screen } from '@testing-library/react'
import { RepoListItem } from '../RepoListItem'
import Repo from '../../models/Repo'

describe('Components -> RepoListItem', () => {
  const repo: Repo = {
    name: 'Repository name',
    description: 'Some description',
    stargazers_count: 80,
  }
  it('Should work fine', () => {
    render(<RepoListItem repo={repo} />)
    expect(screen.getByTestId('repoName')).toBeInTheDocument()
    expect(screen.getByTestId('repoDescription')).toBeInTheDocument()
    expect(screen.getByTestId('repoStars')).toBeInTheDocument()
  })
})
