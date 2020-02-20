module.exports = function countCats(catMatrix) {

  let backyardCats = catMatrix.flat(); //flat убираем вложенность массивов. На сколько уровней вложенности уменьшается мерность исходного массива. По-умолчанию 1.

  let caught = backyardCats.filter(function(currentValue) { //filter ищит в массиве значение и добавляет это в новый массив caught
    return currentValue == "^^";
  });
  
  return caught.length;
  
};