# with the same dir as  Dockerfile
docker build .
docker ps |grep markshow |awk '{print $1}'|xargs docker kill
docker run -d -p 9527:9527 markshow
