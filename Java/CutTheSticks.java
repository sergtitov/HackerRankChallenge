import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        
        int n = in.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = in.nextInt();
        }
        
        int size = n;
        while (size > 0) {
            System.out.println(size);
            
            int min = Integer.MAX_VALUE;
            for (int i = 0; i < n; i++) {
                if (nums[i] != 0) {
                    min = Math.min(min, nums[i]);
                }
            }
            
            size = 0;
            for (int i = 0; i < n; i++) {
                if (nums[i] != 0) {
                    nums[i] -= min;
                    
                    if (nums[i] > 0) {
                        size++;
                    }
                }
            }
        }
    }
}
