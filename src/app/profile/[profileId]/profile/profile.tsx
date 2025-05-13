'use client'

import {Wrapper} from "@components";
import {Tabs, TabsList, TabsContent, TabsTrigger} from '@tornata/penguin-ui'
import {useState} from "react";


type Props = {
    profileId?: string
}

export const Profile = ({profileId}: Props) =>
{
    const [currentValue, setCurrentValue] = useState('genInfo')

    return (
        <Tabs defaultValue={'genInfo'} onValueChange={setCurrentValue} value={currentValue}
              activationMode={'automatic'}>
            <TabsList>
                <TabsTrigger value={'genInfo'}>General Information</TabsTrigger>
                <TabsTrigger value={'devices'}>Devices</TabsTrigger>
                <TabsTrigger value={'account'}>Account Management</TabsTrigger>
                <TabsTrigger value={'payments'}>My Payments</TabsTrigger>
            </TabsList>
            <TabsContent value={'genInfo'}>
                <Wrapper className={'w-full flex flex-col p-12 gap-4 justify-center items-center'} as={'section'}>
                    <div>Profile page for user {profileId}</div>
                    <div>Hello, here's general information for user {profileId}.</div>
                </Wrapper>
            </TabsContent>
            <TabsContent value={'devices'}>
                <Wrapper
                    className={'w-full flex flex-col p-12 gap-4 justify-center items-center'} as={'section'}>
                    <div>Here's the list of devices registered for user {profileId}.</div>
                </Wrapper>
            </TabsContent>
            <TabsContent value={'account'}>
                <Wrapper
                    className={'w-full flex flex-col p-12 gap-4 justify-center items-center'} as={'section'}>
                    <div>Information necessary for managing user's account.</div>
                </Wrapper>
            </TabsContent>
            <TabsContent value={'payments'}>
                <Wrapper
                    className={'w-full flex flex-col p-12 gap-4 justify-center items-center'} as={'section'}>
                    <div>Scheduled payments for the user.</div>
                </Wrapper>
            </TabsContent>
        </Tabs>
    )
}