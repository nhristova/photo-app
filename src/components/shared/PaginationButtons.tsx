
interface PaginationButtonsProps {
  count: number;
  setPage: any;
}

export function PaginationButtons({ count, setPage }: PaginationButtonsProps) {

  if (count === 0) {
    return null;
  }

  const buttons = [];
  for (let i = 1; i <= count; i++) {
    buttons.push(<button key={i} onClick={() => setPage(i)}>{i}</button>);
  }

  return (
    <div className="pagination"> Pages &nbsp;
      {buttons}
    </div>
  );
}