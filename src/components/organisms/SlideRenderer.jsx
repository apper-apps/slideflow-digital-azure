import React from 'react'
import { motion } from 'framer-motion'
import TitleSlide from '@/components/organisms/slides/TitleSlide'
import ContentSlide from '@/components/organisms/slides/ContentSlide'
import CaseStudySlide from '@/components/organisms/slides/CaseStudySlide'
import WorkflowSlide from '@/components/organisms/slides/WorkflowSlide'
import RoadmapSlide from '@/components/organisms/slides/RoadmapSlide'
import CTASlide from '@/components/organisms/slides/CTASlide'

const SlideRenderer = ({ slide, isActive, direction = 'forward' }) => {
  if (!slide) return null

  const slideVariants = {
    enter: (direction) => ({
      x: direction === 'forward' ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'forward' ? -100 : 100,
      opacity: 0
    })
  }

  const getSlideComponent = () => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide slide={slide} />
      case 'content':
        return <ContentSlide slide={slide} />
      case 'case-study':
        return <CaseStudySlide slide={slide} />
      case 'workflow':
        return <WorkflowSlide slide={slide} />
      case 'roadmap':
        return <RoadmapSlide slide={slide} />
      case 'cta':
        return <CTASlide slide={slide} />
      default:
        return <ContentSlide slide={slide} />
    }
  }

  return (
<motion.div
      className="w-full h-full absolute inset-0 min-w-[320px] min-h-[240px]"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate={isActive ? "center" : "exit"}
      exit="exit"
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      style={{
        minWidth: '320px',
        minHeight: '240px',
        width: '100%',
        height: '100%'
      }}
>
      <div className="w-full h-full min-w-[320px] min-h-[240px] overflow-hidden canvas-ready">
        {getSlideComponent()}
      </div>
    </motion.div>
  )
}

export default SlideRenderer