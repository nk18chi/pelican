if [ $NODE_ENV = 'development' ]
then
    yarn run dev
else
    yarn build-and-start
fi