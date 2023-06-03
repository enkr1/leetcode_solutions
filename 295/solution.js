class MedianFinder {

  constructor() {
    this.list = [];
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum = (num) => {
    this.list.push(num);
  };

  /**
   * @return {number}
   */
  findMedian = () => {
    let list = this.list.sort((a, b) => a - b);
    if (list.length % 2 == 0) {
      return (list[(list.length / 2) - 1] + list[(list.length / 2)]) / 2;
    } else {
      return list[Math.floor((list.length / 2))];
    }
  };
}
