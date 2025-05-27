public record PersonRecord(String name, int age) {}

import java.util.List;

public class PersonRecordDemo {
    public static void main(String[] args) {
        List<PersonRecord> people = List.of(
            new PersonRecord("Alice", 25),
            new PersonRecord("Bob", 17),
            new PersonRecord("Charlie", 30)
        );

        System.out.println("All persons:");
        people.forEach(System.out::println);

        System.out.println("Persons aged 18 or older:");
        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}
