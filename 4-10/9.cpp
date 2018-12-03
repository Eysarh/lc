bool isPalindrome(int x) {
  if (x < 0) return false;
  int reverse = 0, _x = x;
  while (_x != 0)
  {
    reverse = reverse * 10 + _x % 10;
    _x = _x / 10;
  }
  return reverse - x == 0 ? true : false;
}
int main() {
  int a = isPalindrome(15251);
  return 0;
}