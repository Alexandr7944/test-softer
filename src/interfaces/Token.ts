export interface Token {
  access_token: string,
  expires_in: string,
  extraData: {
    kek: boolean
  }
  token_type: string
}