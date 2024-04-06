import {ToastService} from './toastTypes';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

/**
 * @description Isola a implementação de um gerenciador de estado para poder alternar facilmente entre context e zustand ou algum outro meio de genrência de estado
 * @returns retorne `useToastContext()` ou `useToastZustand()` dependendo de qual o projeto está usando.
 */
export function useToast(): ToastService['toast'] {
  // usando o context
  // const {toast} = useToastContext();
  // return toast;
  const toast = useToastZustand();
  return toast;
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  // usando o context
  // const {showToast, hideToast} = useToastContext();

  // return {
  //   showToast,
  //   hideToast,
  // };

  return useToastServiceZustand();
}
