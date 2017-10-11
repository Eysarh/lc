#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
	vector<int> twoSum(vector<int>& nums, int target) {

		vector<int> ret;
		int isSuc = 0;
		auto length = nums.size();

		for (int i = 0; i < length; ++i) {
			int j = i + 1;
			for (j; j < length; ++j) {
				if (nums[i] + nums[j] == target) {
					isSuc = 1;
					ret.push_back(i);
					ret.push_back(j);
					break;
				}
			}
			if (isSuc) {
				break;
			}
		}
		return ret;
	}
};

int main()
{
	vector<int> nums{ 2, 7, 11, 15 };

	auto test = new Solution();
	auto ret = test->twoSum(nums, 9);
	return 0;
}