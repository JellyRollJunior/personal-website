import erpin from '../../assets/v2/images/background.jpeg';

import { useReducer } from 'react';
import { Desktop } from './Desktop.jsx';
import { TAB_STYLE } from './Tab.jsx';
import { TabStrip } from './TabStrip.jsx';

const init = (tabs) => ({ hidden: [], stack: tabs.map((t) => t.id) });

const reducer = (state, action) => {
  const { id } = action;

  switch (action.type) {
    case 'focus': {
      if (state.stack.at(-1) === id) return state;
      // move tab to end
      return { ...state, stack: [...state.stack.filter((i) => i !== id), id] };
    }
    case 'hide': {
      if (state.hidden.includes(id)) return state;
      return { ...state, hidden: [...state.hidden, id] };
    }
    case 'show': {
      // remove from hidden & focus tab
      return {
        hidden: state.hidden.filter((i) => i !== id),
        stack: [...state.stack.filter((i) => i !== id), id],
      };
    }
    case 'toggle': {
      return reducer(state, {
        type: state.hidden.includes(id) ? 'show' : 'hide',
        id,
      });
    }
    default:
      return state;
  }
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, data, init);

  return (
    <div className="v2-base flex h-dvh w-dvw flex-col overflow-clip bg-black px-8 pt-8">
      {/* Content */}
      <main className="min-h-0 flex-1">
        <Desktop tabData={data} state={state} dispatch={dispatch} />
      </main>

      <TabStrip tabData={data} state={state} dispatch={dispatch} />
    </div>
  );
};

const data = [
  {
    id: '1',
    title: 'Erpin Rocks',
    tabStyle: TAB_STYLE.BORDERED,
    defaultPosition: { x: 5, y: 5 },
    Content: () => <img src={erpin} />,
  },
  {
    id: '2',
    title: 'Erpin Rocks 2',
    tabStyle: TAB_STYLE.BORDERLESS,
    defaultPosition: { x: 50, y: 50 },
    Content: () => <img src={erpin} />,
  },
];

export { Index };
