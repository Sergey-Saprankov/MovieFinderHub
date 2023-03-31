import { useDispatch } from 'react-redux'

import { AppDispatch } from 'app/providers/StoreProvider/config/config'

export const useAppDispatch = () => useDispatch<AppDispatch>()
