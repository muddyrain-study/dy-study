class MySet {
  constructor(iterator = []) {
    if (typeof iterator[Symbol.iterator] !== "function") {
      throw new TypeError(`${iterator}不是一个可迭代的对象`);
    }
    this._datas = [];
    for (const item of iterator) {
      this.add(item);
    }
  }
  add(data) {
    if (!this.has(data)) {
      this._datas.push(data);
    }
  }
  has(data) {
    for (const item of this._datas) {
      if (this.isEqual(data, item)) {
        return true;
      }
    }
    return false;
  }
  delete(data) {
    for (const [index, item] of this._datas.entries()) {
      if (this.isEqual(data, item)) {
        this._datas.splice(index, 1);
        return true;
      }
    }
    return false;
  }
  *[Symbol.iterator]() {
    for (const item of this._datas) {
      yield item;
    }
  }
  clear() {
    this._datas = [];
  }
  isEqual(data1, data2) {
    if (data1 === 0 && data2 === 0) {
      return true;
    }
    return Object.is(data1, data2);
  }
}

const s = new MySet([5, 26, 25, 5]);

for (const item of s) {
  console.log(item);
}
