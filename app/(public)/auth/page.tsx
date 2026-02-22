'use client';
import AuthenticationPage from '@/modules/authentication/authentication';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Test from './test';

export default function Authorization() {
return <>
<AuthenticationPage/>
<Test/>
</>
    return null;
}