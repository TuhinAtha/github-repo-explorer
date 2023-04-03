import { renderHook, waitFor } from '@testing-library/react'
import useFetchReposQuery from '../useFetchReposQuery'
import { ReactQueryClientProviderWrapper } from '../../../mocks/ReactQueryClientProvider'

describe('Hooks -> useFetchReposQuery', () => {
  it('Should work fine', async () => {
    const { result } = renderHook(
      () =>
        useFetchReposQuery({
          username: 'username1',
        }),
      { wrapper: ReactQueryClientProviderWrapper }
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toMatchSnapshot()
  })
})
