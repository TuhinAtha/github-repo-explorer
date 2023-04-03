import React from 'react'
import Container from '@mui/material/Container'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import theme from './theme'
import UsersPage from './pages/UsersPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

const App = (): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <CssBaseline />
          <Container data-testid="container">
            <UsersPage />
          </Container>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
