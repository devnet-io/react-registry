# Arguments
Most react-registry functions accept either an id string or an object as arguments. The object is composed of [these common terms](overview#common-terms).

| Option     | Type   | Required | Description                                                          |   |
|------------|--------|----------|----------------------------------------------------------------------|---|
| id         | string | **yes**      | Id use to register or retrieve component                             |   |
| conditions | object | no       | Object containing any fields. ex: {foo: "bar", alpha: "omega"}       |   |
| registry   | string | no       | Name of the registry to register components in or retrieve them from |   |

Valid arguments:
```js
"myId"

{id: "myId"}

{id: "myId", conditions: {foo: "bar"}}

{id: "myId", registry: "my-registry-name"}

{id: "myId", conditions: {foo: "bar"}, registry: "my-registry-name"}}
```
