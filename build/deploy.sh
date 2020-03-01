
#!/usr/bin/env sh

set -e


docker rmi -f registry.cn-hangzhou.aliyuncs.com/docker_ding/test

npm install

npm run build

GITVER=$(git rev-list HEAD -n 1 | cut -c 1-)

echo ${GITVER}

docker build -t registry.cn-hangzhou.aliyuncs.com/docker_ding/test:${GITVER} .

docker push registry.cn-hangzhou.aliyuncs.com/docker_ding/test:${GITVER}

docker run -p 80:80 --name test -d registry.cn-hangzhou.aliyuncs.com/docker_ding/test:${GITVER}

echo '-------部署成功---------'