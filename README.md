# Prueba de evaluación de tokenizacion de tarjetas
El proyecto de tokenización ha sido elaborado usando TypeScript como codigo,
Serverless Framework para poder crear la infraestructura en AWS tales como:
las dos funciones lambda (getToken , getCard), el ApiGateWay que exponen los dos metodos mencionados sobre las funciones lambda y el RDS que sera utilizado para almacenar los datos de las tarjetas y los tokens generados. 

# Pasos para la ejecución del Proyecto

1. Configurar el ambiente local para poder acceder hacia AWS
```sh
aws configure
```
Se deben colocal las credenciales de AWS tales como el AccessKey y el SecretKey

2. Para la ejecucion en local se usara los siguientes paquetes

```sh
sudo npm install -g serverless
npm install
serverless deploy
```

3. 
```sh
npm run build
npm run linter
npm run test
```

4. Para poder crear toda la infraestructura sobre AWS se deberá ejecutar el siguiente comando:
```sh
serverless deploy

![APIGT-GETCTOKEN](https://github.com/drjesusf/card-tokenization/assets/2379064/bf0059c3-0ce1-4d5f-9bb0-dd70049b2dc9)

```
