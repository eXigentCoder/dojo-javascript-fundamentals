'use strict'

switch (someVariable) {
    case 1: //will "fall through"
    case 2:
        // do something
        break
    case 7:
        // do some other thing
        break
    case 42:
        {
            //do a whole block of things
        }
        break
    default:
    // default to here if none of the cases match
}
