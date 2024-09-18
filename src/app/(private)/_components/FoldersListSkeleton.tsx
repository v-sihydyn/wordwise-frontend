export function FoldersListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <FolderSkeletonItem />
      <FolderSkeletonItem />
      <FolderSkeletonItem />
    </div>
  );
}

function FolderSkeletonItem() {
  return (
    <div className="flex animate-pulse justify-start gap-3 rounded-xl bg-secondary p-6 pl-4 pr-4">
      <div className="h-[32px]"></div>
    </div>
  );
}
