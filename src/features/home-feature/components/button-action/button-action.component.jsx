import { AiOutlineArrowRight } from 'react-icons/ai';
import './button-action.component.css';

const ButtonAction = ({ body }) => {
  return (
    <button>
      {body} <AiOutlineArrowRight color="black" />
    </button>
  );
};

export default ButtonAction;
