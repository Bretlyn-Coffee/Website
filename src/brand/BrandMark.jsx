import Box from '@mui/material/Box';
import { MARK_PATH, MARK_VIEWBOX } from './markPath';

/** The Bretlyn compass "B" mark as an inline vector. Colour follows `color`. */
export default function BrandMark({ size = 40, color = 'currentColor', sx, title }) {
  return (
    <Box
      component="svg"
      viewBox={MARK_VIEWBOX}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      sx={{ width: size, height: size, flex: 'none', color, display: 'block', ...sx }}
    >
      <path fill="currentColor" fillRule="evenodd" d={MARK_PATH} />
    </Box>
  );
}

/** Full horizontal logo (mark + wordmark). */
export function Logo({ variant = 'white', height = 48, sx }) {
  return (
    <Box
      component="img"
      src={`/assets/img/logo-${variant}.svg`}
      alt="Bretlyn Coffee"
      width={281}
      height={100}
      sx={{ height, width: 'auto', display: 'block', ...sx }}
    />
  );
}
