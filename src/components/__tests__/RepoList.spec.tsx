import React from 'react'
import { render, screen } from '@testing-library/react'
import RepoList from '../RepoList'
import Repo from '../../models/Repo'

describe('Components -> RepoList', () => {
  const repos: Repo[] = [{
    name: 'Repository name',
    description: 'Some description',
    stargazers_count: 80,
  }];

  it('Should work fine with deafult props', () => {
    render(<RepoList />)
    expect(screen.getByTestId('noRepoText')).toBeInTheDocument()
    expect(screen.queryByTestId('repoList')).not.toBeInTheDocument()
  })

  it('Should work fine with Repos', () => {
    render(<RepoList repos={repos} />)
    expect(screen.queryByTestId('noRepoText')).not.toBeInTheDocument()
    expect(screen.getByTestId('repoList')).toBeInTheDocument()
  })
})
