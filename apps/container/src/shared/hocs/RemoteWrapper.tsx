import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  mountFunc: any;
  remoteAppName: string;
}

export const RemoteAppWrapper = ({ mountFunc, remoteAppName }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const remoteAppBaseName = useRef<string>(`/${remoteAppName}`);

  // Listen to navigation events dispatched inside remote remote app.
  useEffect(() => {
    const remoteAppNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${remoteAppBaseName.current}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      `[${remoteAppName}] navigated`,
      remoteAppNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        `[${remoteAppName}] navigated`,
        remoteAppNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for container location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(remoteAppBaseName.current)) {
      window.dispatchEvent(
        new CustomEvent("[container] navigated", {
          detail: location.pathname.replace(remoteAppBaseName.current, ""),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);

  // Mount remote app
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }

    mountFunc({
      mountPoint: wrapperRef.current!,
      initialPathname:
        location.pathname.replace(remoteAppBaseName.current, "") +
          location.search ?? "",
    });

    isFirstRunRef.current = false;
  }, [location]);

  return <div ref={wrapperRef} id={`${remoteAppName}-mfe`} />;
};
