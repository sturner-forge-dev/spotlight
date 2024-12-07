import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import AnimatedGridPattern from './ui/animated-grid-pattern'
import { cn } from '@/lib/utils'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={1}
              repeatDelay={1}
              className={cn(
                '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                'inset-x-0 inset-y-[-20%] h-[150%] skew-y-12',
              )}
            />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
