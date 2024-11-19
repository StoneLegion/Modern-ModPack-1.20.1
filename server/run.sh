#!/bin/bash
while true
do
/home/gtnh2041/jdk-17.0.11/bin/java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.3.12/unix_args.txt "$@"
    echo "If you want to completely stop the server process now, press Ctrl+C before the time is up!"
    echo "Rebooting in:"
    for i in 12 11 10 9 8 7 6 5 4 3 2 1
    do
        echo "$i..."
        sleep 1
    done
    echo "Rebooting now!"
done
