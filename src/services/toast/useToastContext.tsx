import React from 'react';

import {ToastContext} from './Providers/ToastProvider';
import {ToastService} from './toastTypes';

export function useToastContext(): ToastService {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  }

  return context;
}
