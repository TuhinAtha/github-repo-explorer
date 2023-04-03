import React from 'react'
import { Box } from '@mui/material'

type PageHeaderProps = {
  children: React.ReactNode
}

const PageHeader = (props: PageHeaderProps): JSX.Element => {
  return (
    <Box data-testid="pageHeader" sx={{
      px: 0,
      py: 1,
      top: 0,
      background: theme => theme.palette.common.white,
      zIndex: 2000,
      position: 'sticky'
    }}>
      {props.children}
    </Box>
  )
}

export default PageHeader
