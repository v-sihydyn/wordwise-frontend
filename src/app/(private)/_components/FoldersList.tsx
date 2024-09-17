'use client';
import { FolderListItem } from '@/app/(private)/_components/FolderListItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { FolderForm } from '@/app/(private)/_components/FolderForm';
import { useState } from 'react';
import { Folder } from '@/types/Folder';

export const FoldersList = ({ folders }: { folders: Folder[] }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [folderForEdit, setFolderForEdit] = useState<Folder | undefined>();

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {folders.map((f, i) => (
          <FolderListItem
            key={i}
            name={f.attributes?.name ?? ''}
            onTriggerEdit={() => {
              setFolderForEdit(f);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <Dialog
        open={open}
        onOpenChange={(value) => {
          if (!value) {
            setFolderForEdit(undefined);
          }

          setOpen(value);
        }}
      >
        <DialogContent className="sm:max-w-[600px]" onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Create new folder</DialogTitle>
          </DialogHeader>
          <FolderForm folder={folderForEdit} onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};
