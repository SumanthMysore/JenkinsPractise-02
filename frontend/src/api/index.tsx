import React from 'react'
import axios from 'axios'
import {
  ACCOUNT_URL,
  ADDRESS_URL,
  BUSINESSDETAILS_URL,
  TRANSACTION_URL,
  USER_URL,
} from '../utils/url'
import {
  Account,
  Address,
  BusinessDetails,
  Transaction,
  User,
} from '../utils/type'
import {
  ACCOUNT_DATA,
  ADDRESS_DATA,
  BUSINESSDETAILS_DATA,
  TRANSACTION_DATA,
  USER_DATA,
} from '../utils/constants'

export const getAllUsers = async () => {
  let user: User[] | null = []
  await axios
    .get(USER_URL)
    .then((res) => {
      user = res.data
    })
    .catch(() => {})
  return user
}

export const getUsersById = async (id: number) => {
  let user: User = USER_DATA
  await axios
    .get(USER_URL + `${id}`)
    .then((res) => {
      user = res.data
    })
    .catch(() => {})

  return user
}

export const updateUser = async (user: User, id: number) => {
  await axios.put(USER_URL + `${id}`, { ...user }).catch(() => {})
}

export const createUser = async (user: User) => {
  await axios.post(USER_URL, { ...user }).catch(() => {})
}

export const getAllAddress = async () => {
  let address: Address[] | null = []
  await axios
    .get(ADDRESS_URL)
    .then((res) => {
      address = res.data
    })
    .catch(() => {})
  return address
}

export const getAddressById = async (id: number) => {
  let address: Address = ADDRESS_DATA
  await axios
    .get(ADDRESS_URL + `${id}`)
    .then((res) => {
      address = res.data[0]
    })
    .catch(() => {})

  return address
}

export const updateAddress = async (address: Address, id: number) => {
  await axios.put(ADDRESS_URL + `${id}`, { ...address }).catch(() => {})
}

export const createAddress = async (address: Address) => {
  await axios.post(ADDRESS_URL, { ...address }).catch(() => {})
}

export const getAllAccounts = async () => {
  let account: Account[] | null = []
  await axios
    .get(ACCOUNT_URL)
    .then((res) => {
      account = res.data
    })
    .catch(() => {})
  return account
}

export const getAccountsById = async (id: number) => {
  let account: Account = ACCOUNT_DATA
  await axios
    .get(ACCOUNT_URL + `${id}`)
    .then((res) => {
      account = res.data[0]
    })
    .catch(() => {})

  return account
}

export const updateAccount = async (account: Account, id: number) => {
  await axios.put(ACCOUNT_URL + `${id}`, { ...account }).catch(() => {})
}

export const createAccount = async (account: Account) => {
  await axios.post(ACCOUNT_URL, { ...account }).catch(() => {})
}

export const getAllTransactions = async () => {
  let transaction: Transaction[] | null = []
  await axios
    .get(TRANSACTION_URL)
    .then((res) => {
      transaction = res.data
    })
    .catch(() => {})
  return transaction
}

export const getTransactionsById = async (id: number) => {
  let transaction: Transaction = TRANSACTION_DATA
  await axios
    .get(TRANSACTION_URL + `${id}`)
    .then((res) => {
      transaction = res.data
    })
    .catch(() => {})
  return transaction
}

export const updateTransaction = async (
  transaction: Transaction,
  id: number
) => {
  await axios.put(TRANSACTION_URL + `${id}`, { ...transaction }).catch(() => {})
}

export const createTransaction = async (transaction: Transaction) => {
  await axios.post(TRANSACTION_URL, { ...transaction }).catch(() => {})
}

export const getAllBusinessDetails = async () => {
  let businessDetails: BusinessDetails[] | null = []
  await axios
    .get(BUSINESSDETAILS_URL)
    .then((res) => {
      businessDetails = res.data
    })
    .catch(() => {})
  return businessDetails
}

export const getBusinessDetailsById = async (id: number) => {
  let businessDetails: BusinessDetails = BUSINESSDETAILS_DATA
  await axios
    .get(BUSINESSDETAILS_URL + `${id}`)
    .then((res) => {
      businessDetails = res.data
    })
    .catch(() => {})
  return businessDetails
}

export const updateBusinessDetails = async (
  businessDetails: BusinessDetails,
  id: number
) => {
  await axios
    .put(BUSINESSDETAILS_URL + `${id}`, { ...businessDetails })
    .catch(() => {})
}

export const createBusinessDetails = async (
  businessDetails: BusinessDetails
) => {
  await axios.post(BUSINESSDETAILS_URL, { ...businessDetails }).catch(() => {})
}
