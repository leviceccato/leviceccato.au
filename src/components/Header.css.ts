import { clampVw } from '#/utils/misc'
import { style } from '@vanilla-extract/css'

export const skipLink = style({
    marginInline: 'auto',
    inlineSize: '100%',
    maxInlineSize: 550,
    padding: 18,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    fontSize: clampVw(16, 18),
    selectors: {
        '&:focus, &:hover': {
            textDecoration: 'underline'
        }
    }
    // &:focus,
    // &:hover,
    // &.active {
    //     outline: none;
    //     #{$this} {
    //         &-wrapper {
    //             background-image: linear-gradient(g(fg-col), g(fg-col));
    //         }
    //     }
    // }
})

export const nav = style({
	display: 'flex',
	paddingBlockStart: clampVw(0, 70),
	marginInline: 'auto',
	justifyContent: 'space-between',
	maxInlineSize: 550,
	paddingInline: 18,
})

export const column = style({
    width: 'calc((100% - 12px) / 3)',
    position: 'relative',
    '::before': {
        content: '',
        position: 'absolute',
        insetInline: 0,
        blockSize: 2,
        backgroundColor: 'currentcolor',
        pointerEvents: 'none',
        insetBlockEnd: clampVw(16, 11)
    }
})

export const link = style({
    position: 'relative',
    boxSizing: 'content-box',
    display: 'block',
    lineHeight: 1.4,
    fontWeight: 700,
    paddingInline: 3,
    marginInline: -3,
    height: '1.4em',
    letterSpacing: '-0.02em',
    fontSize: clampVw(16, 18),
    ':first-child': {
        paddingBlockStart: 26,
        paddingBlockEnd: clampVw(1, 2)
    },
    ':last-child': {
        paddingBlockEnd: 26,
        paddingBlockStart: clampVw(1, 2)
    }
    //     &.active {
    //         #{$this} {
    //             &-linkWrapper {
    //                 background-image: linear-gradient(g(fg-col), g(fg-col));
    //             }
    //         }
    //         &:focus,
    //         &:hover {
    //             #{$this} {
    //                 &-linkWrapper {
    //                     background-image: none;
    //                 }
    //             }
    //         }
    //     }
    //     &:focus,
    //     &:hover,
    //     &.active {
    //         outline: none;
    //         #{$this} {
    //             &-linkWrapper {
    //                 background-image: linear-gradient(g(fg-col), g(fg-col));
    //             }
    //         }
    //     }
    // }
})