import React, { useRef, useState, useEffect } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Clock } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface VideoShowcaseProps {
  currentLang: LanguageCode;
}

interface Chapter {
  seconds: number;
  timeStr: string;
  title: string;
  subtitle: string;
}

const CHAPTERS: Chapter[] = [
  { seconds: 0, timeStr: '0:00', title: 'Need a Pro?', subtitle: 'Finding trusted services' },
  { seconds: 16, timeStr: '0:16', title: 'Describe It', subtitle: 'Natural language input' },
  { seconds: 24, timeStr: '0:24', title: 'Post in 2 Min', subtitle: 'Photos, location & date' },
  { seconds: 29, timeStr: '0:29', title: 'Smart Radar', subtitle: 'Matching nearby pros' },
  { seconds: 40, timeStr: '0:40', title: 'Compare Offers', subtitle: 'Prices, ratings & dates' },
  { seconds: 51, timeStr: '0:51', title: 'Customer Dashboard', subtitle: 'All jobs in one place' },
  { seconds: 56, timeStr: '0:56', title: 'For Pros', subtitle: 'Jobs come directly to you' },
  { seconds: 65, timeStr: '1:05', title: '1-Min Offer', subtitle: 'Fast and clear quote' },
];

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(80);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      trackEvent('video_pause', { timestamp: videoRef.current.currentTime });
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      trackEvent('video_play', { timestamp: videoRef.current.currentTime });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const jumpToChapter = (chap: Chapter, index: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = chap.seconds;
    setCurrentTime(chap.seconds);
    setActiveChapterIndex(index);
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
    trackEvent('video_chapter_jump', { chapter: chap.title, seconds: chap.seconds });
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen().catch((err) => console.error(err));
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      // update active chapter
      let currentIdx = 0;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        if (video.currentTime >= CHAPTERS[i].seconds) {
          currentIdx = i;
          break;
        }
      }
      setActiveChapterIndex(currentIdx);
    };

    const onLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      trackEvent('video_completed');
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <section id="video-tour" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {t.video.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {t.video.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.video.subtitle}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative group rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl"
          >
            <video
              ref={videoRef}
              src="/assets/aistudio/Loqelo_final_video_compressed_fafd7b79.mp4"
              playsInline
              muted={isMuted}
              onClick={togglePlay}
              className="w-full h-auto aspect-video object-cover cursor-pointer"
            />

            {/* Play overlay button when paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity"
              >
                <div className="w-20 h-20 rounded-full bg-teal-600/90 hover:bg-teal-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <span className="mt-4 text-sm font-semibold text-white/90 tracking-wide">
                  Watch Loqelo in Action (80 sec)
                </span>
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2 transition-opacity">
              
              {/* Scrubber timeline */}
              <div className="relative flex items-center">
                <input
                  type="range"
                  min={0}
                  max={duration || 80}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
                  aria-label="Video timeline scrubber"
                />
              </div>

              {/* Action buttons row */}
              <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-200">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 hover:text-white transition-colors"
                    aria-label={isPlaying ? t.video.pauseVideo : t.video.playVideo}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 hover:text-white transition-colors"
                    aria-label={isMuted ? t.video.unmute : t.video.mute}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-teal-400" />}
                  </button>

                  <span className="tabular-nums text-xs text-slate-300">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-xs text-teal-300/90 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/60">
                    {CHAPTERS[activeChapterIndex]?.title}
                  </span>
                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 hover:text-white transition-colors"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chapter Quick Jumps */}
          <div className="mt-6">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              Quick Chapters:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {CHAPTERS.map((chap, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToChapter(chap, idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeChapterIndex === idx
                      ? 'bg-teal-950/70 border-teal-500/80 text-white shadow-sm ring-1 ring-teal-500/30'
                      : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-teal-400 font-bold">{chap.timeStr}</span>
                    {activeChapterIndex === idx && (
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold truncate text-white">
                    {chap.title}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">
                    {chap.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
