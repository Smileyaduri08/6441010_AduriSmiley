import java.util.ArrayList;
import java.util.Scanner;

public class StudentList {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        String input;

        System.out.println("Enter student names (type 'exit' to stop):");
        while (true) {
            input = sc.nextLine();
            if (input.equalsIgnoreCase("exit")) break;
            students.add(input);
        }

        System.out.println("Student names entered:");
        for (String name : students) {
            System.out.println(name);
        }
    }
}
