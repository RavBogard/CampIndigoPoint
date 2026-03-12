import { siteSettings } from "../../content/site";

const AnnouncementBar = () => {
  const { announcement } = siteSettings;

  if (!announcement?.enabled) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-[var(--color-camp-teal)] to-[var(--color-camp-orange)] text-white font-semibold" role="status">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between py-4">
        <div className="grid gap-1">
          <p className="uppercase tracking-widest text-xs font-bold">{announcement.eyebrow}</p>
          <p className="font-bold">{announcement.title}</p>
          <p className="max-w-3xl text-white/85">{announcement.body}</p>
        </div>
        <a
          className="inline-flex items-center justify-center py-3 px-4 rounded-full bg-white/20 text-white no-underline whitespace-nowrap hover:bg-white/30 transition-colors"
          href={announcement.action.href}
          rel="noreferrer"
          target="_blank"
        >
          {announcement.action.shortLabel}
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
