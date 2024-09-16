'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { folderFormSchema } from '@/schema/folderFormSchema';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { DialogClose } from '@/components/ui/Dialog';
import { createFolderAction } from '@/app/(private)/actions';

type Props = {
  folder?: {
    name: string;
  };
  onSuccess: () => void;
};

export const FolderForm = ({ folder, onSuccess }: Props) => {
  const form = useForm<z.infer<typeof folderFormSchema>>({
    resolver: zodResolver(folderFormSchema),
    defaultValues: folder ?? {
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof folderFormSchema>) => {
    const action = createFolderAction;
    const data = await action(values);
    console.log('onSubmit', data);

    if (data?.error) {
      form.setError('root', {
        message: 'There was an error saving your event',
      });
    } else {
      onSuccess();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {form.formState.errors.root && (
          <div className="text-sm text-destructive">{form.formState.errors.root.message}</div>
        )}
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
