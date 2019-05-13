import axios from 'axios'
import {query} from 'gql-query-builder'

axios.defaults.baseURL = 'https://test.creosafe.io'
axios.defaults.withCredentials = true

const API = {
  async me() {
    const res = await axios.post(
      '/graphql',
      query({
        operation: 'me',
        fields: ['firstname', 'lastname', 'uuid']
      })
    )
    return res.data.data.me
  },

  async marketplace() {
    const paginatorInfo = ['count', 'hasMorePages', 'currentPage', 'total', 'lastPage']
    const profile = ['phone', 'country', 'region', 'state', 'city', 'address1', 'address2', 'zip', {wallet: ['address']}]
    const owner = ['firstname', 'lastname', 'email', 'uuid', { profile }]
    const contract = ['uuid', 'contract_data', { owner }]
    const data = ['uuid', 'tokens', 'status', 'initialprice', 'created_at', 'updated_at', { contract }]

    const res = await axios.post(
      query({
        operation: 'marketplace',
        fields: [{ data }, { paginatorInfo }],
        variables: {
          filter
        }
      })
    )
  }
}

export default API
