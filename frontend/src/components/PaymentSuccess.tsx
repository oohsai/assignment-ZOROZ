import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function PaymentSuccessPage() {
  return (
    <Card className="max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-green-600">
          <CheckCircle className="mr-2" />
          Payment Successful
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Thank you for your purchase! Your order has been successfully processed.</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

