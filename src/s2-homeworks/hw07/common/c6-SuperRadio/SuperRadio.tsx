import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

// * 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
// * 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void
    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // делают студенты
        console.log(e.currentTarget.value)
    }

    const finalRadioClassName = `${s.radio + (className ? ' ' + className : '')}`
    const spanClassName = `${s.span}  ${spanProps?.className ? ' ' + spanProps.className : ''}`

    const mappedOptions: any[] = options
        ? options.map((o, i) => (
              <label key={name + '-' + i} className={s.label}>
                  <input
                      id={id + '-input-' + i}
                      className={finalRadioClassName}
                      type={'radio'}
                      name={name}
                      checked={o.value === value}
                      value={o.value}
                      // name, checked, value делают студенты

                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + i}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
