import getConfig from 'next/config';

const {serverRuntimeConfig} = getConfig();

export const  PROJECT_ROOT = serverRuntimeConfig.PROJECT_ROOT
