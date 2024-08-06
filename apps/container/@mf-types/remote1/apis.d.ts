
    export type RemoteKeys = 'remote1/Module';
    type PackageType<T> = T extends 'remote1/Module' ? typeof import('remote1/Module') :any;