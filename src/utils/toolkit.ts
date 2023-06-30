import { type Component } from 'solid-js'

export { type ParentProps } from 'solid-js'

export { Page } from '#/components/Page'

export function route<TProps>(componentFunc: Component<TProps>): Component<TProps> {
    return componentFunc
}