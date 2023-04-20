## Project installation

1. **Clone or download the project**

> You can download _**client**_ folder only if you don't need API server

2. **Configure client**

> You can edit API server endpoint inside _**/client/.env**_ :
*Set REACT_APP_API_MOCKING to true to use API data, overwise, set it to false for mocked data*

*Set REACT_APP_API_ROUTE to http://localhost:3001/ to use local API server, overwise feel free to set a custom API endpoint (for hosted server)*

3. **Start client**

> In a terminal, place yourself at the root of the project then run the following command :

```
cd client && npm run start
```

4. **Start server**

> In another terminal (or tab), place yourself at the root of the project then run the following command :

```
cd server && npm run start
```

> You can now access the app at [http://localhost:3000/](http://localhost:3000/)
