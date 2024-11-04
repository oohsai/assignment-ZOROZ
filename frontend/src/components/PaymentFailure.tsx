import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { XCircle } from 'lucide-react'

export default function PaymentFailurePage() {
  return (
    <Card className="max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-red-600">
          <XCircle className="mr-2" />
          Payment Failed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>We're sorry, but there was an issue processing your payment. Please try again or contact customer support.</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link href="/checkout">Return to Checkout</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}