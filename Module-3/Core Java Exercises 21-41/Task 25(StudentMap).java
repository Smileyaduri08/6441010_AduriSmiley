import java.util.HashMap;
import java.util.Scanner;

public class StudentMap {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner sc = new Scanner(System.in);
        String input;
        int id;

        System.out.println("Add student entries (type 'exit' as name to stop):");
        while (true) {
            System.out.print("Enter student ID: ");
            id = sc.nextInt();
            sc.nextLine(); // consume newline
            System.out.print("Enter student name: ");
            input = sc.nextLine();
            if (input.equalsIgnoreCase("exit")) break;
            studentMap.put(id, input);
        }

        System.out.print("Enter ID to lookup: ");
        int lookupId = sc.nextInt();
        String name = studentMap.get(lookupId);
        if (name != null) {
            System.out.println("Student with ID " + lookupId + ": " + name);
        } else {
            System.out.println("No student found with ID " + lookupId);
        }
    }
}
