"use client";

import { useState } from "react";
import { Wand2, RefreshCw, Sparkles } from "lucide-react";

const niches = [
  "Cottagecore", "Cosmic/Celestial", "Japanese Streetwear", "Dark Academia",
  "Retro Sports", "Mental Health", "Y2K Nostalgia", "Pet Portraits",
];

const styles = [
  "Vintage Illustration", "Minimalist Line Art", "Bold Graphic", "Watercolor",
  "Woodcut", "Neon Cyberpunk", "Kawaii Cute", "Typographic",
];

const audiences = [
  "Gen Z Women", "Millennial Men", "Pet Lovers", "Gamers",
  "Yoga Enthusiasts", "Coffee Addicts", "Plant Parents", "Bookworms",
];

interface GeneratedIdea {
  title: string;
  concept: string;
  prompt: string;
  hashtags: string[];
  price: string;
  platform: string;
}

function generateIdea(niche: string, style: string, audience: string): GeneratedIdea {
  const ideas: Record<string, GeneratedIdea> = {
    "Cottagecore": {
      title: "Enchanted Mushroom Circle",
      concept: "A magical ring of toadstools with tiny fairy lights woven through the caps, surrounded by wildflowers and morning dew",
      prompt: `Create a detailed ${style.toLowerCase()} illustration of a magical mushroom fairy circle at golden hour. Include: fly agaric mushrooms with white spots, tiny glowing fairy lights, wildflowers (chamomile, forget-me-nots), morning dewdrops on leaves, and delicate spider webs. Style: ${style}. Color palette: sage green, warm cream, terracotta, mushroom brown. Perfect for ${audience}.`,
      hashtags: ["#cottagecore", "#mushroomart", "#fairycore", "#botanical", "#naturelover"],
      price: "$27.99",
      platform: "Etsy / Printful",
    },
    "Cosmic/Celestial": {
      title: "Zodiac Spirit Animal",
      concept: "A constellation-outlined spirit animal with stars forming its body, set against a deep cosmic nebula background",
      prompt: `Design a ${style.toLowerCase()} artwork of a ${audience.includes("Women") ? "wolf" : "bear"} made entirely of constellation lines and stars. The animal should be outlined with golden star points connected by thin constellation lines. Background: deep indigo nebula with swirling purple and blue cosmic clouds. Include: crescent moon, scattered stars, and subtle galaxy spiral. Style: ${style}. For ${audience}.`,
      hashtags: ["#celestial", "#constellation", "#zodiac", "#astrology", "#cosmicart"],
      price: "$31.99",
      platform: "Redbubble / Merch by Amazon",
    },
    "Japanese Streetwear": {
      title: "Neo Tokyo Ramen",
      concept: "A steaming bowl of ramen floating in a cyberpunk Tokyo skyline at night, with neon kanji and cherry blossom petals",
      prompt: `Create a ${style.toLowerCase()} graphic of a ramen bowl levitating above a neon-lit Tokyo street at night. Include: steam rising with glowing kanji characters, neon signs in Japanese, cherry blossoms blowing past, chopsticks hovering above bowl, reflection of city lights in broth. Style: ${style}. Colors: electric red, neon yellow, deep black, hot pink. For ${audience}.`,
      hashtags: ["#japanesestreetart", "#ramen", "#neotokyo", "#cyberpunk", "#streetwear"],
      price: "$29.99",
      platform: "Printify / Teespring",
    },
    "Dark Academia": {
      title: "Victorian Moth Botanica",
      concept: "An anatomically detailed death's head moth pinned to an aged parchment surrounded by pressed flowers and cryptic latin text",
      prompt: `Design a ${style.toLowerCase()} illustration in Victorian scientific journal style. Central element: Acherontia atropos moth with skull marking, wings spread. Surrounding: pressed botanical specimens (belladonna, foxglove, black roses), aged parchment texture, handwritten latin taxonomy notes, wax seal. Style: ${style}. Sepia and ink tones. For ${audience}.`,
      hashtags: ["#darkacademia", "#victorian", "#moth", "#botanical", "#gothic"],
      price: "$25.99",
      platform: "Etsy / Redbubble",
    },
    "Mental Health": {
      title: "Growing Through It",
      concept: "A cracked ceramic pot with a thriving plant growing through the breaks, symbolizing resilience and growth from difficulty",
      prompt: `Create a ${style.toLowerCase()} illustration of a cracked terracotta pot with golden kintsugi repairs (gold filling the cracks), and a beautiful green plant growing vigorously through and out of the breaks. Below: bold modern typography reading 'Growing Through It'. Style: ${style}. Colors: warm terracotta, forest green, gold. Message-focused design for ${audience}.`,
      hashtags: ["#mentalhealthmatters", "#selfcare", "#resilience", "#kintsugi", "#growthmindset"],
      price: "$24.99",
      platform: "Merch by Amazon / Redbubble",
    },
  };

  const nicheKey = Object.keys(ideas).find(k => niche.includes(k.split("/")[0]));
  if (nicheKey) return ideas[nicheKey];

  return {
    title: `${style} ${niche} Design`,
    concept: `A ${style.toLowerCase()} take on ${niche} themes crafted specifically for ${audience}`,
    prompt: `Create a ${style.toLowerCase()} t-shirt design for the ${niche} niche. Target audience: ${audience}. Make it bold, memorable, and trending on social media.`,
    hashtags: [`#${niche.toLowerCase().replace(/\s/g, "")}`, "#tshirtdesign", "#printlife", "#trending"],
    price: "$26.99",
    platform: "Printful / Printify",
  };
}

