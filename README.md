# NestJS project

## Docker
  To run project in docker with dev mode you can use:  
  - direct command as: `docker-compose -f docker/docker-compose.yml -f docker/docker-compose.dev.yml up -d`.
  - script: `bash scripts/docker.sh` - this script.


## Scripts

### docker.sh
  Script used to run app in docker.

  Params:
  - `$1` first param is used for docker command. Supported values `up`, `logs`, `stop` or `down`.
    - `up` - run docker-compose up and logs.
    - `logs` - run docker-compose logs.
    - `stop` - stop docker-compose.
    - `down` - stop and remove containers, networks.
  - `$2` **Optional** second param is used for select in which mode run app. Supported values `dev`
    - `dev` - runs app in dev mode by selecting `docker-compose.yml` and `docker-compose.dev.yml`.
    - **empty** - runs app in standard mode by selecting  only `docker-compose.yml`
