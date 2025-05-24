import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  //   DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/atom/Dialog';

const DialogLogin = ({ open, setOpen, title, description, children }) => {
  return (
    <Dialog open={open} onOpenChange={(event) => setOpen(event.open)}>
      <DialogContent className="w-[36rem]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl mt-5">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {/* <DialogFooter>Dialog footer</DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default DialogLogin;
