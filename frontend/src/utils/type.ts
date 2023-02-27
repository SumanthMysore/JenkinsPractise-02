export type IconDetails = {
  icon: string
  name: string
}
export type DropdownDataDetails = {
  image?: string
  name: string
  currency?: string
  value?: string
}

export type DropdownDataCountry = {
  image: string
  name: string
  currency?: string
  value?: string
}

export type STEPS = {
  label: string
  content: string
}

export type SelectingCategory = {
  icon: string
  name: string
  value?: string
}

export type User = {
  id: number
  address_id: number
  account_id: number
  first_name: string
  last_name: string
  date_of_birth: string
  mobile_number: string
  email: string
  password: string
  created_at: string
}

export type Account = {
  id: number
  account_number: string
  account_type: string
  ifsc_number: string
  balance: number
  created_at: string
}

export type Address = {
  id: number
  adress: string
  city: string
  postal_code: string
  country_name: string
  created_at: string
}

export type Transaction = {
  id: number
  sender_amount: number
  user_id: number
  business_id: number
  reciever_amount: number
  guranteed_rate: number
  transfer_fee: number
  total_amount: number
  status: number
  created_at: string
}

export type BusinessDetails = {
  id: number
  registration_number: string
  user_id: number
  name: string
  role: string
  created_at: string
}
