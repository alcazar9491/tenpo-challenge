import dayjs from 'dayjs';


interface IlastTxh {
    tx: string;
    expireDate: string;
}

export const setTransactionsHash = (txh: string): void => {
    localStorage.setItem(
        'lastTxH',
        JSON.stringify({ tx: txh, expireDate: dayjs().add(1, 'minute').format() })
      )
}

export const removeTransactionsHash = ():void => {
    localStorage.removeItem('lastTxH')
}
export const getLastTransactionsHash = ():IlastTxh => JSON.parse(localStorage.getItem('lastTxH') ?? '{}') 


export const setTxhInit = () => 
localStorage.setItem(
    'lastTxH',
    JSON.stringify({ tx: 'init', expireDate: dayjs().add(1, 'minute').format() })
  );