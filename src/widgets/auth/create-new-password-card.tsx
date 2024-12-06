'use client'

import { FormCreateNewPassword } from '@/features/auth/form-create-new-password'
import { Card, Typography } from '@tornata/brooms-ui'
import { cn } from 'src/shared/utils'

export const CreateNewPasswordCard = () => {
  return (
    <Card className={cn('p-6 flex flex-col items-center justify-center max-w-96')}>
      <Typography asElement={'h2'} variant={'h1'}>
        Create New Password
      </Typography>
      <FormCreateNewPassword />
    </Card>
  )
}
