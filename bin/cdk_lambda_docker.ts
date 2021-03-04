#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaDockerStack } from '../lib/cdk_lambda_docker-stack';

const app = new cdk.App();
new CdkLambdaDockerStack(app, 'CdkLambdaDockerStack');
