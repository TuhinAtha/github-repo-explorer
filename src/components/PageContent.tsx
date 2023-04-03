import React from 'react'
import { Stack } from '@mui/material'

type PageContentProps = {
  children: React.ReactNode
}

const PageContent = (props: PageContentProps): JSX.Element => {
  return (
    <Stack spacing={2} data-testid="pageContent">
      {props.children}
    </Stack>
  )
}

export default PageContent
