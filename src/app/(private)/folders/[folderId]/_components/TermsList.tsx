'use client';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/DropdownMenu';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { TermListItem } from '@/types/Term';
import React, { useState, useTransition } from 'react';
import { useToast } from '@/hooks/use-toast';
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
import { deleteTermAction } from '@/app/(private)/folders/[folderId]/terms/termActions';
import { HighlightText } from '@/components/HighlightText/HighlightText';

export function TermsList({
  terms,
  folderId,
  searchQuery,
}: {
  terms: TermListItem[];
  folderId: number;
  searchQuery: string;
}) {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [termIdForDelete, setTermIdForDelete] = useState<number | undefined>();
  const [isDeletePending, startDeleteTransition] = useTransition();
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-2">
      {terms.map((t) => {
        const meanings = t.attributes?.meanings ?? [];
        const firstMeaning = meanings[0];
        const restMeaningsLength = meanings.length - 1;

        return (
          <div key={t.id} className="flex min-h-[72px] items-center justify-between gap-4 bg-[#111518] px-4 py-2">
            <div className="flex flex-col justify-center">
              <Link href={`/folders/${folderId}/terms/${t.id}`}>
                <p className="line-clamp-1 text-base font-medium leading-normal text-white">
                  <HighlightText text={t.attributes?.value ?? ''} searchTerm={searchQuery} />
                </p>
              </Link>
              {firstMeaning ? (
                <div className="flex">
                  <p className="line-clamp-2 text-base font-normal leading-normal text-[#9cacba]">
                    {firstMeaning.text}{' '}
                    {restMeaningsLength > 0 && (
                      <span className="line-clamp-2 text-sm font-normal leading-normal text-[#9cacba]">
                        and {restMeaningsLength} more meanings
                      </span>
                    )}
                  </p>
                </div>
              ) : null}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="ml-auto flex h-8 w-8 flex-shrink-0 items-center justify-center whitespace-nowrap rounded-md p-0 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild={true}>
                  <Link href={`/folders/${folderId}/terms/${t.id}/edit`}>Edit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setTermIdForDelete(t.id);
                    setDeleteModalOpen(true);
                  }}
                  className="cursor-pointer text-red-800"
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      })}

      <AlertDialog
        open={deleteModalOpen}
        onOpenChange={(value) => {
          if (!value) {
            setTermIdForDelete(undefined);
          }

          setDeleteModalOpen(value);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this term.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={isDeletePending}
              onClick={() => {
                startDeleteTransition(() => {
                  if (!termIdForDelete) return;

                  deleteTermAction(termIdForDelete, folderId).then((data) => {
                    if (data?.error) {
                      toast({
                        title: 'There was an error deleting term',
                        duration: 5000,
                        variant: 'destructive',
                      });
                    }

                    setTermIdForDelete(undefined);
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
    </div>
  );
}
