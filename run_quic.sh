#!/bin/sh
sudo ./quic_server --port=443 --quic_in_memory_cache_dir=. --certificate_file=/home/ohtsu/tmp/certs/bundle.crt  --key_file=/home/ohtsu/tmp/certs/serverkey.pkcs8
