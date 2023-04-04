import React from 'react'
import { ListItem, Box, Stack, Typography } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import Repo from '../models/Repo'

export type RepoListItemProps = {
  repo: Repo
}

export const RepoListItem = (props: RepoListItemProps): JSX.Element => {
  const { repo } = props
  
  return (
    <ListItem
      data-testid="repoListItem"
      sx={{
        paddingRight: 0,
      }}
    >
      <Box
        sx={(theme) => {
          return {
            width: '100%',
            border: `1px solid ${theme.palette.grey[300]}`,
            p: 2,
          }
        }}
      >
        <Stack direction="row" spacing={2}>
          <Typography
            variant="subtitle1"
            sx={{ flexGrow: 1 }}
            data-testid="repoName"
          >
            {repo.name}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography color="primary" variant="subtitle1" data-testid="repoStars">
              {repo.stargazers_count}
            </Typography>
            <StarRoundedIcon color="primary" fontSize="small" />
          </Stack>
        </Stack>

        <Typography
          pt={1}
          variant="body2"
          color="textSecondary"
          data-testid="repoDescription"
        >
          {repo.description}
        </Typography>
      </Box>
    </ListItem>
  )
}

export default RepoListItem
