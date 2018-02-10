'use strict'
let foo = {
    a: 42
}

// create `bar` and link it to `foo`
let bar = Object.create(foo)

bar.b = 'hello world'

bar.b // "hello world"
bar.a // 42 <-- delegated to `foo`
foo.a = 67
bar.a // 67 <-- delegated to `foo`
