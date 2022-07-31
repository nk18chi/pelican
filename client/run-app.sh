if [ $NODE_ENV = 'development' ]
then
    yarn dev-and-storybook
else
    yarn build-and-start
fi