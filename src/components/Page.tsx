import React from 'react'
import { Box } from '@mui/material'

type PageProps = {
  children: React.ReactNode
}

const Page = (props: PageProps): JSX.Element => {
  return <Box data-testid="page">{props.children}</Box>
}

export default Page
