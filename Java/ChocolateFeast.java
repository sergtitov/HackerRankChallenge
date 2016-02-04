import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        
        int tests = in.nextInt();
        int n, c, m;
        int wrap;
        int count;
        for (int t = 0; t < tests; t++) {
            n = in.nextInt();
            c = in.nextInt();
            m = in.nextInt();
            
            wrap = n / c;
            count = wrap;

            while (wrap >= m) {
                int extraWrap = wrap / m;
                count += extraWrap;

                wrap = wrap % m + extraWrap;
            }
            
            System.out.println(count);
        }
    }
}
