export DBTABLE="modern-mern-stack"
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection Users --drop --jsonArray  --file mongo/data/Users.json;
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection Products --drop --jsonArray  --file mongo/data/Products.json;