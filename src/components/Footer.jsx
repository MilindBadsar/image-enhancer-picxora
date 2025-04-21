import { Github, Twitter, Linkedin, Mail, Copyright } from "lucide-react";

const socials = [
  { name: "Github", href: "https://github.com/MilindBadsar", icon: Github },
  { name: "Twitter", href: "https://x.com/Milind_Badsar", icon: Twitter },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/milindbadsar/",
    icon: Linkedin,
  },
  { name: "Mail", href: "mailto:2022uch1264@mnit.ac.in", icon: Mail },
];

export default function FooterNew() {
  return (
    <footer className="w-full relative mt-20 z-10 bg-gradient-to-tr from-gray-900 via-purple-900 to-purple-700 glass shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row md:justify-between gap-12">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="inline-block text-3xl md:text-4xl font-playfair font-extrabold leading-tight bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              PixelPolish
            </span>
            <p className="text-gray-300 font-medium mt-4 max-w-xs animate-fade-in text-lg">
              Transform your images
              <br />
              with AI brilliance.
            </p>
          </div>
        </div>

        <div className="flex-1 pt-2">
          <div className="mb-4 text-xl font-semibold text-gray-300 font-playfair">
            Connect
          </div>
          <div className="flex gap-5">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="hover-scale p-2 rounded-full bg-white/20 hover:bg-purple-700/50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <social.icon
                  className="w-6 h-6 text-purple-300 hover:text-purple-400 transition-all"
                  strokeWidth={2.2}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-purple-400/40">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-5 gap-2">
          <div className="flex items-center text-gray-400 gap-2 text-sm">
            <Copyright className="w-4 h-4" /> 2025 PixelPolish. All rights
            reserved.
          </div>
          <div className="text-sm text-gray-400">
            Made with <span className="text-red-500 font-bold">♥</span> by
            Milind Badsar.
          </div>
        </div>
      </div>
    </footer>
  );
}
