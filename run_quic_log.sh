#!/bin/sh
sudo ./quic_server --port=443 --user-data-dir=/tmp/chrome-profile --quic_in_memory_cache_dir=./cache --certificate_file=/home/ohtsu/tmp/certs/bundle.crt  --key_file=/home/ohtsu/tmp/certs/serverkey.pkcs8 --v=1
