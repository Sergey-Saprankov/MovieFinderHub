import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getLoginState'

export const getErrorUserName = createSelector(getLoginState, login => login.errorUserName)
