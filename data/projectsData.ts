interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Deploy 3-Tier App on EC2 using Docker Networking Concept.',
    description: `Are you wondering how things actually work in the backend of things? Take a deep dive by clicking on this hands-on begineer project.`,
    imgSrc: '/static/images/docker-nw-img.png',
    href: 'https://devarshshah.hashnode.dev/deploying-3-tier-application-on-aws-ec2-using-docker-networking-concept',
  },
  {
    title: 'O11y with Grafana Tempo and OpenTelemetry',
    description: `Are you looking for some exciting Observability intermidiate project? This the is the best hands-on project, if you want to know about how the monitoring works. Go through it.`,
    imgSrc: '/static/images/o11y-img.png',
    href: 'https://devarshshah.hashnode.dev/o11y-with-grafana-tempo-and-opentelemetry',
  },
  {
    title: 'Deploying React App on K8s',
    description: `Are you looking for some exciting Observability intermidiate project? This the is the best hands-on project, if you want to know about how the monitoring works. Go through it.`,
    imgSrc: '/static/images/k8s.png',
    href: 'https://devarshshah.hashnode.dev/deployment-on-k8s',
  },
  {
    title: 'Getting Started with ArgoCD',
    description: `Are you wondering how getting started with ArgoCD looks like? Here's the blog which I wrote for my future self. I have picked up this thumbnail image from devtron's blog`,
    imgSrc: '/static/images/argocd.png',
    href: 'https://devarshshah.hashnode.dev/getting-started-with-argocd',
  },
  {
    title: 'CI/CD Project using GitHub Actions and ArgoCD',
    description: `Gone through the getting started guide of ArgoCD? Let us build one project then.`,
    imgSrc: '/static/images/argocicd.png',
    href: 'https://devarshshah.hashnode.dev/cicd-project',
  },
]

export default projectsData
