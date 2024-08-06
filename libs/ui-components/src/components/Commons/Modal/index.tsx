import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  mergeClasses,
} from '@fluentui/react-components';
import { ModalProps } from './types';
import { useModalActionsBaseStyles, useModalBaseStyles, useModalStyles } from './style';
import { CloseIcon } from '@/components/Icons';

export const Modal = ({
  size = 'small',
  modal,
  title,
  children,
  actions,
  hasCloseIcon = true,
  ...restProps
}: ModalProps) => {
  const modalBaseClassName = useModalBaseStyles();
  const modalActionsClassName = useModalActionsBaseStyles();
  const modalClassNames = useModalStyles();

  return (
    <Dialog
      open={modal.isOpen}
      {...restProps}
    >
      <DialogSurface
        className={mergeClasses(
          modalBaseClassName,
          size === 'xsmall' && modalClassNames.xsmall,
          size === 'small' && modalClassNames.small,
          size === 'medium' && modalClassNames.medium,
          size === 'large' && modalClassNames.large,
        )}
      >
        <DialogBody>
          <DialogTitle
            action={
              hasCloseIcon ? (
                <Button
                  appearance='subtle'
                  icon={<CloseIcon />}
                  onClick={modal.hide}
                />
              ) : null
            }
          >
            {title}
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
          {actions && <DialogActions className={modalActionsClassName}>{actions}</DialogActions>}
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
