import {ToastService} from './toastTypes';
import {useToastContext} from './useToastContext';

/**@description Isola a implementação de `useToastContext()` para poder alternar facilmente entre context e zustand ou algum outro meio de genrência de estado */
export function useToast(): ToastService {
  return useToastContext();
}
