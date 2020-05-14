import { searchAjaxObservable } from '@/rxjs-utils';

console.log('hi');

const input:HTMLInputElement = document.getElementById('input');
const resultDOM:HTMLDivElement = document.getElementById('result');

searchAjaxObservable(input, '/api/data')
  .subscribe((result) => {
    resultDOM.innerHTML = JSON.stringify(result);
  });
