export type NcIconName =
  | 'arrow-right'
  | 'pause'
  | 'play'
  | 'settings'
  | 'stop'
  | 'volume'
  | 'volume-muted';

export type NcIconPath = {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: 'round' | 'square' | 'butt';
  strokeLinejoin?: 'round' | 'miter' | 'bevel';
};

export type NcIconRect = {
  x: string;
  y: string;
  width: string;
  height: string;
  rx?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
};

export type NcIconDefinition = {
  viewBox: string;
  paths: readonly NcIconPath[];
  rects?: readonly NcIconRect[];
};

const currentColor = 'currentColor';

export const NC_ICONS: Record<NcIconName, NcIconDefinition> = {
  'arrow-right': {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M5 12h14m-6-6 6 6-6 6',
        stroke: currentColor,
        strokeWidth: '1.8',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  pause: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M8 5h3v14H8V5Z', fill: currentColor },
      { d: 'M13 5h3v14h-3V5Z', fill: currentColor },
    ],
  },
  play: {
    viewBox: '0 0 24 24',
    paths: [{ d: 'm8 5 10 7-10 7V5Z', fill: currentColor }],
  },
  settings: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 4-1.8.7a7.9 7.9 0 0 1-.5 1.3l.9 1.7-1.4 1.4-1.7-.9c-.4.2-.9.4-1.3.5L12 20l-1.2-1.8c-.4-.1-.9-.3-1.3-.5l-1.7.9-1.4-1.4.9-1.7c-.2-.4-.4-.9-.5-1.3L4 12l1.8-1.2c.1-.4.3-.9.5-1.3l-.9-1.7 1.4-1.4 1.7.9c.4-.2.9-.4 1.3-.5L12 4l1.2 1.8c.4.1.9.3 1.3.5l1.7-.9 1.4 1.4-.9 1.7c.2.4.4.9.5 1.3L20 12Z',
        stroke: currentColor,
        strokeWidth: '1.4',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  stop: {
    viewBox: '0 0 24 24',
    paths: [],
    rects: [{ x: '7', y: '7', width: '10', height: '10', rx: '2', fill: currentColor }],
  },
  volume: {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M5 10h4l5-4v12l-5-4H5v-4Z',
        stroke: currentColor,
        strokeWidth: '1.8',
        strokeLinejoin: 'round',
      },
      {
        d: 'M17 9.5a4.5 4.5 0 0 1 0 5',
        stroke: currentColor,
        strokeWidth: '1.8',
        strokeLinecap: 'round',
      },
      {
        d: 'M19.5 7a8 8 0 0 1 0 10',
        stroke: currentColor,
        strokeWidth: '1.8',
        strokeLinecap: 'round',
      },
    ],
  },
  'volume-muted': {
    viewBox: '0 0 24 24',
    paths: [
      {
        d: 'M5 10h4l5-4v12l-5-4H5v-4Z',
        stroke: currentColor,
        strokeWidth: '1.8',
        strokeLinejoin: 'round',
      },
      {
        d: 'm17 9 4 6m0-6-4 6',
        stroke: currentColor,
        strokeWidth: '1.8',
        strokeLinecap: 'round',
      },
    ],
  },
};

export function getNcIcon(name: NcIconName): NcIconDefinition {
  return NC_ICONS[name];
}