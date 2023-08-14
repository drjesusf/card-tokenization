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

3. Pasos para realizar el build, ejecución del linter y la ejecucion de pruebas
```sh
npm run build
npm run linter
npm run test
```

4. Para poder crear toda la infraestructura sobre AWS se deberá ejecutar el siguiente comando:
```sh
serverless deploy

```
# Evidencia mostrando la creacion del recurso APIGATEWAY con el memtodo GETCARD
![APIGT-GETCARD](https://github.com/drjesusf/card-tokenization/assets/2379064/9db8561e-64e0-4a0e-9619-3240797c75fd)

# Evidencia mostrando la creacion del recurso APIGATEWAY con el memtodo GETTOKEN
![APIGT-GETCTOKEN](https://github.com/drjesusf/card-tokenization/assets/2379064/dc316d67-2bde-4491-b0cb-f5d0e0f46cdb)


# Evidencia mostrando la creacion del recurso APIGATEWAY mostrando el lambda GETCARD
![APIGT-GETCARD-DIAGRAMA](https://github.com/drjesusf/card-tokenization/assets/2379064/4acb4db8-77af-4203-8563-68485a90a98b)

# Evidencia mostrando la creacion del recurso APIGATEWAY mostrando el lambda GETTOKEN
![APIGT-GETTOKEN-DIAGRAMA](https://github.com/drjesusf/card-tokenization/assets/2379064/cde709e7-8698-4f7d-aa18-a60b1f7b0555)

# Evidencia mostrando la creacion del recurso lambda GETTOKEN
![lambda-GETCTOKEN](https://github.com/drjesusf/card-tokenization/assets/2379064/ca378a75-1eb1-4366-8154-3010f2435642)

# Evidencia mostrando la creacion del recurso lambda GETCARD

![lambda-GETCARD](https://github.com/drjesusf/card-tokenization/assets/2379064/1c3e8e88-6f22-43be-91fa-4e584356d17e)

# Evidencia mostrando la prueba sobre APIGATEWAY AWS del metodo GETTOKEN
![POSTMAN-GETCTOKEN](https://github.com/drjesusf/card-tokenization/assets/2379064/fb08b7db-404d-4c2a-af79-641e047204dd)

# Evidencia mostrando la prueba sobre APIGATEWAY AWS del metodo GETCARD

![POSTMAN-GETCARD](https://github.com/drjesusf/card-tokenization/assets/2379064/9d82f5be-243b-47b5-9356-d84c8d30bef0)

