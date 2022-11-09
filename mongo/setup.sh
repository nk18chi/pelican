export DBTABLE="modern-mern-stack"
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection Products --drop --jsonArray  --file mongo/data/Products.json;
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection Plans --drop --jsonArray  --file mongo/data/Plans.json;
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection PlanOptions --drop --jsonArray  --file mongo/data/PlanOptions.json;
mongoimport --legacy --host mongodb --port 27017 --db $DBTABLE --collection Taxes --drop --jsonArray  --file mongo/data/Taxes.json;