export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 }
}

export function createScrollObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  threshold = 0.1
): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback)
    },
    { threshold }
  )
}

export const slideTransition = {
  enterActiveClass: 'transition duration-300 ease-out',
  enterFromClass: 'transform scale-95 opacity-0',
  enterToClass: 'transform scale-100 opacity-100',
  leaveActiveClass: 'transition duration-200 ease-in',
  leaveFromClass: 'transform scale-100 opacity-100',
  leaveToClass: 'transform scale-95 opacity-0'
}