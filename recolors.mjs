import tty from 'node:tty'

export const COLORS_SUPPORTED =
  !('NO_COLOR' in process.env || process.argv.includes('--no-color')) &&
  ('FORCE_COLOR' in process.env ||
    process.argv.includes('--color') ||
    process.platform === 'win32' ||
    (tty.isatty(1) && process.env.TERM !== 'dumb') ||
    'CI' in process.env)

function replaceClose(string, close, replace, index) {
  const start = string.substring(0, index) + replace
  const end = string.substring(index + close.length)
  const nextIndex = end.indexOf(close)
  return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end
}

function formatter(open, close, replace = open) {
  return (input) => {
    const string = String(input)
    const index = string.indexOf(close, open.length)
    return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close
  }
}

export const reset = COLORS_SUPPORTED ? (s) => `\x1b[0m${s}\x1b[0m` : String
export const bold = COLORS_SUPPORTED ? formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m') : String
export const dim = COLORS_SUPPORTED ? formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m') : String
export const italic = COLORS_SUPPORTED ? formatter('\x1b[3m', '\x1b[23m') : String
export const underline = COLORS_SUPPORTED ? formatter('\x1b[4m', '\x1b[24m') : String
export const inverse = COLORS_SUPPORTED ? formatter('\x1b[7m', '\x1b[27m') : String
export const hidden = COLORS_SUPPORTED ? formatter('\x1b[8m', '\x1b[28m') : String
export const strikethrough = COLORS_SUPPORTED ? formatter('\x1b[9m', '\x1b[29m') : String
export const black = COLORS_SUPPORTED ? formatter('\x1b[30m', '\x1b[39m') : String
export const red = COLORS_SUPPORTED ? formatter('\x1b[31m', '\x1b[39m') : String
export const green = COLORS_SUPPORTED ? formatter('\x1b[32m', '\x1b[39m') : String
export const yellow = COLORS_SUPPORTED ? formatter('\x1b[33m', '\x1b[39m') : String
export const blue = COLORS_SUPPORTED ? formatter('\x1b[34m', '\x1b[39m') : String
export const magenta = COLORS_SUPPORTED ? formatter('\x1b[35m', '\x1b[39m') : String
export const cyan = COLORS_SUPPORTED ? formatter('\x1b[36m', '\x1b[39m') : String
export const white = COLORS_SUPPORTED ? formatter('\x1b[37m', '\x1b[39m') : String
export const gray = COLORS_SUPPORTED ? formatter('\x1b[90m', '\x1b[39m') : String
export const bgBlack = COLORS_SUPPORTED ? formatter('\x1b[40m', '\x1b[49m') : String
export const bgRed = COLORS_SUPPORTED ? formatter('\x1b[41m', '\x1b[49m') : String
export const bgGreen = COLORS_SUPPORTED ? formatter('\x1b[42m', '\x1b[49m') : String
export const bgYellow = COLORS_SUPPORTED ? formatter('\x1b[43m', '\x1b[49m') : String
export const bgBlue = COLORS_SUPPORTED ? formatter('\x1b[44m', '\x1b[49m') : String
export const bgMagenta = COLORS_SUPPORTED ? formatter('\x1b[45m', '\x1b[49m') : String
export const bgCyan = COLORS_SUPPORTED ? formatter('\x1b[46m', '\x1b[49m') : String
export const bgWhite = COLORS_SUPPORTED ? formatter('\x1b[47m', '\x1b[49m') : String
