'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-blue-600', 'bg-blue-600', 'bg-sky-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-sky-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Optimasi Kampanye Meta Ads", en: "Meta Ads Campaign Optimisation" },
    description: { id: "Mengoptimalkan kampanye Meta Ads memakai Ads Manager untuk mendukung performa iklan digital.", en: "Optimising Meta Ads campaigns with Ads Manager to support digital ad performance." },
    framework: "META ADS & SOCIAL MEDIA MANAGEMENT 2025",
    techStack: ["Meta Ads", "Ads Manager"],
  },
  {
    number: '02',
    title: { id: "Penjadwalan Konten dan Interaksi Facebook", en: "Facebook Content Scheduling and Interaction" },
    description: { id: "Mengelola media sosial Facebook lewat penjadwalan konten dan interaksi pelanggan untuk meningkatkan engagement.", en: "Managing Facebook through content scheduling and customer interaction to increase engagement." },
    framework: "META ADS & SOCIAL MEDIA MANAGEMENT 2025",
    techStack: ["Facebook", "Engagement"],
  },
  {
    number: '03',
    title: { id: "Seleksi Konten Video Berpotensi Viral", en: "Potentially Viral Video Content Selection" },
    description: { id: "Menyeleksi konten video berpotensi viral sebagai referensi tim kreatif dalam pengembangan materi promosi.", en: "Selecting potentially viral video content as a reference for the creative team in developing promotional materials." },
    framework: "META ADS & SOCIAL MEDIA MANAGEMENT 2025",
    techStack: ["Riset Konten", "Kreatif"],
  },
  {
    number: '04',
    title: { id: "Pengelolaan Media Sosial dan Iklan Digital", en: "Social Media and Digital Advertising Management" },
    description: { id: "Mengelola media sosial dan mengoptimalkan kampanye digital advertising untuk memperluas jangkauan promosi layanan.", en: "Managing social media and optimising digital advertising campaigns to widen the reach of service promotions." },
    framework: "AIRASIA TRAVEL SERVICE CENTER 2025",
    techStack: ["Social Media", "Digital Ads"],
  },
  {
    number: '05',
    title: { id: "Strategi Komunikasi Pemasaran", en: "Marketing Communication Strategy" },
    description: { id: "Mengembangkan strategi komunikasi pemasaran yang meningkatkan brand awareness hingga 30% dalam enam bulan.", en: "Developing marketing communication strategies that raised brand awareness by up to 30% within six months." },
    framework: "PT ASURANSI ALLIANZ LIFE INDONESIA 2024",
    techStack: ["Brand Awareness", "Marketing"],
  },
  {
    number: '06',
    title: { id: "Pengelolaan Inventaris Ciputra Film Festival", en: "Ciputra Film Festival Inventory Management" },
    description: { id: "Menyusun data inventaris, mengoordinasikan peminjaman, dan menyusun laporan inventaris akhir untuk acara.", en: "Compiling inventory data, coordinating lending, and preparing the final inventory report for the event." },
    framework: "CIPUTRA FILM FESTIVAL 2024",
    techStack: ["Inventaris", "Acara"],
  },
  {
    number: '07',
    title: { id: "Humas dan Kemitraan UKM Teater", en: "Public Relations and Partnerships, Theatre Student Organisation" },
    description: { id: "Membangun kerja sama dengan komunitas dan mitra eksternal serta mengelola media sosial UKM.", en: "Building partnerships with communities and external partners and managing the organisation's social media." },
    framework: "UKM TEATER 2023 - 2024",
    techStack: ["Humas", "Kemitraan"],
  },
  {
    number: '08',
    title: { id: "Inventaris Closing OWEEK", en: "OWEEK Closing Inventory" },
    description: { id: "Menyusun konsep dan kebutuhan inventaris serta mengelola peminjaman peralatan untuk acara Closing OWEEK.", en: "Preparing inventory concepts and needs and managing equipment lending for the OWEEK Closing event." },
    framework: "OWEEK UNIVERSITAS CIPUTRA 2023",
    techStack: ["Inventaris", "OWEEK"],
  },
  {
    number: '09',
    title: { id: "Publikasi Jurnal: Manajemen Akun Instagram", en: "Journal Publication: Instagram Account Management" },
    description: { id: "Artikel jurnal tentang pengelolaan akun Instagram @kiranatours.id untuk meningkatkan ketertarikan konsumen (IJHESS, 2026).", en: "A journal article on managing the @kiranatours.id Instagram account to increase consumer attraction (IJHESS, 2026)." },
    framework: "IJHESS VOL. 6 NO. 2, 2026",
    techStack: ["Instagram", "Riset"],
  },
  {
    number: '10',
    title: { id: "Art Direction Film The Final Vote", en: "Art Direction, The Final Vote Film" },
    description: { id: "Art Director dalam produksi film “The Final Vote”.", en: "Art Director on the production of the film “The Final Vote”." },
    framework: "FILM PRODUCTION 2025",
    techStack: ["Film", "Art Direction"],
  },
  {
    number: '11',
    title: { id: "Inventaris FikomWeek", en: "FikomWeek Inventory" },
    description: { id: "Anggota Divisi Inventory pada kegiatan FikomWeek.", en: "Inventory Division member at the FikomWeek event." },
    framework: "FIKOMWEEK 2023",
    techStack: ["Inventaris", "Acara"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'MARKETING COMMUNICATION PORTFOLIO' : 'PORTOFOLIO MARKETING COMMUNICATION'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Digital Marketing, Social Media & Organisation Work' : 'Digital Marketing, Media Sosial & Kerja Organisasi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of Meta Ads, social media, marketing communication, and organisational work.'
              : 'Rekam jejak Meta Ads, media sosial, komunikasi pemasaran, dan kerja organisasi.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
