import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        
        int tests = in.nextInt();
        for (int t = 0; t < tests; t++) {
            int gridRows = in.nextInt();
            in.nextInt(); // ignore grid columns
            
            String[] grid = new String[gridRows];
            for (int i = 0; i < gridRows; i++) {
                grid[i] = in.next();
            }
            
            int patRows = in.nextInt();
            in.nextInt(); // ignore pattern columns
            
            String[] pat = new String[patRows];
            for (int i = 0; i < patRows; i++) {
                pat[i] = in.next();
            }
            
            int p = 0, colStart = 0;
            int gStart = 0;
            boolean found = false;
            boolean inWindow = false;
            for (int g = 0; g < gridRows; g++) {
                int idx = findSubstring(grid[g], pat[p], colStart);
                
                if (idx == -1) { 
                    // no pattern string found
                    
                    if (gridRows - gStart <= patRows) { 
                        // it was last possible row to find pattern
                        found = false;
                        break;
                    }
                    
                    inWindow = false;
                    p = 0;
                    colStart = 0;
                    gStart++;
                    g = gStart - 1;
                    
                } else if (idx != -1 && inWindow && idx > colStart) { 
                    // new pattern position found, but not in expected column, not the first pattern row
                    
                    inWindow = false;
                    p = 0;
                    colStart = idx;
                    g = gStart - 1;
                    
                } else if (idx != -1) {  
                    // pattern string found
                    
                    if (!inWindow) {
                        colStart = idx;
                        inWindow = true;
                    }
                    
                    p++;
                    
                    if (p == patRows) {
                        found = true;
                        break;
                    }
                }
            }
            
            if (found) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
        }
    }
    
    private static int findSubstring(String str, String pat, int start) {
        int w = 0;
        for (int i = start; i < str.length(); i++) {
            if (str.charAt(i) == pat.charAt(w)) {
                w++;
                
                if (w >= pat.length()) {
                    return start;
                }
            } else {
                if (str.length() - start <= pat.length()) {
                    return -1;
                }
                
                start++;
                i = start - 1;
                w = 0;
            }
        }
        
        return -1;
    }
}
