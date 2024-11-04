'use client'
import PaymentFailurePage from "@/components/PaymentFailure";
import PaymentSuccessPage from "@/components/PaymentSuccess";
import { useState } from "react"

export default function Status() {

    const [payment, setPayment] = useState<boolean | null>(null);

    return (        
        <div>
            {payment === true ? (
                <PaymentSuccessPage />
            ) : (
                <PaymentFailurePage />
            )}
        </div>
    )
}