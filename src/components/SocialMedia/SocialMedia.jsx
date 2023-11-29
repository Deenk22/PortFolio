export default function SocialMedia({href, icon}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}
