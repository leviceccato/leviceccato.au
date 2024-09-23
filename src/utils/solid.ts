import { mergeProps } from 'solid-js'

/**
 * This is all required to create a stricter version of `mergeProps` that
 * is purely focused on supplying defaults to existing props. It ensures
 * that you can never supply a prop that doesn't already exist or one that
 * can never be undefined.
 */

type OptionalProperties<T> = {
	[K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

type StrictDefaultProps<T> = Partial<OptionalProperties<T>>

type NoExcessProperties<T, U extends T> = U & {
	[K in Exclude<keyof U, keyof T>]: never
}

type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export function defaultProps<
	TProps,
	TDefaultProps extends StrictDefaultProps<TProps>,
>(
	props: TProps,
	defaultProps: NoExcessProperties<StrictDefaultProps<TProps>, TDefaultProps>,
) {
	type RequiredKeys = keyof TDefaultProps & keyof TProps

	return mergeProps(defaultProps, props) as MakeRequired<TProps, RequiredKeys>
}
