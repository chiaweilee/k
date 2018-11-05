### Config

#### cors

Type: Array | undefined

* if undefined: no cors for all
* is an empty array ([]): cors for all
* if an array: use white-list cors control

### Route

```JavaScript
routes: {
    get: {
        '/': function () {
            // handler
        },
        'routeName': {
            path: '/test/:id',
            handler () {
                // handler
            }
        }
    },
    post: {}
}
```

### Params

```
Get /test/1
```

```JavaScript
get: {
    '/test/:id': function (ctx, { params }) {
      console.log(ctx.params.id) // '1'
      console.log(params) // '1'
    }
  }
```

### Body

```
Post / `{ id: 1 }`
```

```JavaScript
post: {
    '/': function (ctx, { params, body }) {
      console.log(ctx.request.body.id) // '1'
      console.log(body.id) // '1'
    }
  }
```

### Query

*Not suggest*

```
Get /?id=1
```

```JavaScript
get: {
    '/': function (ctx, { query }) {
      console.log(query.id) // '1'
    }
  }
```

### Validate

```JavaScript
routes: {
    get: {
        'test': {
              path: '/',
              handler: function (ctx, { query, validate }) {
                validate(query, joi => joi.object({
                  // query should be an object, have and have only 'id', and its value should be 1, 2 or 3.
                  id: joi.any().valid(['1', '2', '3'])
                }))
                  .then(() => {
                    // success, do something
                  })
              }
            }
    }
}
```
