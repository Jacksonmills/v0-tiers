/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/I4BAupkKA2h
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import CreditCalculator from "./credit-calculator";

export function Pricing() {
  return (
    <div key="1" className="bg-black py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Credit Pricing Plans</h2>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 h-full">
          <Card className="w-full bg-white bg-opacity-10 h-full flex flex-col justify-between backdrop-blur-lg">
            <div>
              <CardHeader className="pt-4">
                <CardTitle className="text-white">Free</CardTitle>
                <div className="text-white">Free Tier</div>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <p className="text-lg font-bold">$0 per month</p>
                <p className="text-sm">200 credits included</p>
                <p className="text-xs">
                  Under the Free Tier, you could initiate up to 6 new UI designs (180 credits) and then revise any one
                  of them twice (20 credits). Perfect for those who are just starting to explore the capabilities of our
                  system.
                </p>
              </CardContent>
            </div>
            <a href="https://v0.dev/" target="_blank" className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded self-center mt-4 mb-8">
              Explore Free Tier
            </a>
          </Card>
          <Card className="w-full bg-white bg-opacity-10 h-full flex flex-col justify-between backdrop-blur-md">
            <div>
              <CardHeader className="pt-4">
                <CardTitle className="text-white">Basic</CardTitle>
                <div className="text-white">$10 per month</div>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <p className="text-lg font-bold">1,500 credits included</p>
                <p className="text-xs">
                  With the Basic plan, you have the flexibility to kick-start 50 new UI designs (1,500 credits).
                  Alternatively, you could generate 30 new UI designs (900 credits) and revise any one of them 30 times
                  (600 credits). Ideal for those who are in the early stages of their project.
                </p>
              </CardContent>
            </div>
            <a href="https://v0.dev/" target="_blank" className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded self-center mt-4 mb-8">
              Start with Basic
            </a>
          </Card>
          <Card className="w-full bg-white bg-opacity-10 h-full flex flex-col justify-between backdrop-blur-md">
            <div>
              <CardHeader className="pt-4">
                <CardTitle className="text-white">Standard</CardTitle>
                <div className="text-white">$30 per month</div>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <p className="text-lg font-bold">5,000 credits included</p>
                <p className="text-xs">
                  In the Standard plan, you could generate up to 166 new UI designs (4980 credits). This is perfect for
                  those who are in the middle of their project and need to experiment with different UI designs.
                </p>
              </CardContent>
            </div>
            <a href="https://v0.dev/" target="_blank" className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded self-center mt-4 mb-8">
              Choose Standard
            </a>
          </Card>
          <Card className="w-full bg-white bg-opacity-10 h-full flex flex-col justify-between backdrop-blur-md">
            <div>
              <CardHeader className="pt-4">
                <CardTitle className="text-white">Premium</CardTitle>
                <div className="text-white">$50 per month</div>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <p className="text-lg font-bold">10,000 credits included</p>
                <p className="text-xs">
                  With the Premium plan, you have the power to generate 333 new UI designs (9990 credits). This is ideal
                  for professional developers and businesses who have ongoing projects and need to continuously generate
                  and revise UI designs.
                </p>
              </CardContent>
            </div>
            <a href="https://v0.dev/" target="_blank" className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded self-center mt-4 mb-8">
              Go Premium
            </a>
          </Card>
        </div>
        <CreditCalculator />
      </div>
    </div>
  )
}
