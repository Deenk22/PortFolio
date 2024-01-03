export default function SocialMedia({href, icon, title}) {
  return (
    <a
      className="flex flex-col justify-center items-center font-main text-md"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      <span className="dark:text-white-section1  text-black-font mt-2">
        {title}
      </span>
    </a>
  );
}
