import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Accordion, AccordionItem } from '@/components/molecules/accordion/accordion'
import { faqsVariants } from './faqs.variants'

const faqItems = [
  {
    id: 'who-is-segura',
    title: 'Who is Segura® and what does the company specialize in?',
    content: [
      'Segura® is a worldwide identity and privileged access management company. We specialize in protecting critical systems, credentials, and data with an all-in-one identity security platform. Built for speed, simplicity, and compliance, Segura® helps businesses secure privileged access, manage digital identities, and prevent breaches without slowing down operations.',
      'Recognized by Gartner, KuppingerCole, and Frost & Sullivan, Segura® is trusted worldwide for innovation, reliability, and customer experience. On Gartner Peer Insights, real users consistently rank Segura® as the #1 PAM solution. Learn more about Segura® and our all-in-one PAM platform. ›',
    ],
  },
  {
    id: 'what-makes-different',
    title: 'What makes Segura® different from other cybersecurity companies?',
    content: [
      'Unlike legacy PAM vendors, Segura® is fast to deploy, easy to use, and cost-effective. Our all-in-one platform reduces total cost of ownership by up to 70% and deploys in minutes, not months.',
      'With built-in compliance reporting, automated password rotation, and real-time monitoring, Segura® gives teams full control without complexity. See how Segura® compares to legacy PAM vendors. ›',
    ],
  },
  {
    id: 'why-rebrand',
    title: 'Why did senhasegura rebrand and change its name to Segura®?',
    content: [
      "For over 12 years, Segura® has been a leader in Privileged Access Management, helping organizations worldwide take back control of identity security. As we've grown, so has our vision.",
      'The rebrand from senhasegura to Segura® reflects our global growth and our mission to provide futureproof identity security. "Segura" means safe, and it represents our commitment to protecting organizations worldwide with bold, trusted, and modern solutions. Read more about the Segura® rebrand story. ›',
    ],
  },
  {
    id: 'integration',
    title: 'Can Segura® solutions integrate with my existing IT and security systems?',
    content: [
      'Yes. Segura® PAM integrates with more than 174 platforms—from modern SaaS like Okta, AWS, and ServiceNow to legacy IT systems such as Active Directory. You can deploy across on-prem, cloud, or hybrid environments in as little as 7 minutes and start controlling privileged access without disrupting your existing stack.',
      "If you don't see the integration you need, we'll create it for you. That flexibility is why businesses choose Segura® for speed, compatibility, and futureproof identity security. Explore 174+ Segura® integrations. ›",
    ],
  },
  {
    id: 'support-247',
    title: 'Does Segura® offer 24/7 customer support for clients worldwide?',
    content: [
      'Yes. Segura® provides award-winning, 24/7 global support backed by our Centers of Excellence in São Paulo, Riyadh, Austin, and Katowice. Our localized teams give clients help in their region and language, while our experts are always available around the clock to resolve issues, configure integrations, and maximize value from the platform.',
      'This dedication to customer success has earned Segura® consistent 5-star reviews on Gartner Peer Insights and recognition as a trusted PAM leader worldwide. See why customers rate Segura® support 5 stars. ›',
    ],
  },
  {
    id: 'deployment-speed',
    title: "How quickly can Segura®'s services and solutions be deployed after sign-up?",
    content: [
      'Segura® is built for fast, secure deployment. Many clients start protecting privileged access in under 10 minutes thanks to our agentless architecture, flexible connectors, and intuitive workflows. Unlike legacy tools that can take months to roll out, Segura® delivers immediate value with minimal training and no need to install software on target servers.',
      'Our deployment roadmap is designed to minimize downtime, address user resistance, and keep compliance requirements front and center. Depending on scope and environment, organizations often achieve full implementation (and compliance) in days or weeks, not months.',
      "Segura® and our certified partners provide consulting and hands-on guidance from analysis to activation, tailoring deployments to each client's unique compliance and security needs. With 174+ pre-built integrations, API-native design, and CI/CD compatibility.",
      'Segura® scales quickly across cloud, on-prem, and hybrid environments—helping global teams secure privileged access up to 90% faster than competitors. Request a demo to see how fast Segura® can deploy. ›',
    ],
  },
  {
    id: 'countries',
    title: 'In which countries and regions does Segura® operate its services?',
    content: [
      'Segura® operates worldwide, supporting clients in 70+ countries across every major region, including North America, Europe, Latin America, the Middle East, Asia, Africa, and Oceania. With a truly global presence, we deliver trusted identity and privileged access security to organizations of all sizes and industries.',
      'Our Centers of Excellence in Austin, Katowice, Riyadh, and São Paulo provide localized expertise and 24/7 support, ensuring businesses receive fast, reliable help in their region and language.',
      'Wherever your business operates, Segura® delivers futureproof identity security with speed, simplicity, and trusted support. Find local Segura® support in your region. ›',
    ],
  },
  {
    id: 'why-trust',
    title: 'Why should businesses trust Segura® for cybersecurity and data protection?',
    content: [
      'Segura® is trusted by IT teams in over 70 countries and consistently recognized by leading analysts as a global PAM leader.',
      "We've been named in the Gartner Magic Quadrant for Privileged Access Management, awarded the Frost & Sullivan Customer Value Leadership Award, and ranked a Gold Medal Winner by Info-Tech Research Group SoftwareReviews.",
      "On Gartner Peer Insights, real users give Segura® the industry's highest score: 4.9 out of 5 stars, with 98% saying they would recommend our solution.",
      "Beyond recognition, Segura® goes above and beyond to meet the world's strictest security and privacy standards. Our platform is certified for ISO 27001:2022, ISO 27701:2019, SOC 2 Type II, SOC 3 Type II, and adheres to regulations including GDPR, LGPD, and CCPA. Independent audits confirm that our security, privacy, and compliance controls are reliable, helping clients achieve their own audit and regulatory goals.",
      'With powerful security, proven results, and award-winning support, businesses worldwide trust Segura® to protect their most critical access and identities. See Segura® certifications and analyst recognition. ›',
    ],
  },
]

const { root } = faqsVariants()

const Faqs = () => {
  return (
    <section className={root()}>
      <Container layout="col" className="gap-10">
        <Heading as="h2" color="invert">
          Frequently Asked Questions (FAQs)
        </Heading>
        <Accordion>
          {faqItems.map(({ id, title, content }) => (
            <AccordionItem key={id} id={id} title={title}>
              {content.map((paragraph, i) => (
                <p key={`${id}-p${i}`}>{paragraph}</p>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export { Faqs }
