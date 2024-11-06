/**
 * @description interface padronizada para operações de armazenamento */
export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage;

/**
 * initializeStorage() é chamada dentro do arquivo App.tsx
 * @param storageImpl é uma implementação concreta
 * da interface Storage para realizar as operações de armazenamento.
 * Neste projeto tem `MMKVStorage` e `asyncStorage` para mobile */
export function initializeStorage(storageImpl: Storage) {
  storage = storageImpl;
}
