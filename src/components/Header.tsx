import { A } from '@/components/A'
import { Logo } from '@/components/Logo'

export const Header = () => {
  return (
    <header className={'flex items-center justify-between px-6 py-4'}>
      <A className={'justify-end'} href={'/'}>
        <Logo />
      </A>
    </header>
  )
}
