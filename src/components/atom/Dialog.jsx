import * as React from 'react';
import * as Ark from '@ark-ui/react';
import { X } from '@phosphor-icons/react';
import cn from '../../utils/cn';

export const Dialog = Ark.DialogRoot;
export const DialogTrigger = Ark.DialogTrigger;
export const DialogCloseTrigger = Ark.DialogCloseTrigger;

export const DialogHeader = ({ className, children, ...props }) => {
  return (
    <div className={cn('flex flex-col gap-y-1 w-full p-5', className)} {...props}>
      {children}
    </div>
  );
};

export const DialogFooter = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex justify-end items-center gap-x-3 px-5 py-4 border-t border-slate-300',
        className
      )}
      {...props}>
      {children}
    </div>
  );
};

export const DialogTitle = React.forwardRef(({ className, ...props }, ref) => {
  return <Ark.DialogTitle ref={ref} className={cn('font-bold', className)} {...props} />;
});

export const DialogDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('font-medium text-sm text-slate-600', className)} {...props} />
  );
});

export const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Ark.Portal>
      <Ark.DialogBackdrop
        className={cn(
          'fixed z-30 inset-0 bg-slate-900/70',
          'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:duration-200',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-200'
        )}
      />
      <Ark.DialogPositioner className="relative z-40 inset-0 [&:not([hidden])]:flex items-center justify-center">
        <Ark.DialogContent
          ref={ref}
          className={cn(
            'data-[state=open]:relative data-[state=open]:flex data-[state=open]:flex-col data-[state=open]:mx-6 data-[state=open]:outline-none data-[state=open]:rounded-lg data-[state=open]:bg-white data-[state=open]:shadow-lg',
            'data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=open]:fade-in data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            className
          )}
          {...props}>
          {children}
          <Ark.DialogCloseTrigger className="absolute right-5 top-6 focus:outline-none hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-all duration-300">
            <X className="w-5 h-5 text-slate-700" weight="bold" />
            <span className="sr-only">Close</span>
          </Ark.DialogCloseTrigger>
        </Ark.DialogContent>
      </Ark.DialogPositioner>
    </Ark.Portal>
  );
});
