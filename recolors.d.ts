/**
 * `true` if colors are supported, `false` otherwise.
 */
export const COLORS_SUPPORTED: boolean

/**
 * Reset the current style.
 */
export const reset: (text: unknown) => string

/**
 * Make the text **bold**.
 */
export const bold: (text: unknown) => string

/**
 * Make the text have lower opacity.
 */
export const dim: (text: unknown) => string

/**
 * Make the text *italic*. (Not widely supported)
 */
export const italic: (text: unknown) => string

/**
 * Put a horizontal line below the text. (Not widely supported)
 */
export const underline: (text: unknown) => string

/**
 * Invert background and foreground colors.
 */
export const inverse: (text: unknown) => string

/**
 * Print the text but make it invisible.
 */
export const hidden: (text: unknown) => string

/**
 * Puts a horizontal line through the center of the text. (Not widely supported)
 */
export const strikethrough: (text: unknown) => string

/**
 * Make the text black.
 */
export const black: (text: unknown) => string

/**
 * Make the text red.
 */
export const red: (text: unknown) => string

/**
 * Make the text green.
 */
export const green: (text: unknown) => string

/**
 * Make the text yellow.
 */
export const yellow: (text: unknown) => string

/**
 * Make the text blue.
 */
export const blue: (text: unknown) => string

/**
 * Make the text magenta.
 */
export const magenta: (text: unknown) => string

/**
 * Make the text cyan.
 */
export const cyan: (text: unknown) => string

/**
 * Make the text white.
 */
export const white: (text: unknown) => string

/**
 * Make the text gray.
 */
export const gray: (text: unknown) => string

/**
 * Make the text background black.
 */
export const bgBlack: (text: unknown) => string

/**
 * Make the text background red.
 */
export const bgRed: (text: unknown) => string

/**
 * Make the text background green.
 */
export const bgGreen: (text: unknown) => string

/**
 * Make the text background yellow.
 */
export const bgYellow: (text: unknown) => string

/**
 * Make the text background blue.
 */
export const bgBlue: (text: unknown) => string

/**
 * Make the text background magenta.
 */
export const bgMagenta: (text: unknown) => string

/**
 * Make the text background cyan.
 */
export const bgCyan: (text: unknown) => string

/**
 * Make the text background white.
 */
export const bgWhite: (text: unknown) => string
