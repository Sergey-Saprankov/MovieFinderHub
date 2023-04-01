import { useCallback } from 'react'

import { useSelector } from 'react-redux'

import { getErrorPassword } from '../model/selectors/getErrorPassword/getErrorPassword'
import { getErrorUserName } from '../model/selectors/getErrorUserName/getErrorUserName'
import { getPassword } from '../model/selectors/getPassword/getPassword'
import { getUserName } from '../model/selectors/getUserName/getUserName'
import {
  useAuthenticateWithLoginMutation,
  useCreateRequestTokenQuery,
  useCreateSessionIdMutation,
} from '../model/services/login'

import s from './LoginForm.module.scss'

import {
  setErrorPassword,
  setErrorUserName,
  setPassword,
  setUserName,
} from 'features/Auth/AuthWithUserName/model/slice/loginSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export const LoginForm = () => {
  const { error, data } = useCreateRequestTokenQuery({})
  const [authenticateWithLogin] = useAuthenticateWithLoginMutation()
  const [createSessionId] = useCreateSessionIdMutation()
  const dispatch = useAppDispatch()
  const userName = useSelector(getUserName)
  const password = useSelector(getPassword)
  const errorUserName = useSelector(getErrorUserName)
  const errorPassword = useSelector(getErrorPassword)

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(setUserName(value))
    },
    [dispatch, userName]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value))
    },
    [dispatch, password]
  )

  const onBlurPassword = useCallback(() => {
    if (password.length < 5) {
      dispatch(setErrorPassword('Invalid password'))
    } else {
      dispatch(setErrorPassword(null))
    }
  }, [dispatch, password])

  const onBlurUserName = useCallback(() => {
    if (userName.length < 5) {
      dispatch(setErrorUserName('Invalid user name'))
    } else {
      dispatch(setErrorUserName(null))
    }
  }, [dispatch, userName])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const requestToken = data?.request_token

      if (!requestToken) {
        throw new Error('Failed to create a request token')
      }

      const authResult = await authenticateWithLogin({
        username: userName,
        password,
        request_token: requestToken,
      })

      const sessionResult = await createSessionId({ request_token: requestToken })

      // Handle successful authentication (e.g., store the session ID, navigate to the main page)
      console.log('Authenticated successfully with session ID:', sessionResult)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={s.LoginForm}>
      <Text theme={TextTheme.Secondary} title={'Sign In'} />
      <form className={s.form} onSubmit={handleSubmit}>
        <Input
          error={errorUserName}
          onBlur={onBlurUserName}
          value={userName}
          onChange={onChangeUserName}
          label={'User name'}
        />
        <Input
          error={errorPassword}
          onBlur={onBlurPassword}
          value={password}
          onChange={onChangePassword}
          type={'password'}
          label={'Password'}
          className={s.mb}
        />
        <Button theme={ButtonTheme.Primary} type={'submit'}>
          Sign In
        </Button>
      </form>
    </div>
  )
}
