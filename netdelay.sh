#!/bin/sh
sudo tc qdisc add dev eth1 root netem delay 1000ms 