export default function IdeaGenerator() {
  const [selectedNiche, setSelectedNiche] = useState(niches[0]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedAudience, setSelectedAudience] = useState(audiences[0]);
  const [generated, setGenerated] = useState<GeneratedIdea | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setGenerated(null);
    setTimeout(() => {
      setGenerated(generateIdea(selectedNiche, selectedStyle, selectedAudience));
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="mb-10">
      <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/50 via-gray-900/80 to-fuchsia-950/50 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-violet-500/20 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">Design Idea Generator</h2>
            <p className="text-gray-400 text-xs">
              Select your parameters and get a complete design brief + AI prompt
            </p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Selectors */}
          <div className="space-y-5">
            {/* Niche */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Niche
              </label>
              <div className="grid grid-cols-2 gap-2">
                {niches.map((n) => (
                  <button
                    key={n}
                    onClick={() => setSelectedNiche(n)}
                    className={`text-left text-xs px-3 py-2 rounded-xl border transition-all duration-200 ${
                      selectedNiche === n
                        ? "bg-violet-600/30 border-violet-500/60 text-violet-200"
                        : "border-gray-700/50 text-gray-400 hover:border-gray-600 hover:text-gray-300 bg-gray-800/30"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Art Style
              </label>
              <div className="grid grid-cols-2 gap-2">
                {styles.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStyle(s)}
                    className={`text-left text-xs px-3 py-2 rounded-xl border transition-all duration-200 ${
                      selectedStyle === s
                        ? "bg-fuchsia-600/30 border-fuchsia-500/60 text-fuchsia-200"
                        : "border-gray-700/50 text-gray-400 hover:border-gray-600 hover:text-gray-300 bg-gray-800/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Audience */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Target Audience
              </label>
              <div className="grid grid-cols-2 gap-2">
                {audiences.map((a) => (
                  <button
                    key={a}
                    onClick={() => setSelectedAudience(a)}
                    className={`text-left text-xs px-3 py-2 rounded-xl border transition-all duration-200 ${
                      selectedAudience === a
                        ? "bg-emerald-600/30 border-emerald-500/60 text-emerald-200"
                        : "border-gray-700/50 text-gray-400 hover:border-gray-600 hover:text-gray-300 bg-gray-800/30"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Wand2 className="w-4 h-4" />
              )}
              {loading ? "Generating idea..." : "Generate Design Brief"}
            </button>
          </div>

          {/* Output */}
          <div className="relative">
            {!generated && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-4 border border-violet-500/20">
                  <Wand2 className="w-7 h-7 text-violet-400" />
                </div>
                <p className="text-gray-400 text-sm">
                  Select your parameters and click Generate to create a complete design brief
                </p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-2 border-violet-500/20 border-t-violet-500 animate-spin" />
                  <div className="absolute inset-2 rounded-full border-2 border-fuchsia-500/20 border-t-fuchsia-500 animate-spin animation-delay-150" style={{ animationDirection: "reverse" }} />
                </div>
                <p className="text-gray-400 text-sm mt-4">Crafting your design brief...</p>
              </div>
            )}

            {generated && (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-gray-900/60 rounded-xl border border-gray-700/50 p-4">
                  <p className="text-xs text-violet-400 font-semibold uppercase tracking-wide mb-1">Concept Title</p>
                  <h4 className="text-white font-bold text-lg">{generated.title}</h4>
                </div>

                <div className="bg-gray-900/60 rounded-xl border border-gray-700/50 p-4">
                  <p className="text-xs text-fuchsia-400 font-semibold uppercase tracking-wide mb-2">Design Concept</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{generated.concept}</p>
                </div>

                <div className="bg-violet-900/20 rounded-xl border border-violet-500/30 p-4">
                  <p className="text-xs text-violet-400 font-semibold uppercase tracking-wide mb-2">AI Image Prompt</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{generated.prompt}</p>
                  <button
                    onClick={() => navigator.clipboard.writeText(generated.prompt)}
                    className="mt-3 text-xs text-violet-400 hover:text-violet-300 border border-violet-500/30 hover:border-violet-500/60 px-3 py-1.5 rounded-lg transition-all"
                  >
                    Copy prompt for Midjourney / DALL-E
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-900/60 rounded-xl border border-gray-700/50 p-3">
                    <p className="text-xs text-emerald-400 font-semibold mb-1">Suggested Price</p>
                    <p className="text-white font-bold">{generated.price}</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl border border-gray-700/50 p-3">
                    <p className="text-xs text-amber-400 font-semibold mb-1">Best Platform</p>
                    <p className="text-white text-xs font-semibold">{generated.platform}</p>
                  </div>
                </div>

                <div className="bg-gray-900/60 rounded-xl border border-gray-700/50 p-4">
                  <p className="text-xs text-gray-400 font-semibold mb-2">Marketing Hashtags</p>
                  <div className="flex flex-wrap gap-2">
                    {generated.hashtags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-lg border border-gray-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
