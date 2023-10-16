# Picture API Spec

## Create Picture API

Endpoint : POST /api/users/:userId/uploads/picture

Header : 
- Authorization : token

Query Params :
- userId : Get current user (needed)

Request Body : 

```json
{
    "name" : "firga.jpg",
}
```

Response Body Success :

```json
{
    data: "OK"
}
```

Response Body Error :

```json
{
    errors: "Unknown image file format"
}
```

## Get Picture API

Endpoint : GET /api/users/:userId/picture/

Header : 
- Authorization : token

Query Params :
- userId : Get current user (needed)
- pictureId : Get user picture (needed)

Response Body Success :

```json
{
    image: "/folder/firga.jpeg"
}
```

Response Body Error :

```json
{
    errors: "Unknown image file format"
}
```

## Update Picture API

Endpoint : UPDATE /users/:userId/pictures/:pictureId

Header : 
- Authorization : token

Query Params :
- userId : Get current user (needed)
- pictureId : Get user picture (needed)

Request Body : 

```json
{
    "name" : "firga_2.jpg",
}
```

Response Body Success :

```json
{
    data: "OK"
}
```

Response Body Error :

```json
{
    errors: "Unknown image file format"
}
```

## Delete Picture API

Endpoint : DELETE /api/users/:userId/pictures/:pictureId

Header : 
- Authorization : token

Query Params :
- userId : Get current user (needed)
- pictureId : Get user picture (needed)

Response Body Success :

```json
{
    data: "OK"
}
```

Response Body Error :

```json
{
    errors: "Unauthorized"
}
```