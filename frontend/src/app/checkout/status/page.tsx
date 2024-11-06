'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { CheckCircle, XCircle } from 'lucide-react'

export default function PaymentStatusPage() {
  const [paymentStatus, setPaymentStatus] = useState('success')

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl">
            Payment Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            defaultValue="success"
            onValueChange={setPaymentStatus}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="success" id="success" />
              <Label htmlFor="success">Successful Payment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="failure" id="failure" />
              <Label htmlFor="failure">Failed Payment</Label>
            </div>
          </RadioGroup>

          {paymentStatus === 'success' ? (
            <div className="text-center space-y-4">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="text-2xl font-bold text-green-600">Payment Successful</h2>
              <p className="text-gray-600">
                Thank you for your purchase! Your order has been successfully processed.
              </p>
              <p className="font-semibold">Order #: 123-4567890-1234567</p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <XCircle className="mx-auto h-16 w-16 text-red-500" />
              <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
              <p className="text-gray-600">
                We're sorry, but there was an issue processing your payment. Please try again or contact customer support.
              </p>
              <p className="font-semibold">Error Code: PAY-001</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild className="w-full max-w-xs">
            <Link href={paymentStatus === 'success' ? "/" : "/checkout"}>
              {paymentStatus === 'success' ? 'Return to Home' : 'Return to Checkout'}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}