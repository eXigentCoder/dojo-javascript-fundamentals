'use strict'

// this:
const x = new Error('I was created using a function call!')
// has the same functionality as this:
const y = new Error('I was constructed via the "new" keyword!')

throw x
