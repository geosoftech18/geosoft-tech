'use client';
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
} from '@radix-ui/react-dialog';
import { CgClose } from 'react-icons/cg';

interface IProps {
  trigger?: React.ReactElement;
  open?: boolean;
  onChange?: (value: boolean) => void;
}

const Dialog: React.FCC<IProps> = ({ open, onChange, trigger, children }) => (
  <Root open={open} onOpenChange={onChange}>
    {children && <Trigger asChild>{trigger}</Trigger>}
    <Portal>
      <Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-black/40" />
      <Content className="fixed left-0 z-50 flex w-full flex-col rounded-[6px] data-[state=open]:animate-side-in-top focus:outline-none max-sm:bottom-0 sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:data-[state=open]:animate-slide-in-from-right-bottom lg:w-full lg:max-w-4xl">
        <Close className="absolute right-5 top-5 aspect-square w-max self-end rounded-full bg-white p-2">
          <CgClose className="text-3xl text-black" />
        </Close>
        {children}
      </Content>
    </Portal>
  </Root>
);

export default Dialog;
