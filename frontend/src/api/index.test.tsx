import axios from 'axios'
import {
  ACCOUNT_DATA,
  ADDRESS_DATA,
  BUSINESSDETAILS_DATA,
  TRANSACTION_DATA,
  USER_DATA,
} from '../utils/mockData'
import {
  createAccount,
  createAddress,
  createBusinessDetails,
  createTransaction,
  createUser,
  getAccountsById,
  getAddressById,
  getAllAccounts,
  getAllAddress,
  getAllBusinessDetails,
  getAllTransactions,
  getAllUsers,
  getBusinessDetailsById,
  getTransactionsById,
  getUsersById,
  updateAccount,
  updateAddress,
  updateBusinessDetails,
  updateTransaction,
  updateUser,
} from './index'

jest.mock('axios')

it('should get all the users data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([USER_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getAllUsers()
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should get the users data by id', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([USER_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getUsersById(1)
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should put the users data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([USER_DATA.data])
  mockedAxios.put.mockResolvedValue('operation cannot be performed')
  await updateUser(
    {
      id: 3,
      address_id: 501,
      account_id: 1001,
      first_name: 'Naruto',
      last_name: 'Uzumaki',
      date_of_birth: '15-09-1997',
      mobile_number: '+44 020 7947 7890',
      email: 'naruto.uzumaki@gmail.com',
      password: 'Naruto@123',
      created_at: '2023-01-30 10:10:10',
    },
    3
  )
  expect(mockedAxios.put).toBeCalledTimes(1)
})

it('should post the users data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([USER_DATA.data])
  mockedAxios.post.mockResolvedValue('operation cannot be performed')
  await createUser({
    id: 3,
    address_id: 501,
    account_id: 1001,
    first_name: 'Naruto',
    last_name: 'Uzumaki',
    date_of_birth: '15-09-1997',
    mobile_number: '+44 020 7947 6666',
    email: 'naruto.uzumaki@gmail.com',
    password: 'Naruto@123',
    created_at: '2023-01-30 10:10:10',
  })
  expect(mockedAxios.post).toBeCalledTimes(1)
})

it('should get all the address data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ADDRESS_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getAllAddress()
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should get all the address data by id', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ADDRESS_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getAddressById(500)
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should put the address data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ADDRESS_DATA.data])
  mockedAxios.put.mockResolvedValue('operation cannot be performed')
  await updateAddress(
    {
      id: 502,
      adress: 'Leaf Village',
      city: 'Tokyo',
      postal_code: '0000000',
      country_name: 'Japan',
      created_at: '2023-01-30 10:10:10',
    },
    502
  )
  expect(mockedAxios.put).toBeCalledTimes(1)
})

it('should post the address data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ADDRESS_DATA.data])
  mockedAxios.post.mockResolvedValue('operation cannot be performed')
  await createAddress({
    id: 502,
    adress: 'Leaf Village',
    city: 'Tokyo',
    postal_code: '000000',
    country_name: 'Japan',
    created_at: '2023-01-30 10:10:10',
  })
  expect(mockedAxios.post).toBeCalledTimes(1)
})

it('should get all the accounts data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ACCOUNT_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getAllAccounts()
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should get all the accounts data by id', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ACCOUNT_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getAccountsById(1000)
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should put the accounts data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ACCOUNT_DATA.data])
  mockedAxios.put.mockResolvedValue('operation cannot be performed')
  await updateAccount(
    {
      id: 1001,
      account_number: '0987654321',
      account_type: 'Checking',
      ifsc_number: 'QWERTYUIOPA',
      balance: 96251800000,
      created_at: '2023-01-30 10:10:10',
    },
    1001
  )
  expect(mockedAxios.put).toBeCalledTimes(1)
})

it('should post the accounts data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([ACCOUNT_DATA.data])
  mockedAxios.post.mockResolvedValue('operation cannot be performed')
  await createAccount({
    id: 1001,
    account_number: '0987654321',
    account_type: 'Checking',
    ifsc_number: 'QWERTYUIOP',
    balance: 96251800000,
    created_at: '2023-01-30 10:10:10',
  })
  expect(mockedAxios.post).toBeCalledTimes(1)
})

it('should get all the transactions data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([TRANSACTION_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getAllTransactions()
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should get all the transactions data by id', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([TRANSACTION_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getTransactionsById(100)
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should put the transactions data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([TRANSACTION_DATA.data])
  mockedAxios.put.mockResolvedValue('operation cannot be performed')
  await updateTransaction(
    {
      id: 101,
      sender_amount: 101,
      user_id: 1,
      business_id: 76000,
      reciever_amount: 113.98,
      guranteed_rate: 1.20048,
      transfer_fee: 3.69,
      total_amount: 996.31,
      status: 1,
      created_at: '2023-01-30 10:10:10',
      id: 3000,
    },
    101
  )
  expect(mockedAxios.put).toBeCalledTimes(1)
})

it('should post the transactions data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([TRANSACTION_DATA.data])
  mockedAxios.post.mockResolvedValue('operation cannot be performed')
  await createTransaction({
    id: 101,
    sender_amount: 101,
    user_id: 1,
    business_id: 76000,
    reciever_amount: 113.98,
    guranteed_rate: 1.20048,
    transfer_fee: 3.69,
    total_amount: 996.31,
    status: 1,
    created_at: '2023-01-30 10:10:10',
    id: 3000,
  })
  expect(mockedAxios.post).toBeCalledTimes(1)
})

it('should get all the business details data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([BUSINESSDETAILS_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getAllBusinessDetails()
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should get all the business details data by id', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([BUSINESSDETAILS_DATA.data])
  mockedAxios.get.mockResolvedValue('operation cannot be performed')
  await getBusinessDetailsById(2000)
  expect(mockedAxios.get).toBeCalledTimes(1)
})

it('should put the usiness details data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([BUSINESSDETAILS_DATA.data])
  mockedAxios.put.mockResolvedValue('operation cannot be performed')
  await updateBusinessDetails(
    {
      id: 2001,
      registration_number: '7684HGSJDSAGT',
      user_id: 1,
      name: 'Zentech Solutions Pvt Ltd',
      role: 'Director',
      created_at: '2023-01-30 10:10:10',
    },
    2001
  )
  expect(mockedAxios.put).toBeCalledTimes(1)
})

it('should post the usiness details data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue([BUSINESSDETAILS_DATA.data])
  mockedAxios.post.mockResolvedValue('operation cannot be performed')
  await createBusinessDetails({
    id: 2001,
    registration_number: '7684HGSJDSAGT',
    user_id: 1,
    name: 'Zentech Solutions Pvt Ltd',
    role: 'Director',
    created_at: '2023-01-30 10:10:10',
  })
  expect(mockedAxios.post).toBeCalledTimes(1)
})
