'use client';
import AuthenticationPage from '@/modules/authentication/authentication';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Authorization() {
return <>
<AuthenticationPage/>
</>
    return null;
}