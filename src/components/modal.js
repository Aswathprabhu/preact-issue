import { useContext } from 'preact/hooks';
import { Context } from './context';

export default function List() {
  const { state, setState } = useContext(Context);
  return (
    <blaze-modal open>
      <h2>State is {state}</h2>
      <blaze-card-footer>
        <div class="c-input-group">
          <button class="c-button c-button--block c-button--info" onClick={() => setState(state + 1)}>Destruct DOM</button>
        </div>
      </blaze-card-footer>
    </blaze-modal>
  )
}