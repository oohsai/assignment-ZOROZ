'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Lock, Gift, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function CheckoutPage() {
  const [selectedDelivery, setSelectedDelivery] = useState('thursday')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
          <Image
            src="https://www.vectorlogo.zone/logos/amazon/amazon-tile.svg"
            alt="Amazon"
            width={35}
            height={35}
            className="mr-2"
          />
          </Link>
          <h1 className="text-xl">Checkout</h1>
          <div className="flex items-center">
            <Lock className="h-4 w-4 mr-2" />
            
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="  p-6 border-b-2">
              <div className="flex  justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className=" w-6 h-6 flex items-center justify-center mr-3">1</span>
                  <h2 className="text-lg font-bold">Delivery address</h2>
                </div>
                <div className="ml-9">
                <p className="font-bold">Sai Kiran</p>
                <p>4143 Poplar Lane</p>
                <p>Florida</p>
                <p>Miami, 33176</p>
                <Button variant="link" className="text-blue-600 p-0 h-auto mt-2">
                  Add delivery instructions
                </Button>
              </div>
                <Button variant="link" className="text-blue-600">
                  Change
                </Button>
              </div>
              
            </div>

            <div className=" p-6 border-b-2">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className=" w-6 h-6 flex items-center justify-center mr-3">2</span>
                  <h2 className="text-lg font-bold">Payment method</h2>
                </div>
                <div className="ml-9">
                <p className="font-bold">Pay on delivery (Cash/Card)</p>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <ChevronUp className="h-4 w-4" />
                    <span>Add a gift card or promotion code</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Input placeholder="Enter Code" className="max-w-xs" />
                    <Button>Apply</Button>
                  </div>
                </div>
              </div>
                <Button variant="link" className="text-blue-600">
                  Change
                </Button>
              </div>
              
            </div>

            <div className="p-6 border-b-2">
              <div className="flex items-center mb-4">
                <span className=" w-6 h-6 flex items-center justify-center mr-3">3</span>
                <h2 className="text-lg font-bold">Review items and delivery</h2>
              </div>
              <div className="ml-9">
                <div className="text-green-700 font-bold mb-4">Arriving 7 Nov 2024</div>
                <div className="flex gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="JBL Headphones"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="font-medium">
                      JBL C100SI Wired In Ear Headphones with Mic, JBL Pure Bass Sound, One Button Multi-function Remote,
                      Premium Metallic Finish, Angled Buds for Comfort fit (Black)
                    </h3>
                    <div className="text-red-600 font-bold mt-1">₹599.00</div>
                    <div className="flex items-center gap-2 mt-1">
                      <select className="border rounded px-2 py-1">
                        <option>Qty: 1</option>
                        <option>Qty: 2</option>
                        <option>Qty: 3</option>
                      </select>
                      <Button variant="link" className="text-blue-600">
                        Add gift options
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                  <RadioGroup defaultValue="thursday" onValueChange={setSelectedDelivery}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="thursday" id="thursday" />
                      <Label htmlFor="thursday">
                        <div>
                          <span className="font-bold">Thursday 7 Nov</span>
                          <span className="ml-2 text-green-700">FREE Delivery</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wednesday" id="wednesday" />
                      <Label htmlFor="wednesday">
                        <div>
                          <span className="font-bold">Wednesday 6 Nov</span>
                          <span className="ml-2">₹79.00 Two-Day Delivery</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tomorrow" id="tomorrow" />
                      <Label htmlFor="tomorrow">
                        <div>
                          <span className="font-bold">Tomorrow</span>
                          <span className="ml-2">₹119.00 Rush Delivery</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {selectedDelivery === 'tomorrow' && (
                    <div className="flex gap-4">
                      <Button variant="outline">
                        Tomorrow
                        <br />
                        8 AM – 12 PM
                      </Button>
                      <Button variant="outline">
                        Tomorrow
                        <br />
                        10 AM – 3 PM
                      </Button>
                    </div>
                  )}
                </div>
                </div>

                
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6">
              <Button className="w-full mb-4 bg-yellow-400 hover:bg-yellow-500 text-black">Place your order</Button>
              <p className="text-xs text-gray-600 mb-4">
                By placing your order, you agree to Amazon's{' '}
                <Link href="#" className="text-blue-600">
                  privacy notice
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-blue-600">
                  conditions of use
                </Link>
                .
              </p>
              <div className="border-t pt-4">
                <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Items:</span>
                    <span>₹599.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span>₹40.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span>₹639.00</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Promotion Applied:</span>
                    <span>-₹40.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-4 border-t">
                    <span>Order Total:</span>
                    <span>₹599.00</span>
                  </div>
                </div>
                <div className="mt-4 text-red-600">
                  <div className="font-bold">Your Savings: ₹ 740.00 (55%)</div>
                  <ul className="list-disc ml-4 text-sm">
                    <li>FREE Delivery</li>
                    <li>Item discount</li>
                  </ul>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    Details <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}