export const USER_DATA = {
  data: [
    {
      id: 1,
      address_id: 500,
      account_id: 1000,
      first_name: 'Ross',
      last_name: 'Gener',
      date_of_birth: '19-09-1998',
      mobile_number: '+44 020 7947 6330',
      email: 'ross.gener@gmail.com',
      password: 'Ross@123',
      created_at: '2023-01-30 10:10:10',
    },
    {
      id: 2,
      address_id: 501,
      account_id: 1001,
      first_name: 'Mario',
      last_name: 'Gabriel',
      date_of_birth: '19-09-1998',
      mobile_number: '+44 020 7947 6666',
      email: 'mario.gabriel@gmail.com',
      password: 'Mario@123',
      created_at: '2023-01-30 10:10:10',
    },
  ],
}

export const ADDRESS_DATA = {
  data: [
    {
      id: 500,
      adress: '43 Bishopthorpe Road',
      city: 'Pencoed',
      postal_code: 'CF35 7RJ',
      country_name: 'United kingdom',
      created_at: '2023-01-30 10:10:10',
    },
    {
      id: 501,
      adress: '49 Bishopthorpe Road',
      city: 'Pencoed',
      postal_code: 'CF35 7RJ',
      country_name: 'United kingdom',
      created_at: '2023-01-30 10:10:10',
    },
  ],
}

export const ACCOUNT_DATA = {
  data: [
    {
      id: 1000,
      account_number: '123456885865',
      account_type: 'Checking',
      ifsc_number: 'ABFJ12929G',
      balance: 100000,
      created_at: '2023-01-30 10:10:10',
    },
  ],
}

export const BUSINESSDETAILS_DATA = {
  data: [
    {
      id: 2000,
      registration_number: '2020ZEN5367GJ',
      user_id: 1,
      name: 'Zentech Solutions Pvt Ltd',
      role: 'Director',
      created_at: '2023-01-30 10:10:10',
    },
  ],
}

export const TRANSACTION_DATA = {
  data: [
    {
      id:3000,
      sender_amount: 100,
      user_id: 1,
      business_id: 2000,
      reciever_amount: 113.98,
      guranteed_rate: 1.20048,
      transfer_fee: 3.69,
      total_amount: 996.31,
      status: 1,
      created_at: '2023-01-30 10:10:10',
    },
  ],
}
