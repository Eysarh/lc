#include<vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        double r;
        for (auto i : nums2) {
            nums1.push_back(i);
        }

        sort(nums1.begin(), nums1.end());
        int j = nums1.size() % 2;
        if (j ==  0) {
            int i = nums1.size() / 2;
            r = (nums1[i-1] + nums1[i]) / 2.0;
        } else {
            int i = nums1.size() / 2 + 1;
            r = nums1[i-1];
        }

        return r;
    }
};


int main() {
    auto test = new Solution();
    
    vector<int> nums1 = { 1,2 };
    vector<int> nums2 = { 3,4 };

    auto r = test->findMedianSortedArrays(nums1, nums2);

    return 0;
}