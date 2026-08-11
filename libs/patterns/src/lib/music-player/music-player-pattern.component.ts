import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import type { OnDestroy, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { NcButtonComponent, NcProgressBarComponent } from '@nightcall-ui/components';
import { NcIconComponent } from '@nightcall-ui/icons';

let nextScrubberId = 0;

@Component({
  selector: 'nc-music-player-pattern',
  imports: [NcButtonComponent, NcIconComponent, NcProgressBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-music-player',
  },
  templateUrl: './music-player-pattern.component.html',
  styleUrl: './music-player-pattern.component.scss',
})
export class NcMusicPlayerPatternComponent implements OnInit, OnDestroy {
  readonly trackTitle = input('Nightcall');
  readonly artistName = input('Kavinsky');
  readonly audioSrc = input('/assets/audio/kavinsky-song.mp3');
  readonly playbackState = input<'play' | 'pause'>('pause');
  readonly muted = input(false);
  readonly progress = input(0);
  readonly eyebrow = input('Pattern • Media playback');

  protected readonly isReady = signal(false);
  protected readonly isPlaying = signal(false);
  protected readonly isMuted = signal(false);
  protected readonly volume = signal(0.9);
  protected readonly currentTime = signal(0);
  protected readonly duration = signal(0);
  protected readonly statusMessage = signal('Player ready.');
  protected readonly scrubberId = `nc-music-player-scrubber-${nextScrubberId++}`;

  protected readonly progressValue = computed(() => this.currentTime());
  protected readonly currentTimeLabel = computed(() => this.formatTime(this.currentTime()));
  protected readonly durationLabel = computed(() => this.formatTime(this.duration()));
  protected readonly artworkLabel = computed(
    () => `Album artwork placeholder for ${this.trackTitle()} by ${this.artistName()}`,
  );

  private player: Howl | null = null;
  private syncIntervalId: number | null = null;
  private lastAppliedExternalProgress = Number.NaN;

  constructor() {
    effect(() => {
      if (!this.isReady()) {
        return;
      }

      const muted = this.muted();
      this.player?.mute(muted);
      this.isMuted.set(muted);
    });

    effect(() => {
      if (!this.isReady()) {
        return;
      }

      if (this.playbackState() === 'play') {
        this.play();
        return;
      }

      this.pause();
    });

    effect(() => {
      if (!this.isReady()) {
        return;
      }

      const duration = this.duration();
      const externalProgress = this.progress();

      if (!Number.isFinite(externalProgress) || duration <= 0) {
        return;
      }

      const normalizedProgress = Math.min(100, Math.max(0, externalProgress));
      if (normalizedProgress === this.lastAppliedExternalProgress) {
        return;
      }

      this.lastAppliedExternalProgress = normalizedProgress;
      const nextTime = (normalizedProgress / 100) * duration;
      this.player?.seek(nextTime);
      this.currentTime.set(nextTime);
    });
  }

  ngOnInit(): void {
    this.player = new Howl({
      src: [this.audioSrc()],
      html5: true,
      preload: true,
      volume: 0.9,
      onload: () => {
        const nextDuration = this.player?.duration() ?? 0;
        this.duration.set(nextDuration);
        this.isReady.set(nextDuration > 0);
        this.statusMessage.set(
          `Loaded ${this.trackTitle()} by ${this.artistName()}. Duration ${this.formatTime(nextDuration)}.`,
        );
      },
      onplay: () => {
        this.isPlaying.set(true);
        this.startSyncLoop();
      },
      onpause: () => {
        this.isPlaying.set(false);
        this.stopSyncLoop();
        this.syncCurrentTime();
      },
      onstop: () => {
        this.isPlaying.set(false);
        this.stopSyncLoop();
        this.currentTime.set(0);
      },
      onend: () => {
        this.isPlaying.set(false);
        this.stopSyncLoop();
        this.currentTime.set(this.duration());
        this.statusMessage.set('Playback finished.');
      },
      onloaderror: () => {
        this.statusMessage.set('Audio could not be loaded. Verify the asset path.');
      },
      onplayerror: () => {
        this.statusMessage.set('Playback could not start in this environment.');
      },
    });
  }

  ngOnDestroy(): void {
    this.stopSyncLoop();
    this.player?.unload();
    this.player = null;
  }

  protected togglePlayback(): void {
    if (this.isPlaying()) {
      this.pause(true);
      return;
    }

    this.play(true);
  }

  protected stopPlayback(): void {
    this.player?.stop();
    this.currentTime.set(0);
    this.statusMessage.set('Playback stopped.');
  }

  protected skipBy(seconds: number): void {
    const nextTime = Math.min(this.duration(), Math.max(0, this.currentTime() + seconds));
    this.player?.seek(nextTime);
    this.currentTime.set(nextTime);
    this.statusMessage.set(`Playback moved to ${this.formatTime(nextTime)}.`);
  }

  protected onVolumeInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const nextVolume = Number(input.value);

    if (!Number.isFinite(nextVolume)) {
      return;
    }

    this.player?.volume(nextVolume);
    this.volume.set(nextVolume);

    if (this.isMuted() && nextVolume > 0) {
      this.player?.mute(false);
      this.isMuted.set(false);
    }
  }

  protected onScrubInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const nextTime = Number(input.value);

    if (!Number.isFinite(nextTime)) {
      return;
    }

    this.player?.seek(nextTime);
    this.currentTime.set(nextTime);
  }

  protected onScrubCommit(event: Event): void {
    const input = event.target as HTMLInputElement;
    const nextTime = Number(input.value);

    if (!Number.isFinite(nextTime)) {
      return;
    }

    this.player?.seek(nextTime);
    this.currentTime.set(nextTime);
    this.statusMessage.set(`Playback moved to ${this.formatTime(nextTime)}.`);
  }

  private play(announce = false): void {
    this.player?.play();

    if (announce) {
      this.statusMessage.set(`Playing ${this.trackTitle()} by ${this.artistName()}.`);
    }
  }

  private pause(announce = false): void {
    this.player?.pause();

    if (announce) {
      this.statusMessage.set(`Paused at ${this.formatTime(this.currentTime())}.`);
    }
  }

  private startSyncLoop(): void {
    if (this.syncIntervalId !== null) {
      return;
    }

    this.syncCurrentTime();
    this.syncIntervalId = window.setInterval(() => {
      this.syncCurrentTime();
    }, 250);
  }

  private stopSyncLoop(): void {
    if (this.syncIntervalId === null) {
      return;
    }

    window.clearInterval(this.syncIntervalId);
    this.syncIntervalId = null;
  }

  private syncCurrentTime(): void {
    const currentPosition = this.player?.seek();

    if (typeof currentPosition !== 'number' || !Number.isFinite(currentPosition)) {
      return;
    }

    this.currentTime.set(currentPosition);
  }

  private formatTime(timeInSeconds: number): string {
    if (!Number.isFinite(timeInSeconds) || timeInSeconds <= 0) {
      return '0:00';
    }

    const totalSeconds = Math.floor(timeInSeconds);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}
