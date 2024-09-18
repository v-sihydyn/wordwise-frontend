'use client';
import { FolderListItem } from '@/app/(private)/_components/FolderListItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { FolderForm } from '@/app/(private)/_components/FolderForm';
import { useState, useTransition } from 'react';
import { Folder } from '@/types/Folder';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/AlertDialog';
import { deleteFolderAction } from '@/app/(private)/actions';
import { useToast } from '@/hooks/use-toast';

export const FoldersList = ({ folders }: { folders: Folder[] }) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [folderForEdit, setFolderForEdit] = useState<Folder | undefined>();
  const [folderIdForDelete, setFolderIdForDelete] = useState<number | undefined>();
  const [isDeletePending, startDeleteTransition] = useTransition();
  const { toast } = useToast();

  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {folders.map((f, i) => (
          <FolderListItem
            key={i}
            name={f.attributes?.name ?? ''}
            onTriggerEdit={() => {
              setFolderForEdit(f);
              setEditModalOpen(true);
            }}
            onTriggerDelete={() => {
              setFolderIdForDelete(f.id);
              setDeleteModalOpen(true);
            }}
          />
        ))}
      </div>
      <Dialog
        open={editModalOpen}
        onOpenChange={(value) => {
          if (!value) {
            setFolderForEdit(undefined);
          }

          setEditModalOpen(value);
        }}
      >
        <DialogContent className="sm:max-w-[600px]" onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Edit folder</DialogTitle>
          </DialogHeader>
          <FolderForm folder={folderForEdit} onSuccess={() => setEditModalOpen(false)} />
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={deleteModalOpen}
        onOpenChange={(value) => {
          if (!value) {
            setFolderIdForDelete(undefined);
          }

          setDeleteModalOpen(value);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this folder.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={isDeletePending}
              onClick={() => {
                startDeleteTransition(() => {
                  if (!folderIdForDelete) return;

                  deleteFolderAction(folderIdForDelete).then((data) => {
                    if (data?.error) {
                      toast({
                        title: 'There was an error deleting folder',
                        duration: 5000,
                        variant: 'destructive',
                      });
                    }

                    setFolderIdForDelete(undefined);
                    setDeleteModalOpen(false);
                  });
                });
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
