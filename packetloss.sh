#!/bin/sh
sudo tc qdisc add dev eth1 root netem loss 25%
