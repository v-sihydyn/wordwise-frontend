'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Card, CardContent } from '@/components/ui/Card';
import { Form as FormProvider, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/Form';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Textarea } from '@/components/ui/Textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { termFormSchema } from '@/schema/termFormSchema';
import { createTermAction } from '@/app/(private)/folders/[folderId]/terms/actions';

type Props = {
  folderId: number;
};

export const TermForm = ({ folderId }: Props) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof termFormSchema>>({
    defaultValues: {
      value: '',
      meanings: [{ text: '' }],
      examples: [],
      folderId,
    },
    resolver: zodResolver(termFormSchema),
  });

  const { control, handleSubmit } = form;

  const {
    fields: meaningFields,
    append: appendMeaning,
    remove: removeMeaning,
  } = useFieldArray({
    control,
    name: 'meanings',
  });

  const {
    fields: exampleFields,
    append: appendExample,
    remove: removeExample,
  } = useFieldArray({
    control,
    name: 'examples',
  });

  const onSubmit = async (values: z.infer<typeof termFormSchema>) => {
    const action = createTermAction;
    const data = await action(values, folderId);

    if (data?.error) {
      toast({
        title: 'There was an error saving term',
        duration: 5000,
        variant: 'destructive',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full space-y-6 p-6">
        <FormField
          control={control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Card>
          <CardContent className="pt-6">
            <Label>Meanings</Label>
            {meaningFields.map((field, index) => (
              <FormField
                key={field.id}
                control={control}
                name={`meanings.${index}.text`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="my-4 flex items-start space-x-2">
                        <Textarea placeholder={`Meaning ${index + 1}`} rows={4} {...field} />
                        {meaningFields.length > 1 && (
                          <Button type="button" variant="ghost" size="icon" onClick={() => removeMeaning(index)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="button" variant="outline" onClick={() => appendMeaning({ text: '' })} className="mt-2">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Meaning
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col pt-6">
            <Label>Examples</Label>
            {exampleFields.map((field, index) => (
              <FormField
                key={field.id}
                control={control}
                name={`examples.${index}.text`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="my-4 flex items-start space-x-2">
                        <Textarea placeholder={`Example ${index + 1}`} rows={4} {...field} />
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeExample(index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendExample({ text: '' })}
              className="flex-shrink-1 mt-2 flex-grow-0"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Add Example
            </Button>
          </CardContent>
        </Card>

        <Button disabled={form.formState.isSubmitting} type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
