'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { FolderForm } from '@/app/(private)/_components/FolderForm';
import { useState } from 'react';

export const CreateFolderButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={true} onClick={() => setOpen(true)}>
        <Button variant="outline">New folder</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create new folder</DialogTitle>
        </DialogHeader>
        <FolderForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
