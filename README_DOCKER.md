# frontend-react-nextjs

# Setting version

```bash
export APP_VERSION=1.0.0
```

## Build Docker image

Run this command:

```bash
cd Entrega-RecodePro-Modulo-6/Frontend/explore-descubra
docker build -t your_dockerhub_username/explore-descubra:$APP_VERSION .
```

# Send Docker image to Docker hub

Run theses commands:

```bash
docker login -u your_dockerhub_username

docker push your_dockerhub_username/explore-descubra:$APP_VERSION
```

## Pull Docker image

Run this command:

```bash
docker pull your_dockerhub_username/explore-descubra:$APP_VERSION
```

## Create container

Run this command:

```bash
docker run -d -p 3000:3000 --rm --name explore-descubra your_dockerhub_username/explore-descubra:$APP_VERSION
```

Access http://DOCKER_HOST_IP:3000 in browser.