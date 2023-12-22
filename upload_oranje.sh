#! /bin/bash

echo kill hm2
ssh -p 12233 filou@oranje.filounet.de "killall hm2"
echo copy hm2
scp -P 12233 bin/hm2 filou@oranje.filounet.de:/home/filou
echo run hm2
ssh -p 12233 filou@oranje.filounet.de "nohup /home/filou/hm2 1>hm2.log 2>hm2.err &"
#ssh -p 12233 filou@oranje.filounet.de "nohup /home/filou/hm2 1>hm2.log 2>hm2.err &"
ssh -p 12233 filou@oranje.filounet.de "cat /home/filou/hm2.log /home/filou/hm2.err"
echo upload done