import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = ( 
    target: Element | string,
    animationProps: gsap.AnimationVars,
    scrollProps: any = {} ) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}

export const animateWithGsapTimeline = (  
    timeline: gsap.core.Timeline,
    rotationRef: React.RefObject<any>,
    rotationState: number,
    firstTarget: Element | string,
    secondTarget: Element | string,
    animationProps: gsap.AnimationVars) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
}