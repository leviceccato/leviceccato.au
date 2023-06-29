import { type Component } from 'solid-js'

export { type ParentProps } from 'solid-js'

export function component<TProps>(componentFunc: Component<TProps>): Component<TProps> {
    return componentFunc
}