import { renderHook, waitFor } from '@testing-library/react'
import useFetchUsersQuery from '../useFetchUsersQuery'
import { ReactQueryClientProviderWrapper } from '../../../mocks/ReactQueryClientProvider'

describe('Hooks -> useFetchUsersQuery', () => {
  it('Should work fine', async () => {
    const { result } = renderHook(
      () =>
        useFetchUsersQuery({
          q: 'user',
        }),
      { wrapper: ReactQueryClientProviderWrapper }
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toMatchSnapshot()
  })
})
