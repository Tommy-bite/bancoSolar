# APP CON PG

## CRUD USUARIOS

```sh
GET '/usuarios'
```

```sh
POST '/usuarios'

body: {
    "nombre" : "carlitos",
    "blance" : "500000",
}
```

```sh
PUT '/usuarios/:id'

body: {
    "nombre" : "nombre actualizado",
    "blance" : "balance actualizado",
}
```

```sh
DELETE '/usuarios/:id'

```

## GET Y POST TRANSFERENCIAS

```sh
GET '/transferencias'
```

```sh
POST '/transferencias'

body: {
    "emisor" : "carlitos",
    "receptor" : "juan",
    "monto" : "500000",
}
```
