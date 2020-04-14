class MyConsole {
    arr = [];
    log(param) {
        this.arr.push(param.toString());
        return param.toString();
    };
    history(range) {
        range = range ? range : this.arr.length;
        this.arr.forEach((element, index) => {
            if(index < range) {
                console.log(element);
            }
        })
    };
    clearHistory() {
        if(this.arr.length > 0)
        {
        this.arr =[];
        return true;
        }

    };
}

const myConsole = new MyConsole();
console.log(myConsole.log(123));