export default function IconCard({...props}) {
  const {...stack} = props;
  console.log(stack);
  return (
    <article className="flex flex-col justify-center item-center">
      <img src={stack.src} alt={stack.title} width={stack.width} />
    </article>
  );
}
