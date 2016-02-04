import java.io.*;
import java.util.*;

import static java.lang.Math.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        
        int tests = in.nextInt();
        int down, up;
        
        for (int t = 0; t < tests; t++) {
            
            down = (int) ceil(sqrt(in.nextInt()));
            up = (int) floor(sqrt(in.nextInt()));
            
            System.out.println(up + 1 - down);
        }
    }
}
