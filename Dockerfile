# This is a markshow dockerfile
FROM node:latest
MAINTAINER Blank Rain <http://github.com/blankrain>
RUN apt-get install -y  curl
RUN apt-get install -y git
RUN apt-get install -y git-core
RUN git clone https://github.com/blankrain/markshow
RUN git clone https://github.com/blankrain/markshowppts
WORKDIR markshow
RUN npm install --registry=https://registry.npm.taobao.org
RUN pwd
CMD node ./bin/markshow start -p 9527 -d ../markshowppts -H 0.0.0.0
EXPOSE 9527
# docker build markshow .
# docker run -d -p 9527:9527 markshow
