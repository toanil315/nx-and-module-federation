import { loadRemote } from "@module-federation/enhanced/runtime";
import { useEffect, useState } from "react";

interface UseDynamicImportProps {
  module: string;
  scope: string;
}

type MountFunction = (args: {
  mountPoint: HTMLDivElement;
  initialPathname: string;
}) => void;

export const useDynamicImport = ({ module, scope }: UseDynamicImportProps) => {
  const [mountFunc, setMountFunc] = useState<MountFunction | null>(null);

  useEffect(() => {
    if (!module || !scope) return;

    const loadComponent = async () => {
      try {
        const { mount } = (await loadRemote(`${module}/${scope}`)) as {
          mount: MountFunction;
        };
        setMountFunc(() => mount);
      } catch (error) {
        console.error(`Error loading remote module ${module}/${scope}:`, error);
      }
    };

    loadComponent();
  }, [module, scope]);

  return mountFunc;
};
