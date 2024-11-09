import { A } from '@/components/a/A'
import { Header, LogoComponent } from '@tornata/brooms-ui'

export default function AppHeader() {
  return (
    <Header>
      <A href={'/'}>
        <LogoComponent />
      </A>
    </Header>
  )
}
