if [ $# -eq 0 ]   
  then     
    echo "No arguments supplied" 
  else 
    db-migrate create "$1" 
    chmod -R 777 migrations
fi
