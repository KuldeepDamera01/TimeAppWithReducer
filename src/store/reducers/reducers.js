import { SHOWTIME } from '../actions/timeActions.js';
import useCurrentTime from '../../useCurrentTime.js';

const Time = (props) => {
  const time = useCurrentTime();

  return <h1 class="time">{time}</h1>;
};



const currencyReducer = (state = 'Click to show time', action) => {
  //const [time, setTime] = useState(moment());
  switch (action.type) {
    case SHOWTIME:
      return (
        <div>
          <Time />
        </div>
      );
    default:
      return state;
  }
};

export { currencyReducer };
