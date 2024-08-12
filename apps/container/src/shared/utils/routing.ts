import { ReactNode } from 'react';
import { REMOTE_ROUTING_PREFIX } from '../constants/routing';
import { loadRemote } from '@module-federation/enhanced/runtime';

export class RoutingUtils {
  static moduleScopeName = 'Module';

  static getPathFromRoutingPrefix(prefix: REMOTE_ROUTING_PREFIX) {
    return `${prefix}/*`;
  }

  static getRemoteModuleRouteObject(args: {
    prefix: REMOTE_ROUTING_PREFIX;
    element: ReactNode;
  }) {
    const { prefix, element } = args;
    return {
      path: this.getPathFromRoutingPrefix(prefix),
      element,
      loader: async () => await loadRemote(`${prefix}/${this.moduleScopeName}`),
    };
  }
}
