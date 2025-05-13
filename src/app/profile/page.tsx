'use client'

import {Spinner} from '@app/ui/components'
import {useMeQuery} from '@infrastructure/api'
import {useRouter} from 'next/navigation'

export default function ProfileRedirect()
{
    const router = useRouter()
    const {data: currentUser, isLoading, error} = useMeQuery()

    if (isLoading) {
        return <Spinner/>
    }

    if (!currentUser) {
        router.push('/auth/sign-in')
    }

    if(error) {
        return <div>Error: {error.message}</div>
    }

    router.push(`/profile/${currentUser?.userId}`)
}
