
#!/usr/bin/env sh

set -e

GITVER_PRE=$(git rev-list HEAD^ -n 1 | cut -c 1-)

GITVER_CURR=$(git rev-list HEAD -n 1 | cut -c 1-)

docker kill ding

docker rm -f ding 

docker system prune -f

docker pull registry.cn-hangzhou.aliyuncs.com/docker_ding/test:${GITVER_CURR}

docker run -p 80:80 --name ding -d registry.cn-hangzhou.aliyuncs.com/docker_ding/test:${GITVER_CURR}

echo '-------部署成功---------'