import { Card } from '@/components/molecules/card/card'
import { Container } from '@/components/atoms/container/container'
import { advantagesVariants } from './advantages.variants'

import icon1 from '@/assets/images/advantages/1.png'
import icon2 from '@/assets/images/advantages/2.svg'
import icon3 from '@/assets/images/advantages/3.png'
import icon4 from '@/assets/images/advantages/4.png'
import icon5 from '@/assets/images/advantages/5.png'
import icon6 from '@/assets/images/advantages/6.png'
import icon7 from '@/assets/images/advantages/7.png'
import icon8 from '@/assets/images/advantages/8.png'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'

const items = [
  {
    id: '1',
    icon: <img src={icon1} alt="" className="h-10 w-auto" />,
    title: 'Gestão de Acesso Privilegiado (PAM Core)',
    description: 'Gerencie e controle cada sessão privilegiada no seu ambiente.',
    note: 'Gravação de sessões pronta para auditoria e conformidade',
    cta: 'Explore PAM Core',
    href: '/pam-core',
  },
  {
    id: '2',
    icon: <img src={icon2} alt="" className="h-10 w-auto" />,
    title: 'Segurança para Ambientes em Nuvem',
    description: 'Proteja acessos em múltiplos provedores de nuvem com visibilidade centralizada.',
    note: 'Suporte nativo para AWS, Azure e Google Cloud',
    cta: 'Explore Cloud Security',
    href: '/cloud-security',
  },
  {
    id: '3',
    icon: <img src={icon3} alt="" className="h-10 w-auto" />,
    title: 'Conformidade e Auditoria',
    description: 'Automatize relatórios e demonstre conformidade com regulações globais.',
    note: 'Atende LGPD, SOX, PCI-DSS e ISO 27001',
    cta: 'Explore Conformidade',
    href: '/conformidade',
  },
  {
    id: '4',
    icon: <img src={icon4} alt="" className="h-10 w-auto" />,
    title: 'Gestão de Identidade e Acesso',
    description: 'Centralize o ciclo de vida de identidades privilegiadas em um único painel.',
    note: 'Integração com Active Directory e provedores de identidade',
    cta: 'Explore IAM',
    href: '/iam',
  },
  {
    id: '5',
    icon: <img src={icon5} alt="" className="h-10 w-auto" />,
    title: 'Cofre de Credenciais',
    description: 'Armazene e rotacione senhas privilegiadas com segurança e rastreabilidade total.',
    note: 'Rotação automática de credenciais e integração com SIEM',
    cta: 'Explore o Cofre',
    href: '/cofre',
  },
  {
    id: '6',
    icon: <img src={icon6} alt="" className="h-10 w-auto" />,
    title: 'Automação de Segurança',
    description: 'Integre segurança de acesso nos seus pipelines de DevOps e CI/CD.',
    note: 'Compatível com Ansible, Terraform e Kubernetes',
    cta: 'Explore DevSecOps',
    href: '/devsecops',
  },
  {
    id: '7',
    icon: <img src={icon7} alt="" className="h-10 w-auto" />,
    title: 'Relatórios e Visibilidade',
    description: 'Acompanhe em tempo real todas as atividades privilegiadas na sua infraestrutura.',
    note: 'Dashboards personalizáveis e exportação de relatórios',
    cta: 'Explore Relatórios',
    href: '/relatorios',
  },
  {
    id: '8',
    icon: <img src={icon8} alt="" className="h-10 w-auto" />,
    title: 'Gerenciamento de Usuários Privilegiados',
    description: 'Defina e aplique políticas de mínimo privilégio para cada perfil de usuário.',
    note: 'Controle granular por função, horário e localização',
    cta: 'Explore Gestão de Usuários',
    href: '/usuarios',
  },
]

const { root, wrapper, stickyCol, description, ctaRow, grid } = advantagesVariants()

const Advantages = () => {
  return (
    <section className={root()}>
      <Container as="div" className={wrapper()}>
        <div className={stickyCol()}>
          <Heading as="h2" size="md" className="font-semibold">
            Controle todas as suas formas de acesso privilegiado
          </Heading>
          <p className={description()}>
            De admin humanos às identidades de máquinas, de endpoints às permissões na nuvem, a
            Segura® protege os privilégios em todo o seu ambiente numa plataforma unificada
          </p>
          <div className={ctaRow()}>
            <Link>Pedir demo ›</Link>
            <Link variant="secondary">Tour do produto ›</Link>
          </div>
        </div>
        <div className={grid()}>
          {items.map(({ id, ...card }) => (
            <Card key={id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Advantages }
