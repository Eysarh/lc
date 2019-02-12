#include <string>
#include <vector>
#include <queue>
#include <iostream>
using namespace std;

int maxArea(vector<int>& height) {
  int i = 0, j = height.size() - 1, max = -1;
  int h, w;
  while (i != j) {
    h = height[i] > height[j] ? height[j] : height[i];
    w = j - i;
    int temp = h * w;
    max = max > temp ? max : temp;
    height[i] > height[j] ? --j : ++i;
  }
  return max;
}
 
int main() {
  vector<int> data = { 1,8,6,2,5,4,8,3,7 };
  auto a = maxArea(data);
  return 0;
}
