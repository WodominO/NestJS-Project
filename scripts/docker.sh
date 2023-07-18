#!/bin/bash
set -eo pipefail

compose_select=$2
case "$compose_select" in
  "dev")
  compose_files="-f docker/docker-compose.yml -f docker/docker-compose.dev.yml";;
  "")
  compose_files="-f docker/docker-compose.yml";;
  *) 
    echo "Unsuported second param, use 'dev' or leave it empty"
    exit
esac

docker_command=$1
case "$docker_command" in
  "up") 
    docker-compose $compose_files up -d
    docker-compose $compose_files logs -f --tail 100;;
  "logs")
    docker-compose $compose_files logs -f --tail 100;;
  "stop")
    docker-compose $compose_files stop;;
  "down")
    docker-compose $compose_files down;;
  *) 
    echo "Unsuported first param, use 'up', 'logs', 'stop' or 'down'"
    exit
esac
