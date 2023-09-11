import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto p-3 md:p-6 lg:p-12">
      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <ContentRenderer source={github} />
        <div className="mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:15rem] md:mt-12 md:gap-6">
          {github?.repositories?.records?.map((item, i) => (
            <Reveal animation="fade-in slide-in-top" delay={i * 100} key={item.name}>
              <RepositoryCard {...item} />
            </Reveal>
          ))}
        </div>
        <div className="my-6 md:my-12"></div>
        <ContentRenderer source={projects} />
        <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
