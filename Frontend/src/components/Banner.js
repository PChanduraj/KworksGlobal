import React, { useEffect, useState } from 'react';
import './Banner.css'
import 'animate.css';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import NetworkCanvas from './NetworkCanvas';

// The accent word cycles — the headline is never static.
const ROTATING = ['Wonders', 'Growth', 'Clarity', 'Impact'];

const Banner = () => {
  const navigate = useNavigate()
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(t);
  }, [reduced]);

  // Mouse-parallax: layers shift against each other for depth.
  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced]);

  const line = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
  const word = {
    hidden: { y: '110%', opacity: 0 },
    show: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const headline = ['We', 'work', 'the', 'numbers,', 'so', 'you', 'can', 'do'];

  return (
      <div className='banner-div'>
        {/* Depth layer 1: real-team footage */}
        <video
          className='banner-video'
          autoPlay muted loop playsInline
          poster='/video/hero-poster.jpg'
          style={{ transform: `scale(1.06) translate(${tilt.x * -8}px, ${tilt.y * -8}px)` }}
        >
          <source src='/video/hero.mp4' type='video/mp4' />
        </video>

        <div className='banner-overlay' />

        {/* Depth layer 2: interactive data network — follows the cursor */}
        <NetworkCanvas />

        {/* Depth layer 3: copy, parallaxed against the footage */}
        <div
          className='banner-heading'
          style={{ transform: `translate(${tilt.x * 10}px, ${tilt.y * 6}px)` }}
        >
          <motion.p className='main-heading' variants={line} initial='hidden' animate='show'>
            {headline.map((w, i) => (
              <span className='word-mask' key={i}>
                <motion.span className='word' variants={word}>{w}</motion.span>
              </span>
            ))}
            <span className='word-mask rotator'>
              <motion.span
                key={ROTATING[wordIndex]}
                className='word rotating-word'
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-110%', opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {ROTATING[wordIndex]}!
              </motion.span>
            </span>
          </motion.p>

          <motion.p
            className='sub-heading'
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Unleash your companies potential with agility and expertise. Outsource. Outshine. <span> FinTeam One </span> replaces your finance function with lean, data-driven excellence delivering world class financial management services.
          </motion.p>

          <motion.button
            onClick={() => navigate('/contact-us')}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </motion.button>
        </div>

        <div className='scroll-cue' aria-hidden="true"><span /></div>
      </div>
  )
}

export default Banner
