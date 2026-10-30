import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

/** Fades/slides children in when they scroll into view. */
export default function Reveal({ children, delay = 0, component = 'div', sx, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) { setInView(true); return undefined; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Box
      ref={ref}
      component={component}
      className={`reveal${inView ? ' in' : ''}`}
      sx={{ transitionDelay: `${delay}s`, ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
}

/** Counts up from 0 to `end` when visible. Shows the final value without JS/IO. */
export function CountUp({ end, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(end);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    setVal(0);
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1600, 1);
        setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}
