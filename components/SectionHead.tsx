type Props = {
  num: string
  name: string
}

export default function SectionHead({ num, name }: Props) {
  return (
    <div className="section-tag">
      <span className="num">{num}</span>
      <span className="sep">·</span>
      <span className="name">{name}</span>
    </div>
  )
}
