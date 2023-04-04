export default function Paginate(props) {
  return (
    <div className="paginate-container">
      <div className="paginate">
        <Previous current={props.current}/>
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
      <Next current={props.current} max={props.max}/>
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

const Previous = ({current, max}) =>{
  
  if((current -1) > 0){
    return <a title="Page précédente" className="paginate__previous" href={(current - 1 ==1 )? "/blog/" : "/blog/page/" + (current -1) +"/"}></a>
  }
  else{
    return <p className="paginate__previous paginate__previous--disabled"></p>
  }
}
const Next = ({current, max}) =>{
  if((current) < max){
    return <a title="Page suivante" className="paginate__next" href={"/blog/page/" + (current +1) +"/"}></a>
  }
  else{
    return <p className="paginate__next paginate__next--disabled"></p>
  }
}