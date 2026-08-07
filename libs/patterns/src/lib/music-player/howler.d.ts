declare module 'howler' {
  export interface HowlOptions {
    src: string[];
    html5?: boolean;
    preload?: boolean | 'metadata';
    volume?: number;
    onload?: () => void;
    onplay?: () => void;
    onpause?: () => void;
    onstop?: () => void;
    onend?: () => void;
    onloaderror?: (soundId: number, error: unknown) => void;
    onplayerror?: (soundId: number, error: unknown) => void;
  }

  export class Howl {
    constructor(options: HowlOptions);
    duration(id?: number): number;
    play(id?: number | string): number;
    pause(id?: number): this;
    stop(id?: number): this;
    seek(): number;
    seek(seek: number, id?: number): this;
    mute(muted?: boolean, id?: number): this | boolean;
    unload(): void;
  }
}
