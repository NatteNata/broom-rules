'use client'

import { Checkbox } from '@tornata/penguin-ui'
import type { ComponentProps } from 'react'
import {
	type Control,
	type FieldValues,
	type UseControllerProps,
	useController,
} from 'react-hook-form'

type Props<T extends FieldValues> = {
	control: Control<T>
} & Omit<CheckboxType, 'checked' | 'onCheckedChange'> &
	Omit<UseControllerProps<T>, 'control'>

type CheckboxType = ComponentProps<typeof Checkbox>

export const FormCheckbox = <T extends FieldValues>({
	control,
	helperMessage,
	label,
	name,
	...rest
}: Props<T>) => {
	const {
		field: { onChange, value, ...field },
	} = useController({ control, name })

	return (
		<Checkbox
			checked={value}
			helperMessage={helperMessage}
			label={label}
			onCheckedChange={onChange}
			{...rest}
			{...field}
		/>
	)
}
