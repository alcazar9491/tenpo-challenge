import { useCallback, useRef, useState } from 'react';

interface UseScrollDownPagination {
  limit: number;
}

interface Rprops {
  lastElementRef: (node: Element) => void;
  stopLoad: {
    StopLoad: boolean;
    setStopLoad: React.Dispatch<React.SetStateAction<boolean>>;
  };
  loading: {
    Loading: boolean;
    setLoading: React.Dispatch<boolean>;
  };
  skip: {
    Skip: number;
    setSkip: React.Dispatch<number>;
  };
  clear: () => void;
}

export const useScrollDownPagination = ({ limit = 10 }: UseScrollDownPagination): Rprops => {
  
  const [Loading, setLoading] = useState(false);
  const [Skip, setSkip] = useState(0);
  const [StopLoad, setStopLoad] = useState(false);

  const LIMIT = limit;

  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node:Element) => {
      if (Loading) return;
      if (observer.current) observer.current?.disconnect();
      if (!StopLoad) {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setSkip((ste) => ste + LIMIT);
          }
        });
        if (node) observer.current?.observe(node);
      }
    },
    [Loading, observer, StopLoad, LIMIT]
  );

  const clear = useCallback(() => {
    setLoading(false);
    setSkip(0);
    setStopLoad(false);
  }, []);

  return {
    lastElementRef,
    stopLoad: {
      StopLoad,
      setStopLoad,
    },
    loading: {
      Loading,
      setLoading,
    },
    skip: {
      Skip,
      setSkip,
    },
    clear,
  };
};
