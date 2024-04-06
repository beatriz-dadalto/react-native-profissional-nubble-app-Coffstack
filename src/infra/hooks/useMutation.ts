import React from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 * @description Adicionar, Exlucir ou Modificar alguma coisa
 * @param mutationFn exemplo: quando postCommentService chama algum serviço dele
 * @param TVariables São variaveis da mutation
 * @param TData Tipo de dado genérico
 * @function mutate recebe TVariables
 */
export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(variables);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (mutateError) {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'Error mutation');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
