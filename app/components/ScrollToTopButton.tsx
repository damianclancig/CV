'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      })
  }

  return (
    <div className="sticky w-full bottom-0 p-5">
      <div className="flex justify-end">
        <button
          className={` p-1 text-4xl text-slate-700 bg-amber-600 rounded-full transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  )
}

export default ScrollToTopButton
