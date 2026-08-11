import type { Meta, StoryObj } from '@storybook/angular';
import { NcMusicPlayerPatternComponent } from '@nightcall-ui/patterns';

type MusicPlayerStoryArgs = {
  trackTitle: string;
  artistName: string;
  audioSrc: string;
  playbackState: 'play' | 'pause';
  muted: boolean;
  progress: number;
};

const meta: Meta<MusicPlayerStoryArgs> = {
  title: 'Patterns/Music Player',
  component: NcMusicPlayerPatternComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Overview
Music Player is a Pattern built from existing Nightcall UI primitives. It demonstrates how to compose controls, progress feedback, typography, motion, and tokenized surfaces into a complete media playback feature without introducing a new base component.

# Components Used
- Button
- Progress Bar
- Icons from @nightcall-ui/icons
- Typography tokens
- Spacing tokens
- Radius tokens
- Shadow tokens
- Motion tokens

# Architecture
Patterns in Nightcall UI represent complete interface solutions assembled from multiple reusable components. This example keeps playback state and Howler.js integration internal to the pattern while the visual building blocks remain the shared design system primitives.

# Playground
Use the canvas controls to play, pause, stop, adjust volume, and scrub the track. Story controls also let you seed playback state, mute state, and seek position for demos and review.

# Accessibility
- Native button semantics for primary playback actions.
- Keyboard-accessible range inputs for volume and scrubbing.
- Visible focus treatments using Nightcall focus and glow tokens.
- Live status announcements for screen readers during play, pause, stop, and seek events.

# Best Practices
Use this Pattern when you want to document or prototype a complete media interaction built from existing primitives. It belongs in Patterns rather than Components because it solves an end-to-end user problem, owns internal behavior, and composes multiple building blocks rather than defining a single reusable primitive.
        `.trim(),
      },
    },
  },
  args: {
    trackTitle: 'Nightcall',
    artistName: 'Kavinsky',
    audioSrc: '/assets/audio/kavinsky-song.mp3',
    playbackState: 'pause',
    muted: false,
    progress: 12,
  },
  argTypes: {
    trackTitle: { control: 'text' },
    artistName: { control: 'text' },
    audioSrc: { control: 'text' },
    playbackState: {
      control: 'inline-radio',
      options: ['play', 'pause'],
    },
    muted: { control: 'boolean' },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;

type Story = StoryObj<MusicPlayerStoryArgs>;

export const Overview: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => ({
    props: {
      trackTitle: 'Nightcall',
      artistName: 'Kavinsky',
      audioSrc: '/assets/audio/kavinsky-song.mp3',
      playbackState: 'pause',
      muted: false,
      progress: 12,
    },
  }),
};

export const Playground: Story = {
  render: (args) => ({
    props: args,
  }),
};
