#!/bin/sh
sudo ./quic_server --port=443 --user-data-dir=/tmp/chrome-profile --quic_response_cache_dir=/home/ohtsu/github/ohtsu_quic_demo/cache/ --certificate_file=/home/ohtsu/github/ohtsuCA/ohtsu_org.cert --key_file=/home/ohtsu/github/ohtsuCA/ohtsu_org.pkcs8
