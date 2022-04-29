import { App } from 'vue';
import { GlobalConfig } from './types';
export declare const GLOBAL_CONFIG: unique symbol;
export declare const GlobalConfigPlugin: {
    install(app: App, options?: GlobalConfig | undefined): void;
};
