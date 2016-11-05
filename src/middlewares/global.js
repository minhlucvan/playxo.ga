let source = Rx.Observable.create(function (observer) {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(j => {
            observer.onNext(j);
            observer.onCompleted();
        }).catch(observer.onError);
});
