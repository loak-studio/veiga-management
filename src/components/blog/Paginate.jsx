export default function Paginate(props) {
  return (
    <div className="paginate-container">
      <div className="paginate">
      {(props.max - props.current) <= 2 && <PageLink max={props.max} current={props.current} plus={-6} />}
      {(props.max - props.current) <= 1 && <PageLink max={props.max} current={props.current} plus={-5} />}
      {(props.max - props.current) <= 0 && <PageLink max={props.max} current={props.current} plus={-4} />}
      <PageLink max={props.max} current={props.current} plus={-3} />
      <PageLink max={props.max} current={props.current} plus={-2} />
      <PageLink max={props.max} current={props.current} plus={-1} />
      <span className="paginate__item paginate__item--active text">{props.current}</span>
      <PageLink max={props.max} current={props.current} plus={1} />
      <PageLink max={props.max} current={props.current} plus={2} />
      <PageLink max={props.max} current={props.current} plus={3} />
      {props.current <= 3 && <PageLink max={props.max} current={props.current} plus={4} />}
      {props.current <= 2 && <PageLink max={props.max} current={props.current} plus={5} />}
      {props.current <= 1 && <PageLink max={props.max} current={props.current} plus={6} />}
    </div>
    </div>
  )
}

const PageLink = ({ max, current, plus }) => {
  let newNumber = current + plus
  if (newNumber > 0 && newNumber <= max) {
    return <a className="paginate__item text" href={newNumber == 1 ? '/blog/' : "/blog/page/" + newNumber + "/"}>{newNumber}</a>
  }
}