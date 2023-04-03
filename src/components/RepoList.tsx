import React from 'react'
import { List, Typography } from '@mui/material'
import RepoListItem from './RepoListItem'


export type RepoListProps = {
  repos?: any
}

export const RepoList = (props: RepoListProps): JSX.Element => {
  const { repos = [] } = props

  if (!repos.length) {
    return <Typography data-testid="noRepoText">User doesn't have any repository</Typography>
  }

  return (
    <List data-testid="repoList">
      {repos.map((repo: any) => {
        return <RepoListItem key={repo.name} repo={repo} />
      })}
    </List>
  )
}

export default RepoList
