import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../config/clinicData';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#EAF8FF]/50 border-b border-[#B3F6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Transformations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002429] tracking-tight">
            Real Smile Transformations
          </h2>
          <p className="text-sm sm:text-base text-[#002429]/75 max-w-xl mx-auto">
            Drag the comparison slider left and right to inspect real restorative and aesthetic dental results achieved at our Quetta clinic.
          </p>

          {/* Case selector tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {BEFORE_AFTER_CASES.map((c, index) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(index);
                  setSliderPos(50);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCaseIndex === index
                    ? 'bg-[#00BCD5] text-white shadow-cyan-soft'
                    : 'bg-white text-[#002429]/80 border border-[#B3F6FF] hover:bg-[#EAF8FF]'
                }`}
              >
                Case 0{index + 1}: {c.treatment.split(' ')[0]} {c.treatment.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-6 border border-[#B3F6FF] shadow-cyan-soft">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Interactive Image Slider (7 cols) */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#B3F6FF]"
              >
                {/* AFTER image (Underneath, full view) */}
                <img
                  src={activeCase.afterImage}
                  alt={`${activeCase.title} - After`}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                
                {/* After badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#002429]/80 text-[#B3F6FF] text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs">
                  After
                </div>

                {/* BEFORE image (Clipped on top according to sliderPos) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={activeCase.beforeImage}
                    alt={`${activeCase.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    }}
                    draggable={false}
                  />
                  {/* Before badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs">
                    Before
                  </div>
                </div>

                {/* Drag Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Circular drag handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#00BCD5] text-white border-2 border-white shadow-md flex items-center justify-center">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#002429]/60 mt-2 px-1">
                <span>◀ Slide to see Before</span>
                <span className="font-medium text-[#00BCD5]">Drag divider to inspect</span>
                <span>Slide to see After ▶</span>
              </div>
            </div>

            {/* Case Details Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
                  Case Study
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#002429] mt-1 leading-snug">
                  {activeCase.title}
                </h3>
              </div>

              <div className="space-y-2 text-xs text-[#002429]/80">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#EAF8FF] border border-[#B3F6FF]/60">
                  <span className="font-semibold text-[#002429]">Procedure:</span>
                  <span className="font-medium text-[#00BCD5]">{activeCase.treatment}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#EAF8FF] border border-[#B3F6FF]/60">
                  <span className="font-semibold text-[#002429]">Treatment Time:</span>
                  <span className="font-medium text-[#002429]">{activeCase.duration}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#002429]/75 leading-relaxed">
                {activeCase.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white text-xs sm:text-sm font-bold shadow-cyan-soft transition-all flex items-center justify-center gap-2"
                >
                  <span>Book a Consultation for This Treatment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-[#002429]/60 italic text-center">
                *Individual results vary. Clinical photography with patient authorization.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
