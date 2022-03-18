export type PaymentTypes = 'online' | 'on-delivery' | 'pickup'

export interface UserState {
  firstName: string
  lastName: string
  phone: number | null
  email: string
  address: string
  paymentType: PaymentTypes
}

export enum UserActionEnum {
  SET_FIRST_NAME   = 'SET_FIRST_NAME',
  SET_LAST_NAME    = 'SET_LAST_NAME',
  SET_PHONE_NUMBER = 'SET_PHONE_NUMBER',
  SET_EMAIL        = 'SET_EMAIL',
  SET_ADDRESS      = 'SET_ADDRESS',
  SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE',
}

export interface setFirstNameAction {
  type: UserActionEnum.SET_FIRST_NAME
  payload: string
}

export interface setLastNameAction {
  type: UserActionEnum.SET_LAST_NAME
  payload: string
}

export interface setPhoneNumberAction {
  type: UserActionEnum.SET_PHONE_NUMBER
  payload: number
}

export interface setEmailAction {
  type: UserActionEnum.SET_EMAIL
  payload: string
}

export interface setAddressAction {
  type: UserActionEnum.SET_ADDRESS
  payload: string
}

export interface setPaymentAction {
  type: UserActionEnum.SET_PAYMENT_TYPE
  payload: PaymentTypes
}

export type UserAction = setFirstNameAction
  | setLastNameAction
  | setPhoneNumberAction
  | setEmailAction
  | setAddressAction
  | setPaymentAction