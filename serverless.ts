import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import {getToken} from '@functions/getToken'
import {getCard} from '@functions/getCard'

const serverlessConfiguration: AWS = {
  service: 'stack-card-tokenization',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        statements: [{
          Effect: "Allow",
          Action: [
            "dynamodb:DescribeTable",
            "dynamodb:Query",
            "dynamodb:Scan",
            "dynamodb:GetItem",
            "dynamodb:PutItem",
            "dynamodb:UpdateItem",
            "dynamodb:DeleteItem",
          ],
          Resource: "arn:aws:dynamodb:us-east-1:*:table/CardTable",
        }],
      },
    },
  },
  // import the function via paths
  functions: { hello, getToken, getCard },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      CardTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "CardTable",
          BillingMode: "PAY_PER_REQUEST",
          TimeToLiveSpecification:{
            AttributeName : "TimeToLive",
            Enabled : true
          },
          AttributeDefinitions: [{
            AttributeName: "cardId",
            AttributeType: "S",
          }],
          KeySchema: [{
            AttributeName: "cardId",
            KeyType: "HASH"
          }]
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
