[![ci-build](https://github.com/to4kin/dev-school-front-app/actions/workflows/ci-build.yml/badge.svg?branch=main)](https://github.com/to4kin/dev-school-front-app/actions/workflows/ci-build.yml)
[![GitHub release](https://img.shields.io/github/release/to4kin/dev-school-front-app.svg)](https://GitHub.com/to4kin/dev-school-front-app/releases/)

# dev-school-front-app
Frontend part of dev school application.

## Installation
### Precondition
List of required tools:

* NODE v14.15.0
* Yarn v1.22.11
* Gradle v6.7.1 or gradlew
* Java 8
* 

### Build

Use gradle inside root folder for app build.

```bash
gradlew build
```

## Deploy

By default deployable JAR file can be found in
```bash
devschool-front-app-server/build/libs
```

Simple deploy can be done by java jar command.
```bash
java -jar devschool-front-app-server-1.0.0.jar
```

Possible deploy flags:
```bash
-port=<port> port of application deploy
-P:ktor.backend.port=<port> port of backend application
-P:ktor.backend.host=<host> address of backend application     
-P:ktor.backend.schema=<schema> schema of backend application   
```

Address of start page is <b>/dev-ops-school/index.html</b>
