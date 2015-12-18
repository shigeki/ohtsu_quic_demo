#!/bin/sh
sudo tc qdisc del dev eth1 root netem
