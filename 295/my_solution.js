class MedianFinder {

  constructor() {
    console.log("constructor")
    this.list = [];
  }


  /**
   * @param {number} num
   * @return {void}
   */
  addNum = (num) => {
    console.log("addNum")
    // console.log(num)
    // console.log(this.list);
    this.list.push(num);
    console.log(this.list);

  };

  /**
   * @return {number}
   */
  findMedian = () => {
    console.log("findMedian, list:")
    console.log(this.list)
    console.log()
    let list = this.list.sort((a, b) => a - b);
    if (list.length % 2 == 0) {
      console.log("> even list")
      console.log((list[(list.length / 2) - 1] + list[(list.length / 2)]) / 2)

      return (list[(list.length / 2) - 1] + list[(list.length / 2)]) / 2;
    } else {
      console.log("> odd list")
      console.log(list[Math.floor((list.length / 2))])
      return list[Math.floor((list.length / 2))];
    }
  };
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder();
obj.addNum(10);
obj.addNum(2);
obj.addNum(13);
var param_2 = obj.findMedian();
console.log(`p2: ${param_2}`)
obj.addNum(3);
obj.addNum(8);
obj.addNum(6);
var param_3 = obj.findMedian();
console.log(`p3: ${param_3}`)
