#include <string>
#include <limits.h>
#include "main.h"

using namespace std;

int myAtoi(string str) {

  int ret = 0, comp = 0, idx = 0, sign = 1;

  if (str[idx] == '0' && (str[idx + 1] < '0' || str[idx + 1] > '9')) return 0;
  while (str[idx] == ' ' || str[idx] == '0')
  {
    ++idx;
  }
  if (str[idx] == '+' || str[idx] == '-') {
    sign = str[idx] == '+' ? 1 : -1;
    ++idx;
  }
  if (str[idx] < '0' || str[idx] > '9') {
    return 0;
  }

  for (; idx < str.length(); idx ++) {
    if (str[idx] >= '0' && str[idx] <= '9') {
      if (sign == 1 && (ret > INT_MAX / 10 || (ret == INT_MAX / 10 && str[idx] - '0' > 7))) return INT_MAX;
      else if (sign == -1 && (ret > INT_MAX / 10 || (ret == INT_MAX / 10 && str[idx] - '0' > 8))) return INT_MIN;
      ret = ret * 10 + str[idx] - '0';
    }
    else {
      return sign == 1 ? ret : -ret;
    }
  }
  return sign == 1 ? ret : -ret;
}
int main() {
  int a = myAtoi("-2147483648");
  return 0;
}