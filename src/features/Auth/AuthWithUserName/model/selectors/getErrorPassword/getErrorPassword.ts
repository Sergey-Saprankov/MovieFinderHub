import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getLoginState'

export const getErrorPassword = createSelector(getLoginState, login => login.errorPassword)
