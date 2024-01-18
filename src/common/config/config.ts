import { Logger } from "@nestjs/common";
import { readFileSync } from "fs";
import * as yaml from 'js-yaml';

const logger = new Logger();
const phase = process.env.NODE_ENV;

const path = `${process.cwd()}/envs`;
const envConfigFileName    = `${path}/${phase}.yaml`;
const commonConfigFileName = `${path}/common.yaml`;

const commonConfig : Record<string, any> = yaml.load( readFileSync(commonConfigFileName,'utf-8'));
const envConfig    : Record<string, any> = yaml.load( readFileSync(envConfigFileName,'utf-8'));

logger.log(`envConfig ts >> ${envConfig}`);
export default () => ({
    ...commonConfig,
    ...envConfig
})