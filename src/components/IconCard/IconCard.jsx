export default function IconCard({...props}) {
  const {...stack} = props;
  return (
    <article className="flex flex-col justify-center item-center">
      <img src={stack.src} alt={stack.title} width={stack.width} />
    </article>
  );
}
