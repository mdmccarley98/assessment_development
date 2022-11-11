# Distributed Computing 1: docker logs


## Item ID
2084

## Claim
-   Claim: 1


## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]


## Claim Behavior (evidence)
```
~/Dev/triplebyte-assessment/devops/4-docker-logs/example % docker-compose up
Docker Compose is now in the Docker CLI, try `docker compose up`

Creating example_cache_1 ... done
Creating example_app_1   ... done
Attaching to example_cache_1, example_app_1
app_1    | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
app_1    | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
cache_1  | 1:C 05 May 2021 19:13:22.867 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
cache_1  | 1:C 05 May 2021 19:13:22.867 # Redis version=6.2.3, bits=64, commit=00000000, modified=0, pid=1, just started
cache_1  | 1:C 05 May 2021 19:13:22.867 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
app_1    | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
cache_1  | 1:M 05 May 2021 19:13:22.868 * monotonic clock: POSIX clock_gettime
app_1    | 10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
cache_1  | 1:M 05 May 2021 19:13:22.868 * Running mode=standalone, port=6379.
cache_1  | 1:M 05 May 2021 19:13:22.868 # Server initialized
cache_1  | 1:M 05 May 2021 19:13:22.869 * Ready to accept connections
app_1    | 10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
app_1    | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
app_1    | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
app_1    | /docker-entrypoint.sh: Configuration complete; ready for start up
^CGracefully stopping... (press Ctrl+C again to force)
Stopping example_app_1   ... done
Stopping example_cache_1 ... done
~/Dev/triplebyte-assessment/devops/4-docker-logs/example % docker ps -a
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS                     PORTS     NAMES
aced669ccd1a   example_app   "/docker-entrypoint.…"   16 seconds ago   Exited (0) 5 seconds ago             example_app_1
fcfa6dbad8ed   redis         "docker-entrypoint.s…"   18 seconds ago   Exited (0) 4 seconds ago             example_cache_1
~/Dev/triplebyte-assessment/devops/4-docker-logs/example % docker logs aced669ccd1a
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
```


## Content Target
docker


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You are troubleshooting an app that uses `docker-compose`.
The app exited after encountering an error.

When you type `docker ps -a` this is what is printed:
```
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS                       PORTS     NAMES
3771dfc4a5f7   example_app   "/docker-entrypoint.…"   34 seconds ago   Exited (137) 7 seconds ago             example_app_1
391b7ef9c9f7   redis         "docker-entrypoint.s…"   34 seconds ago   Exited (0) 7 seconds ago               example_cache_1
```

Which of the following commands will display the logs from the app container that crashed?


## Code Snippet (optional)



## Answer Key
```
docker logs 3771dfc4a5f7
```


## Distractors
### 1.
```
docker run --rm -it example_app
```


### 2.
```
docker logs example_app
```


### 3.
```
docker start -a 3771dfc4a5f7
```

## Common errors, misconceptions, or irrelevant information:

1. this creates a new container from the image `example_app`
2. `example_app` is the image name, the container name is `example_app_1`, so this command prints an error: `Error: No such container: example_app`.  Knowing the difference between a container name and an image name is critical to using docker.
3. this will restart the container, new logs will be printed, but it won't show you the logs from when it crashed.

The redis cache container is irrelevant to this example.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

