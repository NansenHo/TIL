# Docker Commands


- 
- `docker ps`：列出正在运行的容器。
- `docker ps -a`：列出所有容器，包括未运行的。
- `docker stop [CONTAINER_NAME/ID]`：停止一个正在运行的容器。
- `docker start [CONTAINER_NAME/ID]`：启动一个已停止的容器。
- `docker logs [CONTAINER_NAME/ID]`：查看容器的日志输出。
- `docker exec -it [CONTAINER_NAME/ID] [COMMAND]`：在运行的容器中执行命令。
  例如，`docker exec -it my-mysql bash` 会启动一个 `bash shell` 在你的 `"my-mysql"` 容器中。
