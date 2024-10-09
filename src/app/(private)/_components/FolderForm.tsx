import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { folderFormSchema } from '@/schema/folderFormSchema';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { DialogClose } from '@/components/ui/Dialog';
import { createFolderAction, editFolderAction } from '@/app/(private)/folderActions';
import { Folder } from '@/types/Folder';
import { useToast } from '@/hooks/use-toast';

type Props = {
  folder?: Folder;
  onSuccess: () => void;
};

export const FolderForm = ({ folder, onSuccess }: Props) => {
  const form = useForm<z.infer<typeof folderFormSchema>>({
    resolver: zodResolver(folderFormSchema),
    defaultValues: {
      name: folder?.attributes?.name ?? '',
    },
  });
  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof folderFormSchema>) => {
    const action = folder?.id ? editFolderAction.bind(null, folder.id) : createFolderAction;
    const data = await action(values);

    if (data?.error) {
      toast({
        title: 'There was an error saving folder',
        duration: 5000,
        variant: 'destructive',
      });
    } else {
      onSuccess();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          <DialogClose asChild={true}>
            <Button disabled={form.formState.isSubmitting} type="button" asChild variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button disabled={form.formState.isSubmitting} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};
