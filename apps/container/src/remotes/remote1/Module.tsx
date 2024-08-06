import { REMOTE_ROUTING_PREFIX } from "@/shared/constants/routing";
import { RemoteAppWrapper } from "@/shared/hocs/RemoteWrapper";
import { useDynamicImport } from "@/shared/hooks/useDynamicImport";
import { Suspense } from "react";

const Remote1 = () => {
  const mountFunc = useDynamicImport({
    module: REMOTE_ROUTING_PREFIX.REMOTE1,
    scope: "Module",
  });

  return (
    <Suspense fallback={<p>Loading remote 1...</p>}>
      {mountFunc && (
        <RemoteAppWrapper
          mountFunc={mountFunc}
          remoteAppName={REMOTE_ROUTING_PREFIX.REMOTE1}
        />
      )}
    </Suspense>
  );
};

export default Remote1;
