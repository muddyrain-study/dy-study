const obj = {
  a: "1",
};
obj.a = 111;
Object.defineProperty(obj, "a", {
  get() {
    console.log("get");
    return obj._a;
  },
  set(val) {
    console.log("set");
    obj._a = val;
  },
});
