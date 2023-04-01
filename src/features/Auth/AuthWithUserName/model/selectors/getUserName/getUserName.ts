import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getLoginState'

export const getUserName = createSelector(getLoginState, login => login.userName)
