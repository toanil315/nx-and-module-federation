import { REMOTE_ROUTING_PREFIX } from "../constants/routing";

export class RoutingUtils {
  static getPathFromRoutingPrefix(prefix: REMOTE_ROUTING_PREFIX) {
    return `${prefix}/*`;
  }
}
