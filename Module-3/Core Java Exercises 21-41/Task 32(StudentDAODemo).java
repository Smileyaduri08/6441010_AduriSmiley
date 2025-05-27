import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class StudentDAODemo {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db";
        try (Connection conn = DriverManager.getConnection(url)) {
            StudentDAO dao = new StudentDAO(conn);
            dao.insertStudent("Charlie");
            dao.updateStudentName(1, "Alice Updated");
            System.out.println("Insert and update operations completed.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
