const button = document.querySelector('button');
const count = document.querySelector('.counter');
let counter = 0;


const clicks$ = Rx.Observable.fromEvent(button, 'click');
const multiClicks$ = clicks$
    .buffer( () => clicks$.throttle(800).debounce(400))
    .map(e => e.length)
    .filter(e => e === 3)
    ;


multiClicks$.subscribe(e => {
    console.log('++', e);
    count.textContent = ++counter;
});
