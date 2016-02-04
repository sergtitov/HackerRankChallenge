import java.io.*;
import java.util.*;

public class Solution {
    private static final int ENG_LET = 26;

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        
        int len = in.nextInt();
        String str = in.next();
        int k = in.nextInt();
        
        StringBuilder sb = new StringBuilder();
        char ch;
        for (int i = 0; i < len; i++) {
            ch = str.charAt(i);
            
            if (isChar(ch)) {
                sb.append(rotate(ch, k));
            } else {
                sb.append(ch);
            }
        }
        
        System.out.println(sb.toString());
    }
    
    private static boolean isChar(char ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    }
    
    private static char rotate(char ch, int k) {
        if (ch >= 'a' && ch <= 'z') {
            int temp = ch - 'a';
            temp += k;
            temp %= ENG_LET;
            return (char) ('a' + temp);
        } else {
            int temp = ch - 'A';
            temp += k;
            temp %= ENG_LET;
            return (char) ('A' + temp);
        }
    }
}
