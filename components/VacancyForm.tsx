'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import uploadData from '../utils/uploadData';
import { VacancyFormValues } from '../types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const formSchema = z.object({
  contactName: z
    .string()
    .max(20, 'Name must be 20 characters or less.')
    .min(1, 'Field cannot be empty'),
  contactNumber: z
    .string()
    .max(20, 'Phone number must be 20 characters or less.')
    .min(1, 'Field cannot be empty'),
  masjid: z
    .string()
    .max(20, 'String must be 20 characters or less.')
    .min(1, 'Field cannot be empty'),
  city: z
    .string()
    .max(20, 'String must be 20 characters or less.')
    .min(1, 'Field cannot be empty'),
  address: z
    .string()
    .max(40, 'Address must be 40 characters or less.')
    .min(1, 'Field cannot be empty'),
  requirements: z
    .string()
    .max(40, 'String must be 40 characters or less.')
    .min(1, 'Field cannot be empty'),
  extraDetails: z
    .string()
    .max(120, 'String must be 120 characters or less.')
    .min(1, 'Field cannot be empty'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'Terms of service must be checked',
  }),
});

export default function VacancyForm() {
  const router = useRouter();
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: '',
      contactNumber: '',
      masjid: '',
      city: '',
      address: '',
      requirements: '',
      extraDetails: '',
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Convert the form values to VacancyFormValues format
    const formValues: VacancyFormValues = {
      contactName: values.contactName,
      contactNumber: values.contactNumber,
      masjid: values.masjid,
      city: values.city,
      address: values.address,
      requirements: values.requirements,
      extraDetails: values.extraDetails,
      terms: values.terms ? 'checked' : '',
    };

    // Send the data to contentful, if successful go to success page and if not show error message
    uploadData(formValues);
    router.push('/success');
  }

  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-3xl'>
        <Card>
          <div className='pt-2 pb-4'>
            <CardHeader>
              <CardTitle>Post a Vacancy</CardTitle>
              <CardDescription>
                Fill out the form below to post your Taraweeh vacancy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2'>
                      <FormField
                        control={form.control}
                        name='contactName'
                        render={({ field }) => (
                          <FormItem>
                            <Field>
                              <FieldLabel htmlFor='contactName'>
                                Contact Name
                              </FieldLabel>
                              <FormControl>
                                <Input
                                  id='contactName'
                                  placeholder='Enter your name'
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </Field>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='contactNumber'
                        render={({ field }) => (
                          <FormItem>
                            <Field>
                              <FieldLabel htmlFor='contactNumber'>
                                Contact Number
                              </FieldLabel>
                              <FormControl>
                                <Input
                                  id='contactNumber'
                                  placeholder='Enter your phone number'
                                  {...field}
                                />
                              </FormControl>
                              <FieldDescription>
                                Enter your mobile phone number in full
                              </FieldDescription>
                              <FormMessage />
                            </Field>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      <FormField
                        control={form.control}
                        name='masjid'
                        render={({ field }) => (
                          <FormItem>
                            <Field>
                              <FieldLabel htmlFor='masjid'>Masjid</FieldLabel>
                              <FormControl>
                                <Input
                                  id='masjid'
                                  placeholder='Masjid name'
                                  {...field}
                                />
                              </FormControl>
                              <FieldDescription>
                                Which masjid is this for?
                              </FieldDescription>
                              <FormMessage />
                            </Field>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='city'
                        render={({ field }) => (
                          <FormItem>
                            <Field>
                              <FieldLabel htmlFor='city'>City</FieldLabel>
                              <FormControl>
                                <Input
                                  id='city'
                                  placeholder='City name'
                                  {...field}
                                />
                              </FormControl>
                              <FieldDescription>
                                Which city are you based in?
                              </FieldDescription>
                              <FormMessage />
                            </Field>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name='address'
                      render={({ field }) => (
                        <FormItem>
                          <Field>
                            <FieldLabel htmlFor='address'>Address</FieldLabel>
                            <FormControl>
                              <Input
                                id='address'
                                placeholder='Enter full address'
                                {...field}
                              />
                            </FormControl>
                            <FieldDescription>
                              Enter the complete address
                            </FieldDescription>
                            <FormMessage />
                          </Field>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='requirements'
                      render={({ field }) => (
                        <FormItem>
                          <Field>
                            <FieldLabel htmlFor='requirements'>
                              Requirements
                            </FieldLabel>
                            <FormControl>
                              <Textarea
                                id='requirements'
                                placeholder='Describe the nature of the vacancy...'
                                {...field}
                              />
                            </FormControl>
                            <FieldDescription>
                              Describe the nature of the vacancy (e.g. Number of
                              Huffaz, Skills, Languages, Licenses, etc.)
                            </FieldDescription>
                            <FormMessage />
                          </Field>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='extraDetails'
                      render={({ field }) => (
                        <FormItem>
                          <Field>
                            <FieldLabel htmlFor='extraDetails'>
                              Extra Details
                            </FieldLabel>
                            <FormControl>
                              <Textarea
                                id='extraDetails'
                                placeholder='Include any additional information...'
                                {...field}
                              />
                            </FormControl>
                            <FieldDescription>
                              Include any extra information you would like to
                              add e.g.
                              <br></br>- Reimbursement, <br></br> -
                              Accommodation, <br></br> - Transport, <br></br> -
                              Taraweeh Rakaats, <br></br> - Qiyaam, <br></br> -
                              Other Duties etc.
                            </FieldDescription>
                            <FormMessage />
                          </Field>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='terms'
                      render={({ field }) => (
                        <FormItem>
                          <Field className='flex flex-row items-center gap-1 space-x-4 space-y-0 rounded-xl border border-gray-200 bg-gray-50/50 p-3'>
                            <FormControl>
                              <Checkbox
                                id='terms'
                                checked={field.value}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked === true);
                                }}
                                className='mt-0.5'
                              />
                            </FormControl>
                            <div className='space-y-2 leading-relaxed flex-1'>
                              <FieldLabel
                                htmlFor='terms'
                                className='cursor-pointer font-normal text-base'
                              >
                                I agree to the{' '}
                                <button
                                  type='button'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setTermsDialogOpen(true);
                                  }}
                                  className='text-primary underline hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded'
                                >
                                  Terms and Service
                                </button>{' '}
                                that my data will be processed and displayed
                                publicly
                              </FieldLabel>
                              <FormMessage className='mt-2' />
                            </div>
                          </Field>
                        </FormItem>
                      )}
                    />

                    <FieldGroup>
                      <Field>
                        <Button type='submit' size='lg' className='w-full'>
                          Submit Vacancy
                        </Button>
                      </Field>
                    </FieldGroup>
                  </FieldGroup>
                </form>
              </Form>
            </CardContent>
          </div>
        </Card>

        <Dialog open={termsDialogOpen} onOpenChange={setTermsDialogOpen}>
          <DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
            <DialogHeader>
              <DialogTitle>Terms and Service</DialogTitle>
              <DialogDescription>
                Please read the following terms and conditions carefully
              </DialogDescription>
            </DialogHeader>
            <div className='space-y-4 py-4'>
              <div>
                <h3 className='text-sm font-semibold mb-2'>
                  1. Data Collection and Processing
                </h3>
                <p className='text-sm text-muted-foreground'>
                  By submitting this form, you agree that your personal
                  information including contact name, contact number, masjid
                  name, address, city, and any additional details will be
                  collected and processed for the purpose of displaying Taraweeh
                  vacancy information on this platform.
                </p>
              </div>
              <div>
                <h3 className='text-sm font-semibold mb-2'>
                  2. Public Display
                </h3>
                <p className='text-sm text-muted-foreground'>
                  You acknowledge and agree that the information you provide
                  will be displayed publicly on this website, allowing visitors
                  to view vacancy details and contact information. This data
                  will be accessible to all users of the platform.
                </p>
              </div>
              <div>
                <h3 className='text-sm font-semibold mb-2'>3. Data Accuracy</h3>
                <p className='text-sm text-muted-foreground'>
                  You are responsible for ensuring that all information provided
                  is accurate, current, and complete. You agree to update any
                  information that becomes outdated or inaccurate.
                </p>
              </div>
              <div>
                <h3 className='text-sm font-semibold mb-2'>
                  4. Use of Information
                </h3>
                <p className='text-sm text-muted-foreground'>
                  The information you provide will be used solely for the
                  purpose of connecting Taraweeh imams with masjids seeking
                  their services. We will not use your information for any other
                  commercial purposes without your explicit consent.
                </p>
              </div>
              <div>
                <h3 className='text-sm font-semibold mb-2'>
                  5. Consent and Agreement
                </h3>
                <p className='text-sm text-muted-foreground'>
                  By checking the terms and service checkbox and submitting this
                  form, you confirm that you have read, understood, and agree to
                  be bound by these terms and conditions.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant='outline'
                onClick={() => setTermsDialogOpen(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
