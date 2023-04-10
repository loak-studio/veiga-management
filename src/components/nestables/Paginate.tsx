export default function Paginate({current,max}:any) {
  return (
    <div className="paginate-container">
      <div className="paginate">
        <Previous current={current} />
        {max - current <= 2 && (
          <PageLink max={max} current={current} plus={-6} />
        )}
        {max - current <= 1 && (
          <PageLink max={max} current={current} plus={-5} />
        )}
        {max - current <= 0 && (
          <PageLink max={max} current={current} plus={-4} />
        )}
        <PageLink max={max} current={current} plus={-3} />
        <PageLink max={max} current={current} plus={-2} />
        <PageLink max={max} current={current} plus={-1} />
        <span className="paginate__item paginate__item--active text">
          {current}
        </span>
        <PageLink max={max} current={current} plus={1} />
        <PageLink max={max} current={current} plus={2} />
        <PageLink max={max} current={current} plus={3} />
        {current <= 3 && (
          <PageLink max={max} current={current} plus={4} />
        )}
        {current <= 2 && (
          <PageLink max={max} current={current} plus={5} />
        )}
        {current <= 1 && (
          <PageLink max={max} current={current} plus={6} />
        )}
        <Next current={current} max={max} />
      </div>
    </div>
  );
}

const PageLink = ({ max, current, plus }:any) => {
  let newNumber = current + plus;
  if (newNumber > 0 && newNumber <= max) {
    return (
      <a
        className="paginate__item text"
        href={newNumber == 1 ? "/blog/" : "/blog/page/" + newNumber + "/"}
      >
        {newNumber}
      </a>
    );
  }

  return <></>
};

const Previous = ({ current, max }:any) => {
  if (current - 1 > 0) {
    return (
      <a
        title="Page précédente"
        className="paginate__previous"
        href={current - 1 == 1 ? "/blog/" : "/blog/page/" + (current - 1) + "/"}
      ></a>
    );
  } else {
    return <p className="paginate__previous paginate__previous--disabled"></p>;
  }
};
const Next = ({ current, max }:any) => {
  if (current < max) {
    return (
      <a
        title="Page suivante"
        className="paginate__next"
        href={"/blog/page/" + (current + 1) + "/"}
      ></a>
    );
  } else {
    return <p className="paginate__next paginate__next--disabled"></p>;
  }
};
