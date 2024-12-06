import { A } from '@/shared/components'
import { Header, LogoComponent } from '@tornata/brooms-ui'

export function AppHeader() {
  return (
    <Header>
      <A href={'/'}>
        <LogoComponent />
      </A>
    </Header>
  )
}
