# Proof of Concept (PoC) Project

This repository contains a proof-of-concept project with the following components:
- **Front-end**: Angular 18.1.4 application located in the `front` directory.
- **Back-end**: Spring Boot 3.3.2 application located in the `back` directory.
- **Database**: PostgreSQL:latest managed by Docker Compose.

## Pre-requisites

Before you begin, ensure you have the following installed:

1. **Node.js** (version 16 or higher) - [Download Node.js](https://nodejs.org/)
2. **Java JDK 21** - [Download JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
3. **Maven** (version 4.0 or higher) - [Download Maven](https://maven.apache.org/download.cgi)
4. **Docker** - [Install Docker](https://www.docker.com/products/docker-desktop)
5. **Angular CLI** - To install or update Angular CLI, run:
   ```bash
   npm install -g @angular/cli
    ```

## Project Setup

### 1. Start the PostgreSQL database using Docker Compose
   ```bash
     docker-compose up
   ```
### 2. Set Up the Back-end
   ```bash
      cd back
      mvn install
   ```
### 3. Set Up the Front-end
   ```bash
      cd front
      npm install
      npm start
   ```

### 4. Access in your browser
[http://localhost:4200](http://localhost:4200)
