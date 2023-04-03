import { rest } from 'msw'

export const handlers = [rest.get(
  process.env.REACT_APP_GITHUB_BASE_URL + '/search/users',
  (req, res, ctx) => {
    return res(
      ctx.json([{
        login: 'username1'
      }])
    )
  }),
rest.get(
  process.env.REACT_APP_GITHUB_BASE_URL + '/users/:username/repos',
  (req, res, ctx) => {
    return res(
      ctx.json([{
        name: 'repo1',
        description: 'repo desctipiton 1',
        stargazers_count: 100
      }])
    )
  }
)]
