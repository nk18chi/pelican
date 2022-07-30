docker volume prune -f
docker image prune -f
sudo systemctl start docker
sudo docker-compose -f /home/ec2-user/stripe-payment-app/docker-compose.yml down
sudo docker-compose -f /home/ec2-user/stripe-payment-app/docker-compose.yml up -d --build