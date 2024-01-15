import { readFileSync } from "fs";
import * as yaml from 'js-yaml';


const phase = process.env.NODE_ENV;

const path = `${process.cwd()}/envs`;
const envConfigFileName    = `${path}/${phase}.yaml`;
const commonConfigFileName = `${path}/common.yaml`;

const envConfig    : Record<string, any> = yaml.load( readFileSync(envConfigFileName,'utf-8'));
const commonConfig : Record<string, any> = yaml.load( readFileSync(commonConfigFileName,'utf-8'));

export default () => ({
    ...commonConfig,
    ...envConfig
})