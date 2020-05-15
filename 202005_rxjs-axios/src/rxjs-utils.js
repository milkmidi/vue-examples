/* eslint no-underscore-dangle:0 */
// fork
// https://github.com/zhaosiyang/axios-observable/blob/master/lib/create-observable.ts
import axios, { CancelToken } from 'axios';
import {
  Observable,
  Subscriber,
  of,
  fromEvent,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  pluck,
} from 'rxjs/operators';


class AxiosSubscriber extends Subscriber {
  constructor(observer, url:string) {
    super(observer);
    this.completed = false;
    this.cancelSource = CancelToken.source();
    axios.get(url, {
      cancelToken: this.cancelSource.token,
    })
      .then((response) => {
        this.completed = true;
        observer.next(response.data);
        observer.complete();
      })
      .catch((error) => {
        this.completed = true;
        if (axios.isCancel(error)) { // axios cancel 會觸發 catch 事件
          observer.complete();
        } else {
          observer.error(new Error(error.response.data.error));
        }
      });
  }

  unsubscribe() {
    super.unsubscribe();
    // cancel XHR
    console.log('unsubscribe this.completed:', this.completed);
    if (this.completed === false) {
      this.cancelSource.cancel('axios cancel');
      this.completed = true;
    }
    this.cancelSource = null;
    delete this.cancelSource;
  }
}


export function fromAxios(url:string) {
  return new Observable((observer) => new AxiosSubscriber(observer, url));
}

export function searchAjaxObservable(dom:HTMLInputElement, url:string) {
  return fromEvent(dom, 'input')
    .pipe(
      pluck('target', 'value'),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value) => {
        const urlWithQ = `${url}?q=${value}`;
        return fromAxios(urlWithQ)
          .pipe(
            catchError((err) => {
              console.log('Handling error locally and rethrowing it...', err);
              return of({ error: err.message });
            }),
          );
      }),
    );
}
