import { SSTConfig } from 'sst';
import { StorageStack } from './stacks/StorageStack';
import { ApiStack } from './stacks/ApiStack';

export default {
    config(_input) {
        return {
            name: 'sst-predict5-project',
            region: 'us-east-1',
        };
    },
    stacks(app) {
        app.stack(StorageStack).stack(ApiStack);
    },
} satisfies SSTConfig;
