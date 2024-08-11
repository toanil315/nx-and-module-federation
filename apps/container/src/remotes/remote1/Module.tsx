import { REMOTE_ROUTING_PREFIX } from '@/shared/constants/routing';
import { RemoteAppWrapper } from '@/shared/hocs/RemoteWrapper';
import { useDynamicImport } from '@/shared/hooks/useDynamicImport';

const Remote1 = () => {
  const mountFunc = useDynamicImport({
    module: REMOTE_ROUTING_PREFIX.REMOTE1,
    scope: 'Module',
  });

  return (
    mountFunc && (
      <RemoteAppWrapper
        mountFunc={mountFunc}
        remoteAppName={REMOTE_ROUTING_PREFIX.REMOTE1}
      />
    )
  );
};

export default Remote1;
