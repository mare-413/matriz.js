function Matrix(r_, c_) {
  this.rows = r_ || 1;
  this.cols = c_ || 1;
  this.vals = [];

  for (var r = 0; r < this.rows; r++) {
    this.vals[r] = [];
    for (var c = 0; c < this.cols; c++) {
      this.vals[r][c] = 0;
    }
  }
}

Matrix.prototype.size = function() {
  this.rows = this.vals.length;
  this.cols = this.vals[0].length;
  return this;
}

Matrix.sigmoid = function(n_) {
  return 1 / (1 + exp(n_ * -1));
}

Matrix.fromArray = function(arr_) {
  var tmp = new Matrix(arr_.length, 1);
  for (var r = 0; r < tmp.rows; r++) {
    tmp.vals[r][0] = arr_[r];
  }
  return tmp;
}

Matrix.prototype.randomize = function(s_, e_) {
  for (var r = 0; r < this.rows; r++) {
    for (var c = 0; c < this.cols; c++) {
      this.vals[r][c] = random(s_, e_);
    }
  }
  return this;
}

Matrix.prototype.do = function(f) {
  for (var r = 0; r < this.rows; r++) {
    for (var c = 0; c < this.cols; c++) {
      this.vals[r][c] = f(this.vals[r][c], r, c);
    }
  }
  return this;
}

Matrix.prototype.copy = function() {
  var tmp = new Matrix(this.rows, this.cols);
  for (var r = 0; r < this.rows; r++) {
    for (var c = 0; c < this.cols; c++) {
      tmp.vals[r][c] = this.vals[r][c];
    }
  }
  return tmp;
}

Matrix.prototype.print = function() {
  console.table(this.vals);
}

Matrix.prototype.add = function(n_) {
  if (n_ instanceof Matrix) {
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        this.vals[r][c] += n_.vals[r][c];
      }
    }
    return this;
  } else {
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        this.vals[r][c] += n_;
      }
    }
    return this;
  }
}

Matrix.prototype.mult = function(n_) {
  if (n_ instanceof Matrix) {
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        this.vals[r][c] *= n_.vals[r][c];
      }
    }
    return this;
  } else {
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        this.vals[r][c] *= n_;
      }
    }
    return this;
  }
}

Matrix.prototype.dot = function(n_) {
  if (this.cols === n_.rows) {
    var res = new Matrix(this.rows, n_.cols);
    for (var r = 0; r < res.rows; r++) {
      for (var c = 0; c < res.cols; c++) {
        var sum = 0;
        for (var k = 0; k < this.cols; k++) {
          sum += this.vals[r][k] * n_.vals[k][c];
        }
        res.vals[r][c] = sum;
      }
    }
    this.vals = res.vals;
    this.size();
    return this;
  } else return undefined;
}

Matrix.prototype.toArray = function() {
  var arr = [];
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      arr.push(this.vals[i][j]);
    }
  }
  return arr;
}

Matrix.dot = function(n1_, n2_) {
  if (n1_.cols == n2_.rows) {
    var res = new Matrix(n1_.rows, n2_.cols);
    for (var r = 0; r < res.rows; r++) {
      for (var c = 0; c < res.cols; c++) {
        var sum = 0;
        for (var k = 0; k < n1_.cols; k++) {
          sum += n1_.vals[r][k] * n2_.vals[k][c];
        }
        res.vals[r][c] = sum;
      }
    }
    return res;
  } else return undefined;
}

Matrix.prototype.sub = function(n_) {
  if (n_ instanceof Matrix) {
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        this.vals[r][c] -= n_.vals[r][c];
      }
    }
    return this;
  } else {
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        this.vals[r][c] -= n_;
      }
    }
    return this;
  }
}