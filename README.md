### Config

#### CORS

Type: Array | undefined

* if undefined: no CORS for all
* is an empty array ([]): CORS for all
* if an array: use white-list CORS control

#### Router

Config of `koa-router`

##### Prefix

Type: String Uri

prefix of router uri, e.g `/api/v1/`

#### Port

Type: Number Port | Object

```json
port: 80
```

```json
{
    http: 80,
    https: 443
}
```

### Route

```JavaScript
routes: {
    get: {
        '/': async function () {
            // when route is a handler, path = routeName
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

### Request Params

```
Route /test/:id
```

```
Get /test/1
```

```JavaScript
get: {
    '/test/:id': async function (ctx, { params }) {
      console.log(ctx.params.id) // '1'
      console.log(params) // '1'
    }
  }
```

### Request Body

```
Post / `{ id: 1 }`
```

```JavaScript
post: {
    '/': async function (ctx, { body }) {
      console.log(ctx.request.body.id) // '1'
      console.log(body.id) // '1'
    }
  }
```

### Request Query

*Not suggest for `Restful api`*

```
Get /?id=1
```

```JavaScript
get: {
    '/': async function (ctx, { query }) {
      console.log(query.id) // '1'
    }
  }
```

### Request Validate

*Validate base on `joi`*

```JavaScript
routes: {
    get: {
        'test': {
              path: '/',
              handler: async function (ctx, { query, $validate }) {
                await $validate(query, joi => joi.object({
                  // query should be an object, have and have only 'id', and its value should be 1, 2 or 3.
                  id: joi.any().valid(['1', '2', '3'])
                }))
                  .then(async err => {
                    if (err) return // error, $validate not pass
                    // success, do something
                  })
              }
            }
    }
}
```

### Memory Cache

`$cache` is a memory cache, base on `memory-cache`

```JavaScript
get: {
    '/': async function (ctx, { $cache }) {
      $cache.get('test') // null
      $cache.put('test', 1, 1000) // expired time in 'ms'
      $cache.get('test') // 1
      setTimeout(function () {
        $cache.get('test') // null
      }, 2000)
    }
  }
```

##### Cache extend `$cache.auto`

```JavaScript
get: {
    '/': async function (ctx, { $cache }) {
      ctx.response.body = await $cache.auto('test', 60000, async function () {
        // if no cache found
        const response = await $request('http://...')
        return response.body // set cache and return result
      })
    },
    '/test': async function (ctx, { $cache }) {
      ctx.response.body = await $cache.auto('test', 60000, { test: 1 })
      // the 3rd args can also be a value
    }
  }
```

