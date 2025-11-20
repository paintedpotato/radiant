// Updated RadiantReplica.jsx with Pexels videos, Unsplash photos, and embedded YouTube sermon placeholder
import React, { useEffect, useRef, useState } from "react";

export default function RadiantReplica() {
  // Playlist using Pexels sample videos
  const heroVideos = [
    { src: "https://player.vimeo.com/external/357097829.sd.mp4?s=17ee0475dbd2dfd6aebdd5d14318e403&profile_id=164&oauth2_token_id=57447761", id: "intro", poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { src: "https://player.vimeo.com/external/210457579.sd.mp4?s=dd283602d49158a916a6c1891d6400ed&profile_id=164", id: "v1" },
    { src: "https://player.vimeo.com/external/209182366.sd.mp4?s=de4b6ba674fbec6ff1571318dd43259a&profile_id=164", id: "v2" },
    { src: "https://player.vimeo.com/external/214196503.sd.mp4?s=8bb3a0904ec3ab6fa41063f63683bcab&profile_id=164", id: "v3" },
    { src: "https://player.vimeo.com/external/209854637.sd.mp4?s=7db97f0f8ed9c2ca221c169d0b94d55b&profile_id=164", id: "v4" },
    { src: "https://player.vimeo.com/external/209853785.sd.mp4?s=2f86bbbcddc28c166a4630bf8c1c4116&profile_id=164", id: "v5" }
  ];

  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    }

    function onEnded() {
      setIndex((i) => (i + 1) % heroVideos.length);
    }

    v.addEventListener("ended", onEnded);

    if (index === 0) {
      const t = setTimeout(() => setIndex(1), 5000);
      return () => {
        clearTimeout(t);
        v.removeEventListener("ended", onEnded);
      };
    }

    return () => v.removeEventListener("ended", onEnded);
  }, [index]);

  const Section = ({ children, className = "" }) => (
    <section className={`py-12 px-6 md:px-12 ${className}`}>{children}</section>
  );

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <header className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <video
          ref={videoRef}
          key={heroVideos[index].src}
          className="w-full h-full object-cover"
          src={heroVideos[index].src}
          poster={heroVideos[index].poster}
          autoPlay
          muted
          playsInline
        />
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-start md:items-center p-6 md:p-12 bg-gradient-to-t from-black/50 to-transparent">
          <div className="max-w-4xl text-left md:text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Radiant Church</h1>
            <p className="mt-3 text-lg md:text-xl text-white/90">We exist to move people towards Christ, community & calling.</p>
            <div className="mt-6 flex gap-3">
              <a className="inline-block bg-white/90 text-black px-5 py-3 rounded-2xl font-medium">Watch Messages</a>
              <a className="inline-block border border-white/40 text-white px-5 py-3 rounded-2xl">Find a Location</a>
            </div>
          </div>
        </div>
      </header>

      <Section className="bg-white -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Watch our latest messages from Radiant</h2>
            <p className="mt-2 text-sm text-gray-600">Subscribe now to stay up to date.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <iframe className="w-full aspect-video rounded" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sermon 1" allowFullScreen></iframe>
              <iframe className="w-full aspect-video rounded" src="https://www.youtube.com/embed/l482T0yNkeo" title="Sermon 2" allowFullScreen></iframe>
              <iframe className="w-full aspect-video rounded" src="https://www.youtube.com/embed/ZXsQAXx_ao0" title="Sermon 3" allowFullScreen></iframe>
            </div>
          </div>

          <aside className="hidden md:block">
            <div className="bg-gray-50 rounded p-4">Promotional card — "The Power of Perspective"</div>
          </aside>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold">What's Happening!</h3>
            <p className="mt-2 text-gray-700">Christmas at Radiant — Join us on December 25.</p>
            <div className="mt-4">
              <button className="px-5 py-3 bg-black text-white rounded-2xl">More info</button>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-red-600 text-white p-6 rounded">Christmas at Radiant — promo card</div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold">LOCATIONS</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-left">
            {["BRANDON","EAST ST. PETE","HILLSBOROUGH","ODESSA","SOUTHSHORE","WEST ST. PETE","ONLINE","CLEARWATER","HEIGHTS","NEW TAMPA","SOUTH TAMPA","TRINITY","WESTCHASE"].map((loc) => (
              <div key={loc} className="font-bold text-lg">{loc}</div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold">Our Values</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded">01<br/><strong>JESUS IS OUR ANSWER</strong><p className="mt-2 text-sm text-gray-600">We pursue a relationship with Jesus.</p></div>
            <div className="p-6 border rounded">02<br/><strong>THE BIBLE IS OUR FOUNDATION</strong><p className="mt-2 text-sm text-gray-600">Scripture leads everything we do.</p></div>
            <div className="p-6 border rounded">03<br/><strong>COMMUNITY & CALLING</strong><p className="mt-2 text-sm text-gray-600">We help people discover calling and community.</p></div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-4xl font-extrabold">RADIANT NEXTGEN</h3>
            <p className="mt-3 text-gray-700">NextGen creates safe and fun environments for kids and teens.</p>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 border rounded">Radiant Kids</button>
              <button className="px-4 py-2 border rounded">Radiant YTH</button>
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" alt="NextGen" className="w-full rounded shadow" />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="col-span-1 md:col-span-1">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" alt="Pastor" className="rounded shadow" />
          </div>
          <div className="col-span-2">
            <h3 className="text-3xl font-extrabold">OUR PASTOR</h3>
            <p className="mt-3 text-gray-700">Pastor Aaron Burke leads a thriving family of churches across Tampa Bay.</p>
            <div className="mt-4"><a className="text-red-600">Learn More</a></div>
          </div>
        </div>
      </Section>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-12">
          <div>
            <h4 className="font-bold text-xl">RADIANT CHURCH</h4>
            <p className="mt-3 text-sm text-gray-300">Locations, messages, give and more.</p>
          </div>

          <div>
            <h5 className="font-semibold">Connect</h5>
            <ul className="mt-3 text-sm text-gray-300 space-y-2">
              <li>Events</li>
              <li>Groups</li>
              <li>Volunteer</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Resources</h5>
            <ul className="mt-3 text-sm text-gray-300 space-y-2">
              <li>Blog</li>
              <li>Podcast</li>
              <li>Care</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">About</h5>
            <ul className="mt-3 text-sm text-gray-300 space-y-2">
              <li>Our Story</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">© Radiant Church — Built with love</div>
      </footer>
    </div>
  );
}
