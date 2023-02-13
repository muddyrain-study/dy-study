class MyMap {
  constructor(iterator = []) {
    if (typeof iterator[Symbol.iterator] !== "function") {
      throw new TypeError(`${iterator}不是一个可迭代的对象`);
    }
    this._datas = [];
    for (const item of iterator) {
      if (typeof item[Symbol.iterator] !== "function") {
        throw new TypeError(`${item}不是一个可迭代的对象`);
      }
      const iterator = item[Symbol.iterator]();
      const key = iterator.next().value;
      const value = iterator.next().value;
      this.set(key, value);
    }
  }
  get(key) {
    const obj = this._getObj(key);
    if (obj) {
      return obj.value;
    }
  }
  set(key, value) {
    const obj = this._getObj(key);
    if (obj) {
      obj.value = value;
    } else {
      this._datas.push({
        key,
        value,
      });
    }
  }
  _getObj(key) {
    for (const item of this._datas) {
      if (this.isEqual(item.key, key)) {
        return item;
      }
    }
  }
  has(key) {
    return this._getObj(key) !== undefined;
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
  get size() {
    return this._datas.length;
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

const s = new MyMap([
  ["a", 3],
  ["b", 4],
  ["c", 5],
]);
console.log(s);
s.set("tt", "2");
console.log(s, s.size);

for (const item of s) {
  console.log(item);
}
