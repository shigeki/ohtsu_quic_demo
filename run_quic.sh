#!/bin/sh
sudo /home/ohtsu/github/proto-quic/src/out/Default/quic_server --port=443 --user-data-dir=/tmp/chrome-profile --quic_in_memory_cache_dir=./cache --certificate_file=/home/ohtsu/github/ohtsuCA/ohtsu_org.cert --key_file=/home/ohtsu/github/ohtsuCA/ohtsu_org.pkcs8
