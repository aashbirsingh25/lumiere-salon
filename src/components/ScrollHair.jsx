import { useRef, useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

// ScrollHair: video scrubbed by scroll (same Apple-style technique as the
// restaurant site's pizza cheese-pull section).
//  - Video: on each scroll update, set currentTime = progress * duration
//    directly. For this to seek smoothly, the source clip must be re-encoded
//    so every frame is a keyframe (see the ffmpeg command in the README).
//  - Captions: the ACTIVE caption is chosen from the scroll "zone" and CSS
//    cross-fades it, rather than tying opacity directly to scroll position.
//  - Fallback: if the video is missing or fails to load, this renders as a
//    normal (unpinned) static section with a scroll-reveal, instead of
//    silently breaking the page's scroll (a pinned ScrollTrigger that never
//    gets created still reserves layout space with nothing happening in it).
function ScrollHair() {
  const section = useRef(null);
  const videoRef = useRef(null);
  const [active, setActive] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let st;
    let duration = 5;
    let cancelled = false;

    const setup = () => {
      if (cancelled) return;
      duration = video.duration || 5;
      setVideoReady(true);

      st = ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: "+=2600",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const p = self.progress;

          if (video.readyState >= 2) {
            video.currentTime = Math.min(p * duration, duration - 0.001);
          }

          let next = 0;
          if (p >= 0.66) next = 2;
          else if (p >= 0.33) next = 1;
          else next = 0;
          setActive((prev) => (prev === next ? prev : next));
        },
      });

      ScrollTrigger.refresh();
    };

    const onError = () => {
      if (!cancelled) setVideoFailed(true);
    };

    if (video.readyState >= 2) setup();
    else {
      video.addEventListener("loadeddata", setup, { once: true });
      video.addEventListener("error", onError, { once: true });
      video.load();
    }

    return () => {
      cancelled = true;
      if (st) st.kill();
      video.removeEventListener("loadeddata", setup);
      video.removeEventListener("error", onError);
    };
  }, []);

  const caps = [
    { eyebrow: "Hand-Finished", title: <>Every strand, <em>considered</em></> },
    { eyebrow: "Colour Atelier", title: <>Transformed to <em>radiance</em></> },
    { eyebrow: "The Reveal", title: <>Your <em>glow</em>, unveiled</> },
  ];

  // Video missing/broken: render a static, non-pinned fallback so the page
  // keeps scrolling normally instead of reserving a dead pinned section.
  if (videoFailed) {
    return (
      <section className="scrollvideo scrollhair scrollhair-fallback">
        <div className="sv-overlay" />
        <div className="sv-caps">
          <div className="sv-cap is-active">
            <span className="eyebrow">{caps[0].eyebrow}</span>
            <h2>{caps[0].title}</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`scrollvideo scrollhair ${videoReady ? "" : "scrollhair-loading"}`}
      ref={section}
    >
      <video
        ref={videoRef}
        className="sv-video"
        src="/hair_scrub.mp4"
        muted
        playsInline
        preload="auto"
      />
      <div className="sv-overlay" />
      <div className="sv-caps">
        {caps.map((c, i) => (
          <div key={i} className={`sv-cap ${active === i ? "is-active" : ""}`}>
            <span className="eyebrow">{c.eyebrow}</span>
            <h2>{c.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollHair;
