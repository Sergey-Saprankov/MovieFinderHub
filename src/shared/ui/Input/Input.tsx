import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent, memo, ReactNode } from 'react'

import s from './Input.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextTheme } from 'shared/ui/Text/Text'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  onChangeText?: (value: string) => void
  children?: ReactNode
  label?: string
  error?: string | null
}

export const Input: FC<InputProps> = memo(
  ({ className = '', value, onChange, children, label, onChangeText, error, ...otherProps }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onChange?.(e.currentTarget.value)
      }
    }

    return (
      <div className={classNames(s.Input, {}, [className])}>
        <label>
          {label && <Text theme={TextTheme.Secondary} text={label} />}
          <input
            onKeyDown={onKeyDownHandler}
            {...otherProps}
            value={value}
            onChange={onChangeHandler}
            className={s.input}
          />
        </label>
        {children}
        {error && <Text className={s.absolute} theme={TextTheme.Error} text={error} />}
      </div>
    )
  }
)
