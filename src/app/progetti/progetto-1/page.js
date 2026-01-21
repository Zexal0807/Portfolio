"use client"

import { useProgetto } from '@/components/ProgettoContext';

export default function Page() {

    const dati = useProgetto();

    return (
        <>
            {JSON.stringify(dati)}
        </>
    );
}