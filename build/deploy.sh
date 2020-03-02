
#!/usr/bin/env sh

set -e

GITVER=$(git rev-list HEAD -n 1 | cut -c 1-)

docker kill ding

docker rm -f ding 

docker rmi -f registry.cn-hangzhou.aliyuncs.com/docker_ding/test:${GITVER}

docker run -p 80:80 --name ding -d registry.cn-hangzhou.aliyuncs.com/docker_ding/test:${GITVER}

echo '-------部署成功---------'