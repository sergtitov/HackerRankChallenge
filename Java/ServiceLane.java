import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int tests = in.nextInt();
        
        int[] road = new int[n];
        for (int i = 0; i < n; i++) {
            road[i] = in.nextInt();
        }
        
        int i,j;
        for (int t = 0; t < tests; t++) {
            i = in.nextInt();
            j = in.nextInt();
            
            int min = 4;
            while (i <= j) {
                min = Math.min(min, road[i]);
                i++;
            }
            
            System.out.println(min);
        }
    }
}
