import { siteSettings } from "../../content/site";

const AnnouncementBar = () => {
  const { announcement } = siteSettings;

  if (!announcement?.enabled) {
    return null;
  }

  return (
    <div className="announcement-bar" role="status">
      <div className="container announcement-bar__inner">
        <div className="announcement-bar__copy">
          <p className="announcement-bar__eyebrow">{announcement.eyebrow}</p>
          <p className="announcement-bar__title">{announcement.title}</p>
          <p className="announcement-bar__body">{announcement.body}</p>
        </div>
        <a
          className="announcement-bar__action"
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
