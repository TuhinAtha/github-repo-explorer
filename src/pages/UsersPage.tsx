import React, { useState } from 'react'
import Search from '../components/Search'
import useFetchUsersQuery from '../hooks/queries/useFetchUsersQuery'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import UserListHeader from '../components/UserListHeader'
import UserList from '../components/UserList'

const UsersPage = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')

  const { isFetching, isError, error, data } = useFetchUsersQuery({
    q: searchText,
  })

  const handleSearchChange = (newValue: string) => {
    setSearchText(newValue)
  }

  return (
    <Page>
      <PageHeader>
        <Search
          placeholder="Please enter a name"
          value={searchText}
          onChange={handleSearchChange}
        />
      </PageHeader>
      <PageContent>
        <UserListHeader
          searchText={searchText}
          isError={isError}
          isFetching={isFetching}
          error={error}
          hasReults={!!data?.items?.length}
        />
        <UserList users={data?.items || []} />
      </PageContent>
    </Page>
  )
}

export default UsersPage
