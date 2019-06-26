# Happy Hour 

This is a personal project featuring client React [app](https://github.com/quangChe/happy-hour-app) with a separate Node [API](https://github.com/quangChe/happy-hour-api). These two separate apps and a test suite were built into separate containers using Docker. 


# Getting Started

The client app and the API can both be initiated only after the specified images referenced in the docker-compose.yml file have already been built. 

See each of the build process here: 
  - [App](https://github.com/quangChe/happy-hour-app) 
  - [API](https://github.com/quangChe/happy-hour-api)

Once these images have been built, then the app and API can be started using the docker-compose CLI.

```
docker-compose up
```

- The app will be running on: `localhost:3000`
- The API can be called on: `localhost:9000`
