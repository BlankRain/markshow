cid=$(docker ps |grep markshow |awk '{print $1}'|xargs echo)
echo $cid
docker exec $cid /bin/bash -c "cd /markshowppts && git pull && exit"
